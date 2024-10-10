import { useState } from "react";
import "./App.css";
import ModalForm from "./components/cvForm";

function App() {
  const [dialogOpen, setDialogOpen] = useState(true);
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john.doe@gmail.com");
  const [phone, setPhone] = useState("+420 123 456");
  const [schoolName, setSchoolName] = useState("School of Internet");
  const [schoolTitle, setSchoolTitle] = useState(
    "Mechanic of Computer Networks"
  );
  const [schoolYear, setSchoolYear] = useState("2009");
  const [jobName, setJobName] = useState("Random Name Security");
  const [jobTitle, setJobTitle] = useState("Guard");
  const [jobResponsibility, setJobResponsibility] = useState("Guarding");
  const [jobStartDate, setJobStartDate] = useState(new Date(2014, 6, 1));

  const handleClose = () => {
    setDialogOpen(false);
  };

  const handleOpen = () => {
    setDialogOpen(true);
  };

  const handleName = (name) => {
    setName(name);
  };

  const handleEmail = (email) => {
    setEmail(email);
  };

  const handlePhone = (phone) => {
    setPhone(phone);
  };

  const handleSchoolName = (schoolName) => {
    setSchoolName(schoolName);
  };

  const handleSchoolTitle = (schoolTitle) => {
    setSchoolTitle(schoolTitle);
  };

  const handleSchoolYear = (schoolYear) => {
    setSchoolYear(schoolYear);
  };

  const handleJobName = (jobName) => {
    setJobName(jobName);
  };

  const handleJobTitle = (jobTitle) => {
    setJobTitle(jobTitle);
  };

  const handleJobRespo = (jobRespo) => {
    setJobResponsibility(jobRespo);
  };

  const handleJobStartDate = (jobStartDate) => {
    setJobStartDate(jobStartDate);
  };

  return (
    <>
      <ModalForm
        onClose={handleClose}
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
      />
      <button type="button" onClick={handleOpen}>
        Open Form
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
        <li>{jobStartDate.toLocaleString().split(',')[0]}</li>
      </ul>
    </>
  );
}

export default App;
