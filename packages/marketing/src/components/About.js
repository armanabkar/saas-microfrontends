import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Copyright from "./Copyright";

const useStyles = makeStyles((theme) => ({
  "@global": {
    a: {
      textDecoration: "none",
    },
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4, 0, 2),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: "6.5rem",
    textAlign: "center",
  },
}));

export default function About() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h3"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            About Us
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            animi voluptatibus optio corporis suscipit, quod ut tempore harum
            culpa possimus. Harum, repellendus alias! Quisquam repudiandae
            asperiores deserunt omnis, in dicta!
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            animi voluptatibus optio corporis suscipit, quod ut tempore harum
            culpa possimus.
          </Typography>
        </Container>
      </div>
      <footer className={classes.footer}>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer>
    </>
  );
}
