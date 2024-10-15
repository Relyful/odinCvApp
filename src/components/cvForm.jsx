import "./cvForm.css";
import SchoolInfo from "./schoolInfo";
import JobInfo from "./jobInfo";

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
  addEmptySchool,
  handleJobName,
  handleJobTitle,
  handleJobRespo,
  handleJobStartDate,
  nameVal,
  emailVal,
  phoneVal,
  school,
  job,
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
            school={school}
            handleSchoolName={handleSchoolName}
            handleSchoolTitle={handleSchoolTitle}
            handleSchoolYear={handleSchoolYear}
          />
          <button onClick={addEmptySchool}>New School</button>
        </fieldset>
        <fieldset>
          <legend>Practical Experience</legend>
          <JobInfo
            job={job}
            handleJobName={handleJobName}
            handleJobTitle={handleJobTitle}
            handleJobRespo={handleJobRespo}
            handleJobStartDate={handleJobStartDate}
          />
        </fieldset>
        <button type="button" onClick={submitHelper}>
          Submit
        </button>
      </form>
    </div>
  );
}
