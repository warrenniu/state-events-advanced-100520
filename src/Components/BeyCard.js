import React from "react";

class BeyCard extends React.Component {


  localAddFavoriteBey = () => {
    this.props.addFavoriteBey(this.props.details)
  }

  
  render () {
    
  return (
    <div className="card">
      <img onClick={() => {
        this.localAddFavoriteBey(); 
      }} src={this.props.details.img} alt="beyonce" />
      <h3>{this.props.details.name}</h3>
    </div>
  );
};
}

export default BeyCard;
