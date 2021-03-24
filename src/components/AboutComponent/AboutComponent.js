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

import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

export default function CodeOfConduct(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
      <div
        style={{
          position: "relative",
          top: 50,
          backgroundColor: "#00091B",
          color: "white",
        }}
        id="about"
      > 
          <h3>
            <b>ABOUT ACM</b>
          </h3>
          <p style={{ textAlign: "justify", fontSize: 16 }}>
          ACM Student Chapter is the international Association for Computing Machinery's student society which provides opportunities to students to network, learn together, and share their knowledge. Its main focus is on building and developing members' passion for computer science.ACM brings together computing educators, researchers, and professionals to inspire dialogue, share resources, and address the field's challenges. As the world’s largest computing society, ACM strengthens the profession's collective voice through strong leadership, promotion of the highest standards, and recognition of technical excellence. ACM supports the professional growth of its members by providing opportunities for life‐long learning, career development, and professional networking.
          </p>
          <h3>
            <b>ABOUT ACM CHAPTER</b>
          </h3>
          <p style={{ textAlign: "justify", fontSize: 16 }}>
          The IIPS ACM Student Chapter is an official student body induced in 2021. The chapter aims at creating a center for activities, where students can interact, share their knowledge and learn from each other. The chapter organizes several events like hackathons, workshops, etc in which various prominent speakers will come and share their knowledge. Our main aim is to provide a platform inviting students from various domains to promote computer knowledge and to enhance their technical skills.
          </p>
          
        </div>
  );
}
