import React, { Component } from "react";

import Tabs from "./Tabs";
import Cards from "./Cards";
import Carousel from "../Carousel/Carousel";

// Importing our tab and card data. No need to change anything here.
import { tabData, cardData } from "../../data";

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "all",
      tabs: [],
      cards: []
    };
  }

  componentDidMount() {
    this.setState({
      tabs: tabData,
      cards: cardData
    });
  }

  changeSelected = tab => {
    this.setState({ selected: tab });
  };

  filterCards = () => {
    if (this.state.selected === "all") {
      return this.state.cards;
    } else {
      return this.state.cards.filter(c => {
        return c.tab === this.state.selected;
      });
    }
  };

  render() {
    return (
      <div className="content-container">
        <Carousel />
        <Tabs
          tabs={this.state.tabs}
          selected={this.state.selected}
          changeSelected={this.changeSelected}
        />
        <Cards cards={this.filterCards()} />
      </div>
    );
  }
}
