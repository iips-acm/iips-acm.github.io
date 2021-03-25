import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import team1 from "../../assets/img/faces/ShaligramPrajapatSir.jpeg";
import './TeamsComponent.css'
import {teams} from "../../Data/teams";

const useStyles = makeStyles(styles);
export default function TeamSection() {
    const classes = useStyles();
    const imageClasses = classNames(
        classes.imgRaised,
        classes.imgRoundedCircle,
        classes.imgFluid
    );
    return (
        <div className={classes.section} style={{color: "white"}} id='team'>
            <h2 className={classes.title}>Here is our team</h2>
            <div>
                <GridContainer>
                    {
                        teams.map((data) => (
                            <GridItem xs={12} sm={12} md={3}>
                                <Card plain>
                                    <GridItem xs={12} sm={12} md={12} className={classes.itemGrid}>
                                        <img src={data.image} alt="..."
                                             style={{
                                                 width: 200,
                                                 height: 200,
                                                 borderRadius: 100,
                                                 borderWidth: 5,
                                                 borderColor: '#fff',
                                                 borderStyle: 'solid'
                                             }}/>
                                    </GridItem>
                                    <h4 className={classes.cardTitle}>
                                        {data.name}
                                        <br/>
                                        <small className={classes.smallTitle}>{data.post}</small>
                                    </h4>
                                    <CardFooter className={classes.justifyCenter} style={{
                                        padding: 0
                                    }}>
                                        {
                                            data.social.gmail && (
                                                <Button
                                                    justIcon
                                                    color="transparent"
                                                    className={classes.margin5}
                                                    onClick={() => {
                                                        window.open(data.social.gmail)
                                                    }}
                                                >
                                                    <i className={classes.socials + " fas fa-envelope"}/>
                                                </Button>
                                            )
                                        }
                                        {
                                            data.social.linkedin && (
                                            <Button
                                                justIcon
                                                color="transparent"
                                                className={classes.margin5}
                                                onClick={() => {
                                                    window.open(data.social.linkedin);
                                                }}
                                            >
                                                <i className={classes.socials + " fab fa-linkedin"}/>
                                            </Button>
                                        )}
                                        {
                                            data.social.github && (
                                            <Button
                                                justIcon
                                                color="transparent"
                                                className={classes.margin5}
                                                onClick={() => {
                                                    window.open(data.social.github);
                                                }}
                                            >
                                                <i className={classes.socials + " fab fa-github"}/>
                                        </Button>
                                            )}
                                        {
                                            data.social.website && (
                                            <Button
                                                justIcon
                                                color="transparent"
                                                className={classes.margin5}
                                                onClick={() => {
                                                    window.open(data.social.website);
                                                }}
                                            >
                                                <i className={classes.socials + " fas fa-link"}/>
                                            </Button>
                                            )}
                                    </CardFooter>
                                </Card>
                            </GridItem>
                        ))
                    }
                </GridContainer>
            </div>
        </div>
    );
}
