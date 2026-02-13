import { Button,Typography } from '@mui/material'
import React, {useState} from 'react'

const Counter = () => {
    var[count,setCount] = useState(0)
  return (
    <div>
      <Typography variant='h3'>Count:{count}</Typography>
      <Button variant='contained' onClick={() => setCount(count+1)} color='success'> + </Button> &nbsp;&nbsp;&nbsp;
      <Button variant='contained' onClick={() => setCount(count-1)} color='error'> - </Button>
    </div>
  )
}

export default Counter