import React, { Component } from "react";
import Router from "next/router";
import LandingPage from "./landing";

export default class Index extends Component {
  // componentDidMount = () => {
  //   Router.push("/landing");
  // };

  render() {
    return <LandingPage />;
  }
}
