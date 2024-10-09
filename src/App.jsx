import { useState } from 'react'
import './App.css'
import ModalForm from './components/cvForm'

function App() {
  const [dialogOpen, setDialogOpen] = useState(true);

  const handleClose = () => {
    setDialogOpen(false)
  }
  return (
    <>
      <ModalForm  onClose={handleClose} dialogOpen={dialogOpen} />
    </>
  )
}

export default App
