import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import SectionBasics from "./Sections/SectionBasics.js";
import SectionNavbars from "./Sections/SectionNavbars.js";
import SectionTabs from "./Sections/SectionTabs.js";
import SectionPills from "./Sections/SectionPills.js";
import SectionNotifications from "./Sections/SectionNotifications.js";
import SectionTypography from "./Sections/SectionTypography.js";
import SectionJavascript from "./Sections/SectionJavascript.js";
import SectionCarousel from "./Sections/SectionCarousel.js";
import SectionCompletedExamples from "./Sections/SectionCompletedExamples.js";
import SectionLogin from "./Sections/SectionLogin.js";
import SectionExamples from "./Sections/SectionExamples.js";
import SectionDownload from "./Sections/SectionDownload.js";
import SliderComponent from "../../components/Slider/SliderComponent.js";
import styles from "assets/jss/material-kit-react/views/components.js";
import TeamsComponent from "../../components/Teams/TeamsComponent";

const useStyles = makeStyles(styles);

export default function Components(props) {
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
    <div style={{ position:"relative", backgroundColor: "#00091B", color: "white" ,height:"95vh" }}>
    {/* <div className={classes.container}>
      <h1>Home</h1>
      <p>Website is Underconstuction</p>
    </div> */}
    <SliderComponent />
    <TeamsComponent />
    </div>
      <Footer fixed />
    </div>
  );
}
