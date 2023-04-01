import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import GroupIcon from '@mui/icons-material/Group';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import TimelineIcon from '@mui/icons-material/Timeline';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';
import { red } from '@mui/material/colors';
const  Slidebar = () => {
  return (

    <>
     

  <Box flex={2}  pb={50}  sx={{display :{xs:"none",sm:"block"}}}>
 <List >
 <ListItem >
            <ListItemButton component="a" href="#dashborad">
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="dashborad" />
            </ListItemButton>
          </ListItem>
 <ListItem >
            <ListItemButton component="a" href="#page">
              <ListItemIcon>
                <ContactPageIcon />
              </ListItemIcon>
              <ListItemText primary="page" />
            </ListItemButton>
          </ListItem>
 <ListItem >
            <ListItemButton component="a" href="#Appointmentcalendar">
              <ListItemIcon>
                <CalendarMonthIcon />
              </ListItemIcon>
              <ListItemText primary="Appointmentcalendar" />
            </ListItemButton>
          </ListItem>
 <ListItem >
            <ListItemButton component="a" href="#Revenue">
              <TimelineIcon/>
              <ListItemText primary="Revenue" />
            </ListItemButton>
          </ListItem>
 <ListItem >
            <ListItemButton component="a" href="#chat">
              <ChatIcon/>
              <ListItemText primary="chat" />
            </ListItemButton>
          </ListItem>
 <ListItem >
            <ListItemButton component="a" href="#Notificaiton">
              <NotificationAddIcon/>
              <ListItemText primary="Notificaiton" />
            </ListItemButton>
          </ListItem>
        </List>
    </Box>
    </>
  
  ) 
}

export default Slidebar
