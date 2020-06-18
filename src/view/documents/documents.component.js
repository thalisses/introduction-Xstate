import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
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
    backgroundColor: "#b2dfdb"
  }
}));

function Documents() {
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
              Even the most advanced chatbots can’t hold a decent conversation,
              but AI systems are definitely getting better at generating the
              written word. A new web app provides ample proof, letting anyone
              enter a text prompt to which AI software will automatically
              respond.
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
              At the same time, you’ll soon see that, at a fundamental level,
              the system doesn’t understand language or the world at large. The
              text it generates has surface-level coherence but no long-term
              structure. When it writes stories, for example, characters appear
              and disappear at random, with no consistency in their needs or
              actions. When it generates dialogue, conversations drift aimlessly
              from topic to topic. If it gets more than a few responses, it
              seems like good luck, not skill.
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
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
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
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet. It uses a
              dictionary of over 200 Latin words, combined with a handful of
              model sentence structures, to generate Lorem Ipsum which looks
              reasonable. The generated Lorem Ipsum is therefore always free
              from repetition, injected humour, or non-characteristic words etc.
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
              The standard chunk of Lorem Ipsum used since the 1500s is
              reproduced below for those interested. Sections 1.10.32 and
              1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
              reproduced in their exact original form, accompanied by English
              versions from the 1914 translation by H. Rackham.
            </Box>
          </Paper>
        </GridListTile>
      </GridList>
    </Box>
  );
}

export default Documents;
