import React, { Component } from "react";
import FlowerCard from "./components/FlowerCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import flowers from "./flowers.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    flowers,
    score : 0,
    // highScore : 0
  };

  shuffleFlowers = () => {
    const { flowers, score } = this.state;

    for (let i = flowers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [flowers[i], flowers[j]] = [flowers[j], flowers[i]];
    }
    // Set this.state.friends equal to the new friends array
    this.setState({
      score : score + 1,
      flowers : flowers
    });
  };

  // Map over this.state.friends and render a FriendCard component for each flower object
  render() {
    console.log(this.state.score);
    return (
      <Wrapper>
        <Title>Flowers</Title>
        {this.state.flowers.map(flower => (
          <FlowerCard
            shuffleFlowers={this.shuffleFlowers}
            id={flower.id}
            key={flower.id}
            image={flower.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
