import React, { Component } from "react";
import BeyCard from "../Components/BeyCard"

 class Favorites extends Component {
   
  favoriteBeys = () => {
    return this.props.api.filter(beyObj => beyObj.favorite === true)
  }

  renderBeyCard = () => {
    return this.favoriteBeys().map(beyObj => {
    return <BeyCard details={beyObj} key={beyObj.id} addFavoriteBey={this.props.addFavoriteBey} />
    })
  }
  render() {
    console.log(this.props)
    return (
      <div className="favorites">
        <h1>Favorites</h1>
        {this.renderBeyCard()}
      </div>
    );
  }
}

export default Favorites
