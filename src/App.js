import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";

import HelloWorld from "./HelloWorld";
import ButtonGroup from "./ButtonGroup";

// import { store } from "./store/store";

class App extends Component {
  // state = store.getState()
  render() {
    return [
      // <HelloWorld key={1} tech={store.getState().tech} />,
      <HelloWorld key={1} tech={this.props.tech} />,
      <ButtonGroup key={2} technologies={["React", "Elm", "React-redux"]} />
    ];
  }
}

function mapStateToProps(state) {
  return {
    tech: state.tech
  };
}

export default connect(
  mapStateToProps,
  null
)(App);
