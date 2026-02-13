import { Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material';

const ApiData = () => {
    var[users,setUsers] = useState([]);
    useEffect(()=>{
      axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res)=>{
        console.log(res.data)
        setUsers(res.data)
      })
      .catch((error)=>{
        console.log(error)
      })
    },[])
  return (
    <div>
      <Typography variant="h3">Welcome to the user page</Typography>
      <TableContainer>
          <Table>
              <TableHead>
                  <TableRow>
                      <TableCell>ID</TableCell>
                      <TableCell>Username</TableCell>
                      <TableCell>Email</TableCell>
                  </TableRow>
              </TableHead>
              <TableBody>
                  {users.map((val,i)=>(
                          <TableRow>
                              <TableCell>{val.id}</TableCell>
                              <TableCell>{val.username}</TableCell>
                              <TableCell>{val.email}</TableCell>
                          </TableRow>
                      ))};
              </TableBody>
          </Table>
      </TableContainer>
    </div>
  )
}

export default ApiData
