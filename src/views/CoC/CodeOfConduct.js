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

export default function CodeOfConduct(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div style={{ backgroundColor: "#00091B", color: "white" }}>
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
          top: 50,
          backgroundColor: "#00091B",
          color: "rgba(255,255,255,0.8)",
        }}
      >
        <div className={classes.container}>
          <h2>
            <b>Code Of Conduct</b>
          </h2>
          <h3>
            <b>Our Pledge</b>
          </h3>
          <p style={{ textAlign: "justify", fontSize: 16 }}>
            In the interest of fostering an open and welcoming environment, we
            as contributors and maintainers pledge to making participation in
            our events, our projects and our community a harassment-free
            experience for everyone, regardless of age, body size, disability,
            ethnicity, gender identity and expression, level of experience,
            nationality, personal appearance, race, religion, or sexual identity
            and orientation.
          </p>
          <h3>
            <b>Our Standards</b>
          </h3>
          <p style={{ textAlign: "justify", fontSize: 16 }}>
            Examples of behavior that contributes to creating a positive
            environment include:
          </p>
          <ul>
            <li>Using welcoming and inclusive language</li>
            <li>Being respectful of differing viewpoints and experiences</li>
            <li>Gracefully accepting constructive criticism</li>
            <li>Focusing on what is best for the community</li>
            <li>Showing empathy towards other community members</li>
          </ul>
          <p style={{ textAlign: "justify", fontSize: 16 }}>
            Examples of unacceptable behavior by participants include:
          </p>
          <ul>
            <li>
              The use of sexualized language or imagery and unwelcome sexual
              attention or advances
            </li>
            <li>
              Trolling, insulting/derogatory comments, and personal or political
              attacks
            </li>
            <li>Public or private harassment</li>
            <li>
              Publishing others' private information, such as a physical or
              electronic address, without explicit permission
            </li>
            <li>
              Other conduct which could reasonably be considered inappropriate
              in a professional setting
            </li>
          </ul>
          <h3>
            <b>Our Responsibilities</b>
          </h3>
          <p style={{ textAlign: "justify", fontSize: 16 }}>
            Admins and Moderators are responsible for clarifying the standards
            of acceptable behavior and are expected to take appropriate and fair
            corrective action in response to any instances of unacceptable
            behavior. Moderators have the right and responsibility to remove,
            edit, or reject comments, commits, code, wiki edits, issues, and
            other contributions that are not aligned to this Code of Conduct, or
            to ban temporarily or permanently any contributor for other
            behaviors that they deem inappropriate, threatening, offensive, or
            harmful.
          </p>
          <h3>
            <b>Scope</b>
          </h3>
          <p style={{ textAlign: "justify", fontSize: 16 }}>
            This Code of Conduct applies both within project spaces and in
            public spaces when an individual is representing the project or its
            community. Examples of representing a project or community include
            using an official project e-mail address, posting via an official
            social media account, or acting as an appointed representative at an
            online or offline event. Representation of a project may be further
            defined and clarified by the Admin and Moderators. This Code of
            Conduct applies to the Admins, Moderators, speakers, sponsors, and
            all other participants during their involvement with IIPS ACM
            Chapter
          </p>
          <h3>
            <b>Enforcement</b>
          </h3>
          <p style={{ textAlign: "justify", fontSize: 16 }}>
            Instances of abusive, harassing, or otherwise unacceptable behavior
            may be reported by contacting any of the Office Holders or Faculty
            members either through any of our communication channels or in
            person. All complaints will be reviewed and investigated and will
            result in a response that is deemed necessary and appropriate to the
            circumstances. The project team is obligated to maintain
            confidentiality with regard to the reporter of an incident. Further
            details of specific enforcement policies may be posted separately.
            Office Holders who do not follow or enforce the Code of Conduct in
            good faith may face temporary or permanent repercussions as
            determined by the members of the Community.
          </p>
          <h3>
            <b>Reporting</b>
          </h3>
          <p style={{ textAlign: "justify", fontSize: 16 }}>
            All code of conduct violations can be reported to the office holders
            and the faculty members directly.
          </p>
          <br />
          <br />
        </div>
      </div>
      <Footer fixed />
    </div>
  );
}
