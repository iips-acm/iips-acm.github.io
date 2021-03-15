/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);
import './HeaderLinks.css'
export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Link className="navlinks" to="/">
          <Button color="transparent" className={classes.navLink} style={{fontSize:18}}>
            Home
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link className="navlinks" to="/about">
          <Button color="transparent" className={classes.navLink} style={{fontSize:18}}>
            About
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link className="navlinks" to="/events">
          <Button color="transparent" className={classes.navLink} style={{fontSize:18}}>
            Events
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link className="navlinks" to="/codeofconduct">
          <Button color="transparent" className={classes.navLink} style={{fontSize:18}}>
            Code of conduct
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link className="navlinks" to="/github">
          <Button color="transparent" className={classes.navLink} style={{fontSize:18}}>
            Github
          </Button>
        </Link>
      </ListItem>
    </List>
  );
}
