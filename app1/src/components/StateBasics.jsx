import { Style } from '@mui/icons-material'
import { Button, TextField, Typography } from '@mui/material'
import React,{useState} from 'react'

const StateBasics = () => {
    var name= "Adwaid"
    var car="Tata"
    // use state hook
    var[varname,functionname]= useState("myVariable")
        var[myCar,setMyCar]= useState("Tata")
        var[input, setInput]= useState();
        var[out,setOut]= useState();
        const changeName = ()=>{
            setMyCar("Benz")
        };
        const inputVal = (e) => {
            console.log(e.target.value);
            setInput(e.target.value)
        };
        const addName = ()=>{
        setOut(input);
        }
    
  return (
    <div>
      <Typography variant='h3'>Welcome {myCar}</Typography>
      <Button variant='contained' onClick={changeName}>Change</Button>
       <Button variant='contained' onClick={()=>{setMyCar("Aura")}}>Switch</Button>
       <br /><br />
       <Typography variant="h3">Hello {out}</Typography>
       <TextField variant="outlined" label="Input your name" onChange={inputVal}/>
       <br /><br />
       <Button variant="contained" onClick={addName}>SUBMIT</Button>
    </div>
  )
}

export default StateBasics
