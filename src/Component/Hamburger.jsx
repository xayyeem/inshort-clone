import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import { createMuiTheme, createTheme, useMediaQuery } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import catagories from '../data/catagory';

export default function SwipeableTemporaryDrawer({setCatagory}) {
  const [state, setState] = React.useState({
    
    left: false
   
  });

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(
    () =>
    createTheme({
        palette: {
          type: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : '200'  }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      style={{paddingLeft: '10px', paddingRight: '5px'}}
    >
      <List>
          <ListItem disablePadding>
           Catagory
          </ListItem>
      </List>

      <Divider />
      <List>
        
        {catagories.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton style={{height:40 , borderRadius:3   }} onClick={()=>{setCatagory(text)}}>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      
        <React.Fragment key={'left'}>
          <Button onClick={toggleDrawer('left', true)}> <MenuSharpIcon/> </Button>
          <ThemeProvider theme={theme}>
          <SwipeableDrawer
            anchor={'left'}
            open={state['left']}
            onClose={toggleDrawer('left', false)}
            onOpen={toggleDrawer('left', true)}
          >
            {list('left')}
          </SwipeableDrawer>
          </ThemeProvider>
        </React.Fragment>
     
    </div>
  );
}