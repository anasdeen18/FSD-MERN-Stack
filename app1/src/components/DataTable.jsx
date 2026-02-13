import React from 'react'
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material';

const DataTable = () => {
    var mca=[
        {Name:"Adwaid",Place:"Kozhikode",RollNo:1},
        {Name:"Irfan",Place:"Aluva",RollNo:2},
        {Name:"Anshal",Place:"EKM",RollNo:3}
    ];
  return (
    <div style={{marginTop: "50px"}}>
<TableContainer>
    <Table>
        <TableHead>
            <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Place</TableCell>
                <TableCell>RollNo</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {mca.map((val,i)=>(
                    <TableRow>
                        <TableCell>{val.Name}</TableCell>
                        <TableCell>{val.Place}</TableCell>
                        <TableCell>{val.RollNo}</TableCell>
                    </TableRow>
                ))};
        </TableBody>
    </Table>
</TableContainer>
      
    </div>
  )
}

export default DataTable
