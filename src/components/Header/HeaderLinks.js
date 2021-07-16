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
import $ from 'jquery';
const useStyles = makeStyles(styles);
import "./HeaderLinks.css";
export default function HeaderLinks(props) {
  const classes = useStyles();
  const gotoSection = (id) => {
    if (document.getElementById(id)) {
      const temp_id = "#" + id;
      $('html, body').animate({
        scrollTop: $(temp_id).offset().top
      }, 1500);
    } else {
      window.open('/', '_self');
        const temp_id = "#" + id;
        setTimeout(() => {
            $('html, body').animate({
                scrollTop: $(temp_id).offset().top
            }, 1500);
        }, 1000);
    }

  }

  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Link className="navlinks" to="/"onClick={() => {
          gotoSection('jumbotron');
        }}>
          <Button
            color="transparent"
            className={classes.navLink}
            style={{ fontSize: 18 }}
          >
            Home
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link className="navlinks"  onClick={() => {
          gotoSection('about');
        }}>
          <Button
            color="transparent"
            className={classes.navLink}
            style={{ fontSize: 18 }}
          >
            About
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link className="navlinks" onClick={() => {
          gotoSection('team');
        }}>
          <Button
            color="transparent"
            className={classes.navLink}
            style={{ fontSize: 18 }}
          >
            Team
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link className="navlinks" to="/events" onClick={() => {
          // gotoSection('events');
        }}>
          <Button
            color="transparent"
            className={classes.navLink}
            style={{ fontSize: 18 }}
          >
            Events
          </Button>
        </Link>
      </ListItem>
         <ListItem className={classes.listItem}>
        <Link className="navlinks" onClick={() => {
          gotoSection('contact');
        }}>
          <Button
            color="transparent"
            className={classes.navLink}
            style={{ fontSize: 18 }}
          >
            Contact
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link className="navlinks" to="/codeofconduct">
          <Button
            color="transparent"
            className={classes.navLink}
            style={{ fontSize: 18 }}
          >
            Code of conduct
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
      <span className="navlinks" >
          <a
            color="transparent"
            className={classes.navLink}
            style={{ fontSize: 18 }}
            target="_blank"
            href="https://github.com/iips-acm"
          >
            Github
          </a>
        </span>
      </ListItem>
    </List>
  );
}
