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
// import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import styles from "assets/jss/material-kit-react/views/components.js";
import { events } from "../../Data/events";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { func } from "prop-types";
import Modal from "@material-ui/core/Modal";
import { blue } from "@material-ui/core/colors";
// console.log(events);

// const useStyles = makeStyles(styles);

// console.log(date);
export default function Events(props) {
  const [days, setDays] = React.useState(0);
  const [hours, setHours] = React.useState(0);
  const [mins, setMins] = React.useState(0);
  const [sec, setSec] = React.useState(0);
  const [upcomingTimer, setUpcomingTimer] = React.useState();
  const [upcomingEvents, setUpcomingEvents] = React.useState();
  const [pastEvents, setPastEvents] = React.useState();
  const [open, setOpen] = React.useState(false);

  const useStyles = makeStyles((theme) => ({
    paper: {
      position: "absolute",
      
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      // overflowX: "scroll",
      maxHeight: 600,
      zIndex: 10,
      padding: theme.spacing(2, 2, 1),
      width: "85%",
      [theme.breakpoints.up("md")]: {
        width: "40%",
      },
    },
  }));
  function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
      top: `${top}%`,
      left: `${left}%`,

      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  const [modalStyle] = React.useState(getModalStyle);
  const classes = useStyles();
  const date = new Date("2021", "11", "26");
  React.useEffect(() => {
    const data = events.filter((item) => item.eventStatus == "upcoming");
    setUpcomingEvents(data);
    const data1 = events.filter((item) => item.eventStatus == "past");
    setPastEvents(data1);
    setUpcomingTimer(data[0]);
    // func();
    setInterval(() => {
      const currentDate = new Date();
      const diff = date - currentDate;
      setDays(Math.floor(diff / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      setMins(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)));
      setSec(Math.floor((diff % (1000 * 60)) / 1000));
    }, 1000);
  }, []);

  const [modalContent, setModalContent] = React.useState();

  const handleOpen = (item) => {
    setModalContent(item);
    
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { ...rest } = props;
  return (
    <div
      style={{
        backgroundColor: "#00091B",
        color: "white",
        height: "100vh",
        // marginBottom: "5%",
        filter: `${open ? "blur(5px)" : ""}`,
      }}
    >
      <Header
        style={{ position: "fixed", top: 0 }}
        brand="IIPS ACM CHAPTER "
        rightLinks={<HeaderLinks />}
        color="transparent"
        {...rest}
      />
      <div
        style={{
          position: "relative",
          top: 100,
          backgroundColor: "#00091B",
          color: "white",
          // height: "150vh",
        }}
      >
        {!upcomingEvents?.length == 0 ? (
          <div className={classes.container}>
            <div
              style={{
                display: "flex",
                // justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                // height: "100vh",
                background: "#00091B",
                color: "#fff",
              }}
            >
              <h2
                style={{
                  fontSize: 60,
                  margin: 0,
                  textAlign: "center",
                }}
              >
                {upcomingTimer?.title}
              </h2>
              <h3>
                <a
                  style={{
                    color: "#fff",
                  }}
                  href="https://iips.edu.in/"
                  target={"_blank"}
                >
                  IIPS
                </a>
                &nbsp; ACM CHAPTER
              </h3>

              <div className="countdown-col col">
                <div
                  style={{
                    display: "flex",
                    borderRadius: "30px",
                    border: "2px solid #fff",
                    padding: "2% 6%",
                    width: 300,
                    justifyContent: "space-between",
                  }}
                >
                  <span
                    style={{
                      textAlign: "center",
                    }}
                  >
                    <div id="d">
                      <b>{days}</b>
                    </div>
                    Days
                  </span>
                  <span
                    style={{
                      textAlign: "center",
                    }}
                  >
                    <div id="h">
                      <b>{hours}</b>
                    </div>
                    Hours
                  </span>
                  <span
                    style={{
                      textAlign: "center",
                    }}
                  >
                    <div id="m">
                      <b>{mins}</b>
                    </div>
                    Minutes
                  </span>
                  <span
                    style={{
                      textAlign: "center",
                    }}
                  >
                    <div id="s">
                      <b>{sec}</b>
                    </div>
                    Seconds
                  </span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <h1 style={{ textAlign: "center" }}>Events</h1>
        )}
        <div style={{ margin: "5% 10% " }}>
          <h3>Upcoming Events</h3>
          {upcomingEvents?.length === 0 ? (
            <h5>There are no upcoming Events at the moment .</h5>
          ) : (
            <table style={{ width: "100%" }}>
              <thead>
                <th style={{ width: "5%" }}>#</th>
                <th style={{ width: "40%" }}>
                  Event
                </th>
                <th style={{ width: "27.5%" }}>Date</th>
                <th style={{ width: "27.5%" }}>Location</th>
              </thead>

              <tbody>
                {upcomingEvents?.map((item, i) => (
                  <tr>
                    <td>{i + 1}</td>
                    <td
                      style={{
                        fontWeight:500,
                        marginBottom: "1px",
                        cursor:'pointer'
                      }}
                      onClick={() => handleOpen(item)}
                    >
                      {item.title}
                    </td>
                    <td>{item.date}</td>
                    <td>{item.location}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          <h3>Past Events</h3>
          {pastEvents?.length === 0 ? (
            <h5>There are no past Events at the moment .</h5>
          ) : (
            <table style={{ width: "100%" }}>
              <thead>
                <th style={{ width: "5%" }}>#</th>
                <th style={{ width: "40%" }}>Event</th>
                <th style={{ width: "27.5%" }}>Date</th>
                <th style={{ width: "27.5%" }}>Location</th>
              </thead>

              <tbody>
                {pastEvents?.map((item, i) => (
                  <tr>
                    <td>{i + 1}</td>
                    <td
                      style={{
                        textDecoration: "underline",
                        marginBottom: "1px",
                      }}
                      onClick={() => handleOpen(item)}
                    >
                      {item.title}
                    </td>
                    <td>{item.date}</td>
                    <td>{item.location}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
        <br />
        <Footer fixed />
      </div>
      {/* modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
          <img src={modalContent?.poster} style={{width:"100%",height:350}} />
          <h3>
            <b>{modalContent?.title}</b>
          </h3>
          <p>{modalContent?.description}</p>
          <h5>Speaker : {modalContent?.speaker}</h5>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              style={{ margin: "1%", background: "red", color: "white" }}
              onClick={handleClose}
              variant="contained"
              target="_blank"
              href={`${modalContent?.registrationLink}`}
              // color="secondary"
            >
              Register
            </Button>
            <Button
              style={{ margin: "1%" }}
              onClick={handleClose}
              variant="contained"
              color="primary"
            >
              Close
            </Button>
          </div>
        </div>
      </Modal>
      {/* <br/> */}
    </div>
  );
}
