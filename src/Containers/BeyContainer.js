import React from "react";
import BeyCard from '../Components/BeyCard'

class BeyContainer extends React.Component {

  renderBeyCard = () => {
    return this.props.api.map(beyObj => {
      return <BeyCard details={beyObj} key={beyObj.id} addFavoriteBey={this.props.addFavoriteBey} />
    })
  }
  render() {
    return (
      <div className="index">
        <h1>Index</h1>
        {this.renderBeyCard()}
      </div>
    );
  }
}

export default BeyContainer;
