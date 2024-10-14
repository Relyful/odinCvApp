import "./cvForm.css";
import SchoolInfo from "./schoolInfo";

export default function ModalForm({
  onClose,
  onClickClose,
  dialogOpen,
  handleName,
  handleEmail,
  handlePhone,
  handleSchoolName,
  handleSchoolTitle,
  handleSchoolYear,
  handleJobName,
  handleJobTitle,
  handleJobRespo,
  handleJobStartDate,
  nameVal,
  emailVal,
  phoneVal,
  schoolNameVal,
  schoolTitleVal,
  schoolYearVal,
  jobNameVal,
  jobTitleVal,
  jobRespoVal,
  jobStartDateVal,
}) {
  function submitHelper() {
    onClose();
  }

  if (!dialogOpen) return null;

  return (
    <div className="formContainer" onClick={onClickClose}>
      <form action="" method="get" className="cvForm">
        <fieldset>
          <legend>Personal Information</legend>
          <div className="formInput">
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              name="name"
              id="name"
              value={nameVal}
              onChange={handleName}
            />
          </div>
          <div className="formInput">
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              name="email"
              id="email"
              value={emailVal}
              onChange={handleEmail}
            />
          </div>
          <div className="formInput">
            <label htmlFor="phone">Phone: </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={phoneVal}
              onChange={handlePhone}
            />
          </div>
        </fieldset>
        <fieldset>
          <legend>Educational Experience</legend>
          <SchoolInfo
            schoolNameVal={schoolNameVal}
            handleSchoolName={handleSchoolName}
            schoolTitleVal={schoolTitleVal}
            handleSchoolTitle={handleSchoolTitle}
            schoolYearVal={schoolYearVal}
            handleSchoolYear={handleSchoolYear}
          />
        </fieldset>
        <fieldset>
          <legend>Practical Experience</legend>
          <div className="formInput">
            <label htmlFor="jobName">Company Name: </label>
            <input
              type="text"
              name="jobName"
              id="jobName"
              value={jobNameVal}
              onChange={handleJobName}
            />
          </div>
          <div className="formInput">
            <label htmlFor="jobTitle">Position Title: </label>
            <input
              type="text"
              name="jobTitle"
              id="jobTitle"
              value={jobTitleVal}
              onChange={handleJobTitle}
            />
          </div>
          <div className="formInput">
            <label htmlFor="jobRespo">Main responsibilities: </label>
            <input
              type="text"
              name="jobRespo"
              id="jobRespo"
              value={jobRespoVal}
              onChange={handleJobRespo}
            />
          </div>
          <div className="formInput">
            <label htmlFor="jobStartDate">Job Start: </label>
            <input
              type="date"
              name="jobStartDate"
              id="jobStartDate"
              defaultValue={jobStartDateVal}
              onChange={handleJobStartDate}
            />
          </div>
        </fieldset>
        <button type="button" onClick={submitHelper}>
          Submit
        </button>        
      </form>
    </div>
  );
}
