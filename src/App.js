import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { ChildComponent } from "./ChildComponent";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      today: new Date()
    };

    this.fireAfterButtonPress = this.fireAfterButtonPress.bind(this);
    this.funcAccessedByChild = this.funcAccessedByChild.bind(this);
  }

  componentWillMount() {
    console.log("Hello I am  componentwillmount");
  }

  componentDidMount() {
    console.log("I am in componentdidmount...");
  }

  fireAfterButtonPress() {
    console.log("I am fired from a button !");
  }

  funcAccessedByChild(val) {
    console.log("I am called..." + val);
    this.fireAfterButtonPress();
  }

  render() {
    console.log("Hello I am in render()..");

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <button onClick={this.fireAfterButtonPress}>Hello World !</button>
        </header>
        <div className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          Coding with Pradeesh and S
          <div>
            Props : {this.props.value1}
            <div />
            Props2 : {this.props.value2.name}
          </div>
          <div>{this.state.today.toString()}</div>
          <ChildComponent
            v={this.state.today.toString()}
            f={this.funcAccessedByChild}
          />
        </div>
      </div>
    );
  }
}

export default App;
