export default function ModalForm() {
  return (
    <form action='' method='get' className='cvForm'>
        <fieldset>
          <legend>Personal Information</legend>
          <div className='formInput'>
            <label htmlFor="name">Name: </label>
            <input type='text' name='name' id='name' />
          </div>
          <div className="formInput">
            <label htmlFor="email">Email: </label>
            <input type="email" name="email" id="email" />
          </div>
          <div className="formInput">
            <label htmlFor="phone">Phone: </label>
            <input type="tel" name="phone" id="phone" />
          </div>
        </fieldset>
        <fieldset>
          <legend>Educational Experience</legend>
          <div className="formInput">
            <label htmlFor="schoolName">School name: </label>
            <input type="text" name="schoolName" id="schoolName" />
          </div>
          <div className="formInput">
            <label htmlFor="schoolTitle">Title of Study: </label>
            <input type="text" name="schoolTitle" id="schoolTitle" />
          </div>
          <div className="formInput">
            <label htmlFor="schoolYear">Year od Study: </label>
            <input type="text" name="schoolYear" id="schoolYear" />
          </div>
        </fieldset>
        <fieldset>
          <legend>Practical Experience</legend>
          <div className="formInput">
            <label htmlFor="jobName">Company Name: </label>
            <input type="text" name="jobName" id="jobName" />
          </div>
          <div className="formInput">
            <label htmlFor="jobTitle">Position Title: </label>
            <input type="text" name="jobTitle" id="jobTitle" />
          </div>
          <div className="formInput">
            <label htmlFor="jobRespo">Main responsibilities: </label>
            <input type="text" name="jobRespo" id="jobRespo" />
          </div>
          <div className="formInput">
            <label htmlFor="jobStartDate">Job Start: </label>
            <input type="date" name="jobStartDate" id="jobStartDate" />
          </div>
        </fieldset>
        <button type="button">Submit</button>
      </form>
  )
}