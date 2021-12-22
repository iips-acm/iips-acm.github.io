import React from "react";
// nodejs library that concatenates classes
import { makeStyles } from "@material-ui/core/styles";
import InstagramIcon from "@material-ui/icons/Instagram"
import LinkedinIcon from "@material-ui/icons/LinkedIn"
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem"
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import SliderComponent from "../../components/Slider/SliderComponent.js";
import styles from "assets/jss/material-kit-react/views/components.js";
import TeamsComponent from "../../components/Teams/TeamsComponent";
import AboutComponent from "../../components/AboutComponent/AboutComponent";
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Button from "@material-ui/core/Button";
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
          <div style={{marginTop:"5%"}} >
          <center>
            <GridContainer>
              <GridItem xs={12} sm={12} md={4}>
              <Button href="https://discord.gg/m4ETnXJ7W5" variant="outlined" style={{color:"white",width:250,fontSize:14,
              margin:10,
              borderColor:"white"}}>Join us on Discord
              <i style={{marginLeft:10,fontSize:18}} className='fab fa-discord'></i>
              </Button>
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
              <Button href="https://www.instagram.com/acm_iips/" variant="outlined" style={{color:"white",width:250,fontSize:14,margin:10,borderColor:"white"}}>Follow us on Instagram
              <InstagramIcon style={{marginLeft:10,fontSize:18}}/>
              </Button>
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
              <Button href="https://www.linkedin.com/company/acm-student-chapter-iips-davv" variant="outlined" style={{color:"white",
              margin:10,width:250,fontSize:14,borderColor:"white"}}>Follow us on Linkedin
              <LinkedinIcon style={{marginLeft:10,fontSize:20}}/>
              </Button>
              </GridItem>
            </GridContainer>
            </center>
          </div>
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
