import { Avatar, Box, Divider, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React from 'react'
import { borders } from '@mui/system';
import { useParams } from 'react-router-dom'
import { green, lightGreen, red } from '@mui/material/colors';
// import { Avatar } from 'stream-chat-react';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
function createDataDotor(name, calories, fat, carbs) {
    return { name, calories, fat, carbs };
  }
function createDatamedicine(name, calories, fat,happy, carbs,start,end) {
    return { name, calories, fat,happy ,carbs,start,end };
  }
  
  const rows = [
    createData('Lorem', 15111119, "lorem@email", "12/04/2023", "algery")
  ];
  
  const rowsDoctor = [
    createDataDotor('Bessie Copere', "20/05/2023", "lorem", "lorem ispuem lorem aeii"),
    createDataDotor('Devon Lenan', "10/08/2023", "lorem", "lorem ispuem lorem aeii ")
  ];
  const rowMedicine = [
    createDatamedicine('Bessie Copere', "1121212", "03", "12","One Daily","1/01/2023","11/12/2023"),
    createDatamedicine('Devon Lenan', "6669955", "10 ", "10","One Daily","30/01/2023","11/12/2023"),
    createDatamedicine('Devon Lenan', "87875522", "05 ", "15","One Daily","21/03/2023","11/12/2023"),
  ];
  



const commonStyles = {
    bgcolor: 'background.paper',
    borderColor: 'text.primary',
    m: 1,
    border: 1,
    width: '100%',
    height: '10rem',
  };
const commonStyles1 = {
    bgcolor: 'background.paper',
    borderColor: 'text.primary',
    m: 1,
    border: 1,
    width: '100%',
    height: '8rem',
  };
const commonStyles2 = {
    bgcolor: 'background.paper',
    borderColor: 'text.primary',
    m: 1,
    border: 1,
    width: '100%',
    height: '12rem',
  };
  
const DetailPatient = () => {
    const {id} = useParams();
    return (
        <>
       <Box >

      <Typography variant='h4' p={1}>Patient Details </Typography>
<Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Box sx={{ ...commonStyles, border: 1 }} > 
      
      <Box sx={{ display: 'flex' }}>
       <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"  sx={{ width: 56, height: 56 }} />
      <Typography p={2} variant='h5'> Full name : John Paker  </Typography>
      </Box>
      <Divider light />
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
   <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Addres</TableCell>
            <TableCell align="right">PhoneNo</TableCell>
            <TableCell align="right">Email-Id</TableCell>
            <TableCell align="right">Joining Date</TableCell>
            <TableCell align="right">Catogery</TableCell>
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
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>


      </Box>
        </Box>
        

 </Box>
 
<Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Box sx={{ ...commonStyles1, border: 1 }} > 
      <Typography p={1} variant='h6'> Nurser  </Typography>
      <Box  >

<Box  sx={{display:'flex',justifyContent:'space-between'}}>
<Box p={1}>
       <Avatar  alt="Remy Sharp" src="https://images.pexels.com/photos/5407253/pexels-photo-5407253.jpeg?auto=compress&cs=tinysrgb&w=400"  sx={ { width: 56, height: 56 }} />
       
 </Box>

<Box>
       <Typography>Name</Typography>
       <Typography>Darmell Beward</Typography>
</Box>
<Box>
       <Typography>Phone Number</Typography>
       <Typography>9988552277</Typography>
</Box>
<Box>
       <Typography pr={1}>Email-Id</Typography>
       <Typography pr={20}>Darmell@Gmail</Typography>
</Box>

</Box>
       
        </Box>
</Box>
    
        

 </Box>
    <Typography variant='h6' p={1}> Doctor Notes</Typography>
<Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Box sx={{ ...commonStyles, border: 1 }} > 
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell> Doctor FullName</TableCell>
            <TableCell align="right">Appointment</TableCell>
            <TableCell align="right">Consult Type</TableCell>
            <TableCell align="right">Notes</TableCell>
      
          </TableRow>
        </TableHead>
        <TableBody>
         
          {rowsDoctor.map((row) => (
              <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
             
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
       
       
        </Box>
        

 </Box>
        <Box bgcolor="lightGreen" sx={{display:'flex',justifyContent:'space-evenly'}}>
            <Typography color="green" variant='h6'>Presciption</Typography>
            <Typography color="grey" variant='h6'>Lab Test </Typography>
            <Typography color="grey" variant='h6'>Radiology</Typography>
        </Box>
<Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Box sx={{ ...commonStyles2, border: 1 }} >
       
       
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Medicine Name</TableCell>
            <TableCell >Fax Name</TableCell>
            <TableCell >Dose</TableCell>
            <TableCell >Strength&nbsp;(mg)</TableCell>
            <TableCell >Frequency</TableCell>
            <TableCell >start&nbsp;(Date)</TableCell>
            <TableCell >end&nbsp;(Date)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowMedicine.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell >{row.calories}</TableCell>
              <TableCell >{row.fat}</TableCell>
              <TableCell >{row.happy}</TableCell>
              <TableCell >{row.carbs}</TableCell>
              <TableCell >{row.start}</TableCell>
              <TableCell >{row.end}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
       
       
       
       </Box>
        

 </Box>

</Box>

        </>
       
  )
}

export default DetailPatient;
