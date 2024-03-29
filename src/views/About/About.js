import React from "react";
// nodejs library that concatenates classes
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import styles from "assets/jss/material-kit-react/views/components.js";
const useStyles = makeStyles(styles);
export default function About(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div style={{ backgroundColor: "#00091B", color: "white" }}>
        <Header
        style={{position:'fixed',top:0}}
        brand="IIPS ACM CHAPTER "
        rightLinks={<HeaderLinks />}
        color="transparent"
        {...rest}
      />
    <div style={{ position:"relative",top:100, backgroundColor: "#00091B", color: "white" ,height:"95vh" }}>
    <div className={classes.container}>
      <h1>About</h1>
      <p>Website is Underconstuction</p>
    </div>
    </div>
      <Footer fixed />
    </div>
  );
}
