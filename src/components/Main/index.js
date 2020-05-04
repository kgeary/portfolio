import React, { useEffect } from 'react';
import { Paper } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { useViewport } from "../../hooks/useViewport";

const useStyles = makeStyles(
  {
    root: {
      borderRadius: "10px",
      opacity: "0.95",
      paddingTop: "2rem",
      padding: "1rem",
      textAlign: "left",
      "& p": {
        lineHeight: "1.5",
      },
    },
    mobile: {
      border: "none",
      borderRadius: "10px",
      boxShadow: "none",
      marginBottom: "0",
      marginTop: "0",
      opacity: "0.95",
      paddingTop: "2rem",
      padding: "1rem",
      textAlign: "left",
      "& p": {
        lineHeight: "1.5",
        fontSize: "20px",
      },
      "& li": {
        lineHeight: "1.5",
        fontSize: "20px",
      },
    },
    title: {
      marginTop: 0,
    },
    subtitle: {
    },
  }
);

function Main(props) {

  const { width } = useViewport();
  const classes = useStyles(width);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Paper className={width > 748 ? classes.root : classes.mobile} >
      <h1 className={classes.title}>{props.title}</h1>
      <h3 className={classes.subtitle}>{props.subtitle}</h3>
      {props.children}
    </Paper>
  );
}

export default Main;