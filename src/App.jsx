import { useState } from "react";
import "./App.css";
import ModalForm from "./components/cvForm";
import School from "./components/school";

function SchoolList({ school }) {
  const list = school.map((school) => {
    return (
      <li key={school.schoolId}>
        <p>{school.schoolName}</p>
        <p>{school.schoolTitle}</p>
        <p>{school.schoolYear}</p>
      </li>
    );
  });
  return <>{list}</>;
}

function App() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john.doe@gmail.com");
  const [phone, setPhone] = useState("+420 123 456");
  const [school, setSchool] = useState([
    {
      schoolName: "School of Internet",
      schoolTitle: "Mechanic of computer Networks",
      schoolYear: "2009",
      schoolId: crypto.randomUUID(),
    },
    {
      schoolName: "School of Pwnternet",
      schoolTitle: "Mechanic of computer Hackworks",
      schoolYear: "1337",
      schoolId: crypto.randomUUID(),
    },
  ]);
  const [job, setJob] = useState([
    {
      name: 'Random Name Security',
      title: 'Guard',
      responsibility: 'Guarding',
      startDate: '2014-07-01',
    },
  ]);

  const handleClose = () => {
    setDialogOpen(false);
  };

  const handleClickClose = (e) => {
    e.preventDefault();
    if (e.target.className === "formContainer") {
      setDialogOpen(false);
    }
  };

  const handleReset = () => {
    window.location.reload(false);
  };

  const handleOpen = () => {
    setDialogOpen(true);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleSchoolName = (e) => {
    const id = e.target.parentElement.parentElement.dataset.id;
    setSchool((prevSchool) =>
      prevSchool.map((school) =>
        school.schoolId === id
          ? { ...school, schoolName: e.target.value }
          : school
      )
    );
  };

  const handleSchoolTitle = (e) => {
    const id = e.target.parentElement.parentElement.dataset.id;
    setSchool((prevSchool) =>
      prevSchool.map((school) =>
        school.schoolId === id
          ? { ...school, schoolTitle: e.target.value }
          : school
      )
    );
  };

  const handleSchoolYear = (e) => {
    const id = e.target.parentElement.parentElement.dataset.id;
    setSchool((prevSchool) =>
      prevSchool.map((school) =>
        school.schoolId === id
          ? { ...school, schoolYear: e.target.value }
          : school
      )
    );
  };

  const handleJobName = (e) => {
    setJobName(e.target.value);
  };

  const handleJobTitle = (e) => {
    setJobTitle(e.target.value);
  };

  const handleJobRespo = (e) => {
    setJobResponsibility(e.target.value);
  };

  const handleJobStartDate = (e) => {
    setJobStartDate(e.target.value);
  };

  const addEmptySchool = (e) => {
    e.preventDefault();
    setSchool([...school, new School()]);
  };

  return (
    <>
      <ModalForm
        onClose={handleClose}
        onClickClose={handleClickClose}
        dialogOpen={dialogOpen}
        handleName={handleName}
        handleEmail={handleEmail}
        handlePhone={handlePhone}
        handleSchoolName={handleSchoolName}
        handleSchoolTitle={handleSchoolTitle}
        handleSchoolYear={handleSchoolYear}
        addEmptySchool={addEmptySchool}
        handleJobName={handleJobName}
        handleJobTitle={handleJobTitle}
        handleJobRespo={handleJobRespo}
        handleJobStartDate={handleJobStartDate}
        nameVal={name}
        emailVal={email}
        phoneVal={phone}
        school={school}
        jobNameVal={jobName}
        jobTitleVal={jobTitle}
        jobRespoVal={jobResponsibility}
        jobStartDateVal={jobStartDate}
      />
      <button type="button" onClick={handleOpen}>
        Open Form
      </button>
      <button type="button" onClick={handleReset}>
        Reset
      </button>
      <h1>{name}</h1>
      <ul>
        <li>{email}</li>
        <li>{phone}</li>
        <SchoolList school={school} />
        <li>{jobName}</li>
        <li>{jobTitle}</li>
        <li>{jobResponsibility}</li>
        <li>{jobStartDate.toLocaleString().split(",")[0]}</li>
      </ul>
    </>
  );
}

export default App;
