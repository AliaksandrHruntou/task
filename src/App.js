import React, { Component } from "react";
import Button from "C:/work/touchsoft/react-counter/src/Button";
import "C:/work/touchsoft/react-counter/src/style.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      parity: "Число равно нулю"
    }
  }



  incrementCounter(prevState) {
    return {
      count: prevState.count + 1
    };
}

  incrementCount = () => {
    this.setState(this.incrementCounter)

    console.log(this.state.count);

    // if(this.state.count > 0 && this.state.count % 2 === 0 && this.state.count !== 0) {
    //   this.setState({
    //    parity: "Число чётное" 
    //   })
    //   document.body.style.backgroundColor = "rgb(61, 61, 172)"
    // } else if (this.state.count > 0 &&  this.state.count % 2 !== 0 && this.state.count !== 0) {
    //   this.setState({
    //     parity: "Число нечётное" 
    //   })
    //   document.body.style.backgroundColor = "rgb(165, 79, 79)"
    // }
    
  }

  decrementCount = () => {
    if (this.state.count > 0) {
      this.setState((state) => {
        return {
          count: state.count - 1
        }
      })
    
    }

    console.log(this.state.count);

  }

  componentDidUpdate(prevProps, prevState) {

    console.log(prevState.count);

    if(prevState.count % 2 === 0 && prevState.count !== 0) {
      this.setState({
        parity: "Число чётное" 
      })
      document.body.style.backgroundColor = "rgb(61, 61, 172)"
    } else if (prevState.count % 2 !== 0 && prevState.count !== 0) {
      this.setState({
        parity: "Число нечётное" 
      })
      document.body.style.backgroundColor = "rgb(165, 79, 79)"
    } else {
      this.setState({
        parity: "Число равно нулю" 
      })
      document.body.style.backgroundColor = "grey"
    }

  }

  resetCount = () => {
    this.setState({
      count: 0,
      parity: "Число равно нулю"
    })
    document.body.style.backgroundColor = "grey"
  }

  render() {
    let { count, parity } = this.state;
    
    return (
      <div class = "app">
      <div class="flex">
        <div class = "count">
          <h1>{count}</h1>
        </div>
        <div class="table">
          <h3>{parity}</h3>
        </div>
        <div class = "buttons">
          <Button title = { "-" } event = {this.decrementCount } />
          <Button title = { "R" } event = { this.resetCount } />
          <Button title = { "+" } event = {this.incrementCount } />
        </div>
      </div>
    </div>
    )
  }
}