import "./cvForm.css";

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
          <div className="formInput">
            <label htmlFor="schoolName">School name: </label>
            <input
              type="text"
              name="schoolName"
              id="schoolName"
              defaultValue={schoolNameVal}
              onChange={handleSchoolName}
            />
          </div>
          <div className="formInput">
            <label htmlFor="schoolTitle">Title of Study: </label>
            <input
              type="text"
              name="schoolTitle"
              id="schoolTitle"
              value={schoolTitleVal}
              onChange={handleSchoolTitle}
            />
          </div>
          <div className="formInput">
            <label htmlFor="schoolYear">Year od Study: </label>
            <input
              type="text"
              name="schoolYear"
              id="schoolYear"
              value={schoolYearVal}
              onChange={handleSchoolYear}
            />
          </div>
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
