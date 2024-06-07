import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
  Box,
  IconButton,
  Hidden,
  Divider,
} from "@mui/material";
import {
  Home,
  People,
  ListAlt,
  Photo,
  Album,
  PostAdd,
  Comment,
  Logout,
  Menu as MenuIcon,
  Close as CloseIcon,
} from "@mui/icons-material";
import "./sidebar.css";

const Sidebar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const drawer = (
    <div>
      <Box display="flex" justifyContent="flex-end" p={1}>
        <IconButton onClick={handleSidebarToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider />
      <List>
        <ListItem button component={NavLink} to="/main" activeClassName="active">
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="Cars" />
        </ListItem>
        <ListItem button component={NavLink} to="/main/users" activeClassName="active">
          <ListItemIcon>
            <People />
          </ListItemIcon>
          <ListItemText primary="Users" />
        </ListItem>
        <ListItem button component={NavLink} to="/main/todos" activeClassName="active">
          <ListItemIcon>
            <ListAlt />
          </ListItemIcon>
          <ListItemText primary="Todos" />
        </ListItem>
        <ListItem button component={NavLink} to="/main/photos" activeClassName="active">
          <ListItemIcon>
            <Photo />
          </ListItemIcon>
          <ListItemText primary="Photos" />
        </ListItem>
        <ListItem button component={NavLink} to="/main/albums" activeClassName="active">
          <ListItemIcon>
            <Album />
          </ListItemIcon>
          <ListItemText primary="Albums" />
        </ListItem>
        <ListItem button component={NavLink} to="/main/posts" activeClassName="active">
          <ListItemIcon>
            <PostAdd />
          </ListItemIcon>
          <ListItemText primary="Posts" />
        </ListItem>
        <ListItem button component={NavLink} to="/main/comments" activeClassName="active">
          <ListItemIcon>
            <Comment />
          </ListItemIcon>
          <ListItemText primary="Comments" />
        </ListItem>
        <ListItem button component={NavLink} to="/" activeClassName="active">
          <ListItemIcon>
            <Logout />
          </ListItemIcon>
          <ListItemText primary="Log out" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ position: 'absolute', top: 16, left: 16 }}
      >
        <MenuIcon />
      </IconButton>
      <Hidden mdUp implementation="css">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden mdDown implementation="css">
        <Drawer
          variant="persistent"
          open={sidebarOpen}
          onClose={handleSidebarToggle}
        >
          {drawer}
        </Drawer>
      </Hidden>
    </>
  );
};

export default Sidebar;
