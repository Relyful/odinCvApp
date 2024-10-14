function JobInfo({ 
  job,
  handleJobName,
  handleJobTitle,
  handleJobRespo,
  handleJobStartDate
 }) {  
  const list = job.map(job => {
    return (
      <li key={job.id} data-id={job.id}>
        <div className="formInput">
            <label htmlFor="jobName">Company Name: </label>
            <input
              type="text"
              name="jobName"
              id="jobName"
              value={job.name}
              onChange={handleJobName}
            />
          </div>
          <div className="formInput">
            <label htmlFor="jobTitle">Position Title: </label>
            <input
              type="text"
              name="jobTitle"
              id="jobTitle"
              value={job.title}
              onChange={handleJobTitle}
            />
          </div>
          <div className="formInput">
            <label htmlFor="jobRespo">Main responsibilities: </label>
            <input
              type="text"
              name="jobRespo"
              id="jobRespo"
              value={job.responsibility}
              onChange={handleJobRespo}
            />
          </div>
          <div className="formInput">
            <label htmlFor="jobStartDate">Job Start: </label>
            <input
              type="date"
              name="jobStartDate"
              id="jobStartDate"
              defaultValue={job.startDate}
              onChange={handleJobStartDate}
            />
          </div>
      </li>
    )
  })
  return <ul>{list}</ul>
}

export default JobInfo;