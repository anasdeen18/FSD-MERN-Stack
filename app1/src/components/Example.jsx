import { Button, Typography } from '@mui/material'
import React,{useState} from 'react'

const Example = () => {
    var[val,setVal] = useState()
  return (
    <div>
        <Typography variant='h2'>Example</Typography>
      <Button variant="contained" color="secondary" onClick={()=>{setVal("Welcome to Home")}}>HOME</Button>
      <Button variant="contained" color="secondary" onClick={()=>{setVal("Welcome to About")}}>ABOUT</Button>
      <Button variant="contained" color="secondary" onClick={()=>{setVal("Welcome to Contact")}}>CONTACT</Button>
      <Typography variant='h3'>{val}</Typography>
    </div>
  )
}

export default Example
