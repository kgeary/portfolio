import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Tooltip from "@material-ui/core/Tooltip"
import GitHubIcon from "@material-ui/icons/GitHub";
import { List } from "@material-ui/core"
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    "& a": {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      color: "hsl(240, 76%, 13%)",
    },
    "& h4": {
      display: "inline-block",
      marginLeft: "1rem",
    },
  },
});

function ContactToolbar(props) {
  const classes = useStyles();
  return (
    <Toolbar className={classes.root} disableGutters>
      <List>
        <a href="mailto:kgeary@gmail.com" target="_blank" rel="noopener noreferrer">
          <Tooltip title="Email" aria-label="Send An Email">
            <MailOutlineIcon />
          </Tooltip>
          <h4>Email</h4>
        </a>
        <a href="https://github.com/kgeary" target="_blank" rel="noopener noreferrer">
          <Tooltip title="Github Profile" aria-label="Goto Github Profile">
            <GitHubIcon />
          </Tooltip>
          <h4>Github</h4>
        </a>
        <a href="KevinGeary.pdf" target="_blank" rel="noopener noreferrer">
          <Tooltip title="Download My Resume" aria-label="Download Resume">
            <PictureAsPdfIcon />
          </Tooltip>
          <h4>Resume</h4>
        </a>
      </List>
    </Toolbar>

  );
}

export default ContactToolbar;
