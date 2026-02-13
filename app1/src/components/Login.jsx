import React from 'react'
import {Typography,Button,TextField} from '@mui/material';
const Login = () => {
  return (
    <div>
        <h1>Login Page</h1>
        <input type="text" placeholder='username' />
        <br /><br />
        <input type="text" placeholder='password' />
        <br /><br />
        <button>Login</button>
        <br /><br /><br /><br />
        <Typography variant="h1">Login Page</Typography><br />
        <TextField label="Username" variant="outlined" /><br /><br />
        <TextField label="Password" variant="outlined" /><br /><br />
        <Button variant="contained">SUBMIT</Button>
    </div>
  )
}

export default Login
