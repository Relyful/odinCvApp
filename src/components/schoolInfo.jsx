export default function SchoolInfo({
  schoolNameVal,
  handleSchoolName,
  schoolTitleVal,
  handleSchoolTitle,
  schoolYearVal,
  handleSchoolYear,
}) {
  return (
    <>
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
    </>
  );
}
