import { useState } from 'react'
import './App.css'
import ModalForm from './components/cvForm'

function App() {
  const [dialogOpen, setDialogOpen] = useState(true);
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john.doe@gmail.com');
  const [phone, setPhone] = useState('+420 123 456');
  const [schoolName, setSchoolName] = useState('School of Internet');
  const [schoolTitle, setSchoolTitle] = useState('Mechanic of Computer Networks');
  const [schoolYear, setSchoolYear] = useState('2009');
  const [jobName, setJobName] = useState('Random Name Security');
  const [jobTitle, setJobTitle] = useState('Guard');
  const [jobResponsibility, setJobResponsibility] = useState('Guarding');
  const [jobStartDate, setJobStartDate] = useState(new Date(2014, 7, 1));

  const handleClose = () => {
    setDialogOpen(false);
  }

  const handleOpen = () => {
    setDialogOpen(true);
  }

  return (
    <>
      <ModalForm  onClose={handleClose} dialogOpen={dialogOpen} />
      <button type="button" onClick={handleOpen}>Open Form</button>
    </>
  )
}

export default App
