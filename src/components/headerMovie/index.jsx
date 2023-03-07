import React from "react";
import Fab from "@mui/material/Fab"
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import Avatar from "@mui/material/Avatar";
import FavoriteIcon from "@mui/icons-material/Favorite";

const styles = {
    root: {  
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    padding: 1.5,
  },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
};

const MovieHeader = (props) => {
  const movie = props.movie;
  var favourite = false
  const favouriteMovies = JSON.parse(window.localStorage.getItem('favourites'));
  console.log(favouriteMovies);

  for (var favouriteMovie of favouriteMovies) {
    favouriteMovie.id === movie.id ? favourite = favouriteMovie.favourite : favourite = false
  };
  
  return (
    <Paper component="div" sx={styles.root}>
      <Fab size="large" color="primary" aria-label="go back">
        <ArrowBackIcon/>
      </Fab>
      {favourite ? ( <>
        <Avatar sx={styles.avatar}>
          <FavoriteIcon />
        </Avatar> </>
      ) : null }
      <Typography variant="h4" component="h3">
        {movie.title}{"   "}
        <a href={movie.homepage}>
          <HomeIcon color="primary"  fontSize="='large"/>
        </a>
        <br />
        <span>{`${movie.tagline}`} </span>
      </Typography>
      <Fab size="large" color="primary" aria-label="go back">
        <ArrowForwardIcon/>
      </Fab>
    </Paper>
  );
};

export default MovieHeader;
