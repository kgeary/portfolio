import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    textAlign: "center",
    background: "linear-gradient(to right, hsl(240, 76%, 13%), hsl(240, 76%, 20%))",
  }
});

function Footer(props) {
  const classes = useStyles();
  return (
    <footer className={classes.root}>
      <NavLink exact to="/" className="navLink" activeClassName="active">About</NavLink>
      <NavLink to="/contact" className="navLink" activeClassName="active">Contact</NavLink>
      <NavLink to="/portfolio" className="navLink" activeClassName="active">Portfolio</NavLink>
      <span className="navLink" onClick={() => window.scrollTo(0, 0)}>Top of Page</span>
    </footer>
  );
}
export default Footer;