import React from "react";
import { useSelector } from "react-redux";
import { Grid, CircularProgress } from "@material-ui/core";
import Post from "./Post/Post";
import useStyles from "./styles";

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  return !posts.length ? (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "65vh" }}
    >
      <Grid item>
        <CircularProgress
          size={60}
          thickness={5}
          style={{
            borderRadius: "50%",
            color: "#B7F4FF ",
            background: "rgba(0, 0, 0, 0.2)",
            boxShadow: "white 0px 0px 10px 0px",
          }}
        />
      </Grid>
    </Grid>
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={6}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
