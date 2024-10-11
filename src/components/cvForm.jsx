import "./cvForm.css";

export default function ModalForm({
  onClose,
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
  jobStartDateVal
}) {
  function submitHelper() {
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const phone = document.querySelector('#phone').value;
    const schoolName = document.querySelector('#schoolName').value;
    const schoolTitle = document.querySelector('#schoolTitle').value;
    const schoolYear = document.querySelector('#schoolYear').value;
    const jobName = document.querySelector('#jobName').value;
    const jobTitle = document.querySelector('#jobTitle').value;
    const jobRespo = document.querySelector('#jobRespo').value;
    const jobStartDate = document.querySelector('#jobStartDate').value;

    handleName(name);
    handleEmail(email);
    handlePhone(phone);
    handleSchoolName(schoolName);
    handleSchoolTitle(schoolTitle);
    handleSchoolYear(schoolYear);
    handleJobName(jobName);
    handleJobTitle(jobTitle);
    handleJobRespo(jobRespo);
    handleJobStartDate(jobStartDate);
    onClose();
  }

  if (!dialogOpen) return null;

  return (
    <div className="formContainer">
      <form action="" method="get" className="cvForm">
        <fieldset>
          <legend>Personal Information</legend>
          <div className="formInput">
            <label htmlFor="name">Name: </label>
            <input type="text" name="name" id="name" value={nameVal} onChange={handleName} />
          </div>
          <div className="formInput">
            <label htmlFor="email">Email: </label>
            <input type="email" name="email" id="email" value={emailVal} />
          </div>
          <div className="formInput">
            <label htmlFor="phone">Phone: </label>
            <input type="tel" name="phone" id="phone" value={phoneVal} />
          </div>
        </fieldset>
        <fieldset>
          <legend>Educational Experience</legend>
          <div className="formInput">
            <label htmlFor="schoolName">School name: </label>
            <input type="text" name="schoolName" id="schoolName" defaultValue={schoolNameVal} />
          </div>
          <div className="formInput">
            <label htmlFor="schoolTitle">Title of Study: </label>
            <input type="text" name="schoolTitle" id="schoolTitle" value={schoolTitleVal} />
          </div>
          <div className="formInput">
            <label htmlFor="schoolYear">Year od Study: </label>
            <input type="text" name="schoolYear" id="schoolYear" value={schoolYearVal} />
          </div>
        </fieldset>
        <fieldset>
          <legend>Practical Experience</legend>
          <div className="formInput">
            <label htmlFor="jobName">Company Name: </label>
            <input type="text" name="jobName" id="jobName" value={jobNameVal} />
          </div>
          <div className="formInput">
            <label htmlFor="jobTitle">Position Title: </label>
            <input type="text" name="jobTitle" id="jobTitle" value={jobTitleVal} />
          </div>
          <div className="formInput">
            <label htmlFor="jobRespo">Main responsibilities: </label>
            <input type="text" name="jobRespo" id="jobRespo" value={jobRespoVal} />
          </div>
          <div className="formInput">
            <label htmlFor="jobStartDate">Job Start: </label>
            <input type="date" name="jobStartDate" id="jobStartDate" defaultValue={jobStartDateVal} />
          </div>
        </fieldset>
        <button type="button" onClick={submitHelper}>
          Submit
        </button>
      </form>
    </div>
  );
}
