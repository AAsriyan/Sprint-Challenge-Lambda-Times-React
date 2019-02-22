import React, { Component } from "react";
import { carouselData } from "../../data";
// Complete this Carousel
export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carData: [],
      index: 0
    };
  }
  componentDidMount() {
    this.setState({ carData: carouselData });
  }

  leftClick = () => {
    let carLength = this.state.carData.length;
    let copyIndex = this.state.index;
    this.state.index === 0
      ? this.setState({ index: carLength - 1 })
      : this.setState({ index: copyIndex - 1 });
  };

  rightClick = () => {
    let carLength = this.state.carData.length;
    let copyIndex = this.state.index;

    this.state.index === carLength - 1
      ? this.setState({ index: 0 })
      : this.setState({ index: copyIndex + 1 });
  };

  selectedImage = () => {
    return (
      <img
        src={this.state.carData[this.state.index]}
        alt="random landscape"
        style={{ display: "block" }}
      />
    );
  };

  render() {
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>
          {"<"}
        </div>
        <div>{this.selectedImage()}</div>
        <div className="right-button" onClick={this.rightClick}>
          {">"}
        </div>
      </div>
    );
  }
}
