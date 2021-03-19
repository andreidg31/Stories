import React, {useState, useContext} from 'react'
import {
  AppBar, 
  Toolbar, 
  IconButton, 
  Typography, 
  Button, 
  Drawer, 
  Divider, 
  List, 
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@material-ui/core';
import {NavLink} from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import InboxIcon from '@material-ui/icons/MoveToInbox'
import ListIcon from '@material-ui/icons/List';
import PostAddOutlinedIcon from '@material-ui/icons/PostAddOutlined';

import {Context} from './StoreProvider';
import appBarStyles from '../styles/MyAppBar';
import { useHistory } from 'react-router-dom';

const MyAppBar = () => {

  const history = useHistory();
  const [drawerState, setDrawerState] = useState(false);
  const [user, setUser] = useContext(Context);

  const classes = appBarStyles();

  const signOut = () => {
    setUser(null);
    history.push('/');
  }

  const showLogin =() => {
    if (!user) {
      return (
        <Button 
          onClick={() => history.push('/login')}
          color="inherit" 
          edge="end"
        >
          Login
        </Button>
      );
    }
    else {
      return (
        <Button 
          onClick={() => signOut()}
          color="inherit" 
          edge="end"
        >
        Sign out
        </Button>
      )
    }
  }
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton 
            onClick={() => setDrawerState(!drawerState)} 
            className={classes.menuButton} 
            edge="start" 
            color="inherit" 
            aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Story Book
          </Typography>
          {showLogin()}
          
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left" 
        open={drawerState}
      >
        <IconButton onClick={() => setDrawerState(false)}>
          <ChevronLeftIcon />
        </IconButton>
        <Divider />
        <List>
          <ListItem button onClick={() => setDrawerState(false)} component={NavLink} exact to="/">
              <ListItemIcon> <InboxIcon /> </ListItemIcon>
              <ListItemText> Home </ListItemText>
          </ListItem>
          {user!=null &&
            <ListItem button onClick={() => setDrawerState(false)} component={NavLink} exact to="/newPost">
              <ListItemIcon> <PostAddOutlinedIcon /> </ListItemIcon>
              <ListItemText> Create Post </ListItemText>
            </ListItem>
          }
          <ListItem button onClick={() => setDrawerState(false)} component={NavLink} exact to="/posts">
              <ListItemIcon> <ListIcon /> </ListItemIcon>
              <ListItemText> Posts </ListItemText>
          </ListItem>
         {/* <ListItem button onClick={() => setDrawerState(false)} component={NavLink} exact to="/login">
            <ListItemIcon> <InboxIcon /> </ListItemIcon>
            <ListItemText> Login  </ListItemText>
          </ListItem>
          */}
        </List>
      </Drawer>
    </div>
  );
}

export default MyAppBar;