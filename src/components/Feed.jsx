import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Link} from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
function createData(name, gender,Age, Nurse, location,icons) {
  return { name, gender, Age, Nurse, location,icons };
}

const rows = [
  createData('Bessie Cooper', "Male", 20, "nurse", "adddress lorem ",<VisibilityIcon/>),
  createData('Devon Lane', "Female", 30, "nurse", "adddress lorem ",<VisibilityIcon/>),
  createData('Camero Will', "Male", 25, "nurse", "adddress lorem ",<VisibilityIcon/>),
  createData('Rober Fox', "Female", 32, "nurse", "adddress lorem ",<VisibilityIcon/>),
  createData('Cody Fisher', "Male", 40, "nurse", "adddress lorem ",<VisibilityIcon/>),
];

const Feed = () => {
  return (


<TableContainer component={Paper} sx={{display:{xs:"block",sm:"block"}}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Patient Name</TableCell>
            <TableCell align="right">Gender</TableCell>
            <TableCell align="right">Age&nbsp;(YR)</TableCell>
            <TableCell align="right">Nurse</TableCell>
            <TableCell align="right">Location</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}   
              </TableCell>
           
              <TableCell align="right">{row.gender}</TableCell>
              <TableCell align="right">{row.Age}</TableCell>
              <TableCell align="right">{row.Nurse}</TableCell>
              <TableCell align="right">{row.location}</TableCell>
              <TableCell align="right">{row.icons}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  
  )
}

export default Feed
