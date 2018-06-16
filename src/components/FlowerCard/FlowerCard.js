import React, {Component} from "react";
import "./FlowerCard.css";

class FlowerCard extends Component {
  state = {
    selected : false
  }
  handleClick = () => {
    if (this.state.selected){
      console.log("lost");
    }
    else {
      this.setState({ selected : true });
      this.props.shuffleFlowers();
    }
  }
  render(){
    return (
      <div className="card">
        <div className="img-container">
          <img alt = {"flower"} src={this.props.image} />
        </div>
        <div className="content">

        </div>
        <span onClick={this.handleClick} className="remove">
          𝘅
        </span>
      </div>
    );
  }
}

export default FlowerCard;
