import { useState } from "react";
import "./App.css";
import ModalForm from "./components/cvForm";

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
  ]);
  const [schoolName, setSchoolName] = useState("School of Internet");
  const [schoolTitle, setSchoolTitle] = useState(
    "Mechanic of Computer Networks"
  );
  const [schoolYear, setSchoolYear] = useState("2009");
  const [jobName, setJobName] = useState("Random Name Security");
  const [jobTitle, setJobTitle] = useState("Guard");
  const [jobResponsibility, setJobResponsibility] = useState("Guarding");
  const [jobStartDate, setJobStartDate] = useState("2014-07-01");

  const handleClose = () => {
    setDialogOpen(false);
  };

  const handleClickClose = (e) => {
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

  const handleSchoolName = (id, e) => {
    setSchool(prevSchool =>
      prevSchool.map((school) =>
        school.id === id ? { ...school, schoolName: e.target.value } : school
      )
    );
  };

  const handleSchoolTitle = (id, e) => {
    setSchool(prevSchool =>
      prevSchool.map((school) =>
        school.id === id ? { ...school, schoolTitle: e.target.value } : school
      )
    );
  };

  const handleSchoolYear = (id, e) => {
    setSchool(prevSchool =>
      prevSchool.map((school) =>
        school.id === id ? { ...school, schoolYear: e.target.value } : school
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
        handleJobName={handleJobName}
        handleJobTitle={handleJobTitle}
        handleJobRespo={handleJobRespo}
        handleJobStartDate={handleJobStartDate}
        nameVal={name}
        emailVal={email}
        phoneVal={phone}
        schoolNameVal={schoolName}
        schoolTitleVal={schoolTitle}
        schoolYearVal={schoolYear}
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
        <li>{schoolName}</li>
        <li>{schoolTitle}</li>
        <li>{schoolYear}</li>
        <li>{jobName}</li>
        <li>{jobTitle}</li>
        <li>{jobResponsibility}</li>
        <li>{jobStartDate.toLocaleString().split(",")[0]}</li>
      </ul>
    </>
  );
}

export default App;
