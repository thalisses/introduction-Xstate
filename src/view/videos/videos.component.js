import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: "100%",
    height: "100%"
  },
  box: {
    backgroundColor: "#ef9a9a"
  }
}));

function Videos() {
  const classes = useStyles();

  return (
    <Box className={classes.root} p={10}>
      <GridList cellHeight={160} className={classes.gridList} cols={3}>
        <GridListTile cols={1}>
          <Paper elevation={3}>
            <Box
              width={200}
              height={150}
              display="flex"
              alignItems="center"
              justifyContent="center"
              className={classes.box}
            >
              <PlayCircleOutlineIcon size="big" />
            </Box>
          </Paper>
        </GridListTile>
        <GridListTile cols={1}>
          <Paper elevation={3}>
            <Box
              width={200}
              height={150}
              display="flex"
              alignItems="center"
              justifyContent="center"
              className={classes.box}
            >
              <PlayCircleOutlineIcon size="big" />
            </Box>
          </Paper>
        </GridListTile>
        <GridListTile cols={1}>
          <Paper elevation={3}>
            <Box
              width={200}
              height={150}
              display="flex"
              alignItems="center"
              justifyContent="center"
              className={classes.box}
            >
              <PlayCircleOutlineIcon size="big" />
            </Box>
          </Paper>
        </GridListTile>
        <GridListTile cols={1}>
          <Paper elevation={3}>
            <Box
              width={200}
              height={150}
              display="flex"
              alignItems="center"
              justifyContent="center"
              className={classes.box}
            >
              <PlayCircleOutlineIcon size="big" />
            </Box>
          </Paper>
        </GridListTile>
        <GridListTile cols={1}>
          <Paper elevation={3}>
            <Box
              width={200}
              height={150}
              display="flex"
              alignItems="center"
              justifyContent="center"
              className={classes.box}
            >
              <PlayCircleOutlineIcon size="big" />
            </Box>
          </Paper>
        </GridListTile>
        <GridListTile cols={1}>
          <Paper elevation={3}>
            <Box
              width={200}
              height={150}
              display="flex"
              alignItems="center"
              justifyContent="center"
              className={classes.box}
            >
              <PlayCircleOutlineIcon size="big" />
            </Box>
          </Paper>
        </GridListTile>
      </GridList>
    </Box>
  );
}

export default Videos;
