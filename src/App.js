import React from "react";
import BeyContainer from "./Containers/BeyContainer"
import beyArray from "./api"
import Favorites from "./Containers/Favorites"
import "./App.css";

class App extends React.Component {

  state = {api: beyArray}

  addFavoriteBey = (beyObj) => {                     
    // this.setState({favoriteBeys: [...this.state.favoriteBeys, beyObj]})
      let array = this.state.api.map(beyElement => {
        if (beyElement.id === beyObj.id) {
          beyElement.favorite = !beyElement.favorite
          return beyElement
        }
        else {
          return beyElement
        }
      })
      this.setState({api: array})
      console.log(this.state.api)
  }

  removeFavoriteBey = (beyObj) => {
    let array = this.state.api.map(beyElement => {
      if (beyElement.id === beyObj.id) {
        beyElement.favorite = !beyElement.favorite
        return beyElement
      }
      else {
        return beyElement
      }
    })
    this.setState({api: array})
  }

//   changeStateClickHandler = ()=>{
//     console.log("clicking")
//     this.setState((prevState)=> ({favorite: !prevState.favorite}))
//     // this.setState({favorite: true})
// }



  render () {
  return (
    <div className="container" >
      <BeyContainer api={this.state.api} addFavoriteBey={this.addFavoriteBey} />
      <Favorites api ={this.state.api}  />
    </div>
  );
};
}

export default App;
