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
import AboutComponent from "../../components/AboutComponent/AboutComponent";
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import $ from 'jquery';
import '../../App.css';
import Contact from "../Contact/Contact";
const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  $(document).ready(function() {
        // declare variable
    var scrollTop = $(".scrollTop");

    $(window).scroll(function () {
      // declare variable
      var topPos = $(this).scrollTop();

      // if user scrolls down - show scroll to top button
      if (topPos > 100) {
        $(scrollTop).css("opacity", "1");
        $('#myheader').attr('style', 'background-color: #00091b !important; z-index: 10000');
      } else {
        $(scrollTop).css("opacity", "0");
        $('#myheader').attr('style', 'background-color: transparent !important; z-index: 10000');
      }

    }); // scroll END

    //Click event to scroll to top
    $(scrollTop).on('click', function () {
      $('html, body').animate({
        scrollTop: 0
      }, 800);
      return false;
    });
  });
  return (
    <div style={{ backgroundColor: "#00091B", color: "white" }}>
      <Header
          style={{position:'fixed',top:0}}
          brand="IIPS ACM CHAPTER "
          rightLinks={<HeaderLinks />}
          color="transparent"
          {...rest}
      />
      <div id={'jumbotron'} style={{
        width: '100%',
        height: window.innerHeight,
        marginTop: -105
      }}>
        <div style={{
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          // height: window.innerHeight - 200
          height: '100%'
        }}>
          <h1 className={'welcomeText'}>Welcome to ACM Chapter</h1>
          <h1 className={'welcomeText1'}>IIPS DAVV, Indore</h1>
        </div>
        <KeyboardArrowDownIcon className={'down-arrow'} style={{
          fontSize: 70
        }}
        onClick={() => {
          $('html, body').animate({
            scrollTop: $('#home').offset().top
          }, 1500);
        }}
        />
      </div>
    <div style={{ position:'relative', backgroundColor: "#00091B", color: "white" ,height:"100%" }}>
    <div className={classes.container}>
    <SliderComponent />
    <AboutComponent />
    <TeamsComponent  />
      <Contact />
    </div>
    </div>
      <Footer fixed />
      <div id="stop" className="scrollTop">
        <ExpandLessIcon  />
      </div>
    </div>
  );
}
