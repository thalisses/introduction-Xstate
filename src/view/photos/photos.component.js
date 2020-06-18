import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Box from "@material-ui/core/Box";
import img1 from "./data/img1.jpg";
import img3 from "./data/img3.jpg";
import img2 from "./data/img2.jpg";
import img4 from "./data/img4.jpg";
import img5 from "./data/img5.jpg";
import img6 from "./data/img6.jpg";
import img7 from "./data/img7.jpg";
import img8 from "./data/img8.jpg";

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
  }
}));

const tileData = [
  {
    img: img1,
    title: "Image1",
    cols: 1
  },
  {
    img: img2,
    title: "Image2",
    cols: 1
  },
  {
    img: img3,
    title: "Image3",
    cols: 1
  },
  {
    img: img4,
    title: "Image4",
    cols: 1
  },
  {
    img: img5,
    title: "Image5",
    cols: 1
  },
  {
    img: img6,
    title: "Image6",
    cols: 1
  },
  {
    img: img7,
    title: "Image7",
    cols: 1
  },
  {
    img: img8,
    title: "Image8",
    cols: 1
  }
];

function Photos() {
  const classes = useStyles();

  return (
    <Box className={classes.root} p={5}>
      <GridList cellHeight={160} className={classes.gridList} cols={3}>
        {tileData.map(tile => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </Box>
  );
}

export default Photos;
