import React, {Component } from "react";
import "./Die.css";

class Die extends Component {
  constructor(props) {
    super(props)
    this.state = {num: 1}
  }
  
  handleClick = () => {
    let rand = Math.floor(Math.random() * 10) +1;
    this.setState({num: rand})
  }

  render() {
    return (
      <>
       <i className={`Die fas fa-dice-${this.props.face} ${this.props.rolling && "shaking" }`}></i>
      </>
    )
  }
}

export default Die; 