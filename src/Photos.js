import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class Photos extends Component {
  render() {
    return (
      <div className="App">
        <Carousel>
        <div>
            <img alt="" src="../images/hawaii/1.jpeg" />
            <p className="legend">Legend 1</p>
        </div>
        <div>
            <img alt="" src="../images/hawaii/2.jpeg" />
            <p className="legend">Legend 2</p>
        </div>
        </Carousel>
      </div>
    );
  };
}

export default Photos;
