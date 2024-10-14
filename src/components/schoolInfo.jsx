export default function SchoolInfo({
  school,
  handleSchoolName,
  handleSchoolTitle,
  handleSchoolYear,
}) {
  const schoolList = school.map((school) => {
    return <li key={school.id}>
      <div className="formInput">
        <label htmlFor="schoolName">School name: </label>
        <input
          type="text"
          name="schoolName"
          id="schoolName"
          defaultValue={school.schoolName}
          onChange={handleSchoolName}
        />
      </div>
      <div className="formInput">
        <label htmlFor="schoolTitle">Title of Study: </label>
        <input
          type="text"
          name="schoolTitle"
          id="schoolTitle"
          value={school.schoolTitle}
          onChange={handleSchoolTitle}
        />
      </div>
      <div className="formInput">
        <label htmlFor="schoolYear">Year od Study: </label>
        <input
          type="text"
          name="schoolYear"
          id="schoolYear"
          value={school.schoolYear}
          onChange={handleSchoolYear}
        />
      </div>
    </li>;
  });

  return <ul>{schoolList}</ul>
}
