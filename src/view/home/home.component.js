import React from "react";
import { useMachine } from "@xstate/react";
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
import Button from "@material-ui/core/Button";

import myDriveMachine, { ACTIONS, STATES } from "./home.machine";
import Documents from "../documents/documents.component";
import Photos from "../photos/photos.component";
import Videos from "../videos/videos.component";

export default function Home() {
  const [current, send] = useMachine(myDriveMachine);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const { userName } = current.context;

  const isHome = current.value === STATES.home;
  const isPhotos = current.value === STATES.photos;
  const isVideos = current.value === STATES.videos;
  const isDocuments = current.value === STATES.documents;

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleOnChange = event => {
    send(ACTIONS.sendName, { value: event.target.value });
  };

  const handlePhotos = () => {
    send(ACTIONS.clickAtPhotos);
  };

  const handleVideos = () => {
    send(ACTIONS.clickAtVideos);
  };

  const handleDocuments = () => {
    send(ACTIONS.clickAtDocuments);
  };

  const handleBackToHome = () => {
    send(ACTIONS.BACK_HOME);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      {!isHome && (
        <Button variant="contained" color="primary" onClick={handleBackToHome}>
          Voltar para home!
        </Button>
      )}
      {isHome && (
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
                <MenuItem onClick={handlePhotos}>Photos</MenuItem>
                <MenuItem onClick={handleVideos}>Videos</MenuItem>
                <MenuItem onClick={handleDocuments}>Documents</MenuItem>
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
            <Typography>HELLO! {userName}!</Typography>
            <Box p={5}>
              <TextField
                id="standard-basic"
                label="Digite seu nome"
                value={userName}
                onChange={handleOnChange}
              />
              <IconButton aria-label="send">
                <SendIcon fontSize="small" />
              </IconButton>
            </Box>
          </Box>
        </>
      )}
      {isPhotos && <Photos />}
      {isVideos && <Videos />}
      {isDocuments && <Documents />}
    </>
  );
}
