import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
import { makeStyles } from "@material-ui/core/styles";
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import styles from "assets/jss/material-kit-react/views/components.js";
const useStyles = makeStyles(styles);
const SliderComponent = () => {
  const classes = useStyles();
const settings = {
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true
};
return (
  
    <div className={classes.container} id="home">
      <GridContainer>
    <GridItem xs={12} sm={12} md={12}>
      <Card>
        <Carousel {...settings}>
          <div>
            <img
              src="http://iips.edu.in/images/slider/slider2.jpg" 
              alt="First slide"
              className="slick-image"
            />
            {/* <div className="slick-caption">
              <h4>
                <LocationOn className="slick-icons" />Yellowstone
                National Park, United States
              </h4>
            </div> */}
          </div>
          <div>
            <img
              src="http://iips.edu.in/images/events/stu.jpg"
              alt="Second slide"
              className="slick-image"
            />
            {/* <div className="slick-caption">
              <h4>
                <LocationOn className="slick-icons" />Somewhere Beyond,
                United States
              </h4>
            </div> */}
          </div>
          <div>
            <img
              src="http://iips.edu.in/images/events/iips_placement.jpg"
              alt="Third slide"
              className="slick-image"
            />
            {/* <div className="slick-caption">
              <h4>
                <LocationOn className="slick-icons" />Yellowstone
                National Park, United States
              </h4>
            </div> */}
          </div>
        </Carousel>
      </Card>
    </GridItem>
  </GridContainer>
    </div>
);
}
export default SliderComponent;
