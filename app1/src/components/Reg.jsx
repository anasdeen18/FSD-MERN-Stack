import React from 'react'
import {Typography,Button,TextField} from '@mui/material';

const Reg = () => {
  return (
    <div>
      <h1>Registration Form</h1>
      <TextField label="Name" variant="outlined" /><br /><br />
      <TextField label="Place" variant="outlined" /><br /><br />
      <TextField label="Age" variant="outlined" /><br /><br />
      <TextField label="Gender" variant="outlined" /><br /><br />
      <TextField label="Username" variant="outlined" /><br /><br />
      <TextField label="Password" variant="outlined" /><br /><br />
      <Button variant="contained">SUBMIT</Button>
    </div>
  )
}

export default Reg

