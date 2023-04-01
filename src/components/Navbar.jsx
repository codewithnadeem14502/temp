import { AppBar, Toolbar, Typography,styled, Box, InputBase, Badge, Avatar, Menu, MenuItem, } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
// import {MenuIcon,MailIcon,NotificationsIcon} from '@mui/icons-material';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import React, { useState } from 'react'





const StyledToolbar = styled(Toolbar) ({
  display:"flex",
  justifyContent:"space-between"
});
const Search = styled("div")(({theme}) =>({
  backgroundColor:"white",
  padding: "0 10px",
  borderRadius:theme.shape.borderRadius,
  width:"40%"
}))
const Icons = styled(Box)(({theme}) =>({
  // backgroundColor:"white"
  display:"none",
  gap:"20px",
  alignItems :"center", 
  [theme.breakpoints.up('sm')]:{
    display:"flex"
  }
}))
const UserBox = styled(Box)(({theme}) =>({
  // backgroundColor:"white"
  display:"flex",
  gap:"10px",
  alignItems :"center", 
  [theme.breakpoints.up('sm')]:{
    display:"none"
  }
}))
 
const Navbar = () => {
   const [open ,setOpen] = useState(false);


  return (
    <AppBar position='stick'>
      <StyledToolbar>
      <Typography variant = "h6" sx={{display:{xs:"none",sm:"block"}}}> MOHD </Typography>
      <MenuIcon  sx={{display:{xs:"block",sm:"none"}}} />
 <Search><InputBase placeholder='Search...'/></Search>
 <Icons>
 <Badge badgeContent={4} color="error">
  <MailIcon color="" />
</Badge>
 <Badge badgeContent={4} color="error">
  <NotificationsIcon />
</Badge>
{/* <Badge badgeInset="14%" color="danger">
  <Avatar src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
</Badge> */}
<Avatar sx={{width:40,heigh:40}}src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"onClick={e=>setOpen(true )} />
 </Icons>
 <UserBox>
 <Avatar sx={{width:40,heigh:40}}src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" onClick={e=>setOpen(true )}/>
 <Typography variant='span'>John</Typography>
 </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu> 
    </AppBar>
  )
}

export default Navbar
