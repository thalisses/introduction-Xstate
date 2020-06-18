import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import SendIcon from "@material-ui/icons/Send";

import Documents from "../documents/documents.component";
import Photos from "../photos/photos.component";
import Videos from "../videos/videos.component";

export default function Home() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Photos</MenuItem>
            <MenuItem onClick={handleClose}>Videos</MenuItem>
            <MenuItem onClick={handleClose}>Documents</MenuItem>
          </Menu>
          <Typography variant="h6" color="inherit">
            Drive with Xstate
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        width="100%"
        p={5}
        height={150}
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Typography>HELLO! @!</Typography>
        <Box p={5}>
          <TextField id="standard-basic" label="Digite seu nome" />
          <IconButton aria-label="send">
            <SendIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>
      <Photos />
      <Videos />
      <Documents />
    </>
  );
}
