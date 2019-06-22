import React, { Component } from "react";
import Homepage from "../component/HomePage";
import { Route } from "react-router-dom";
import Graph from "../container/Graph";
import Weather from "../container/Weather";

class Home extends Component {
  handlerRoute = value => {
    if (value === 1) {
      this.props.history.push("/graph");
    }
    if (value === 2) {
      this.props.history.push("/weather");
    }
  };

  render() {
    return (
      <div style={{ display: "flex" }}>
        <Homepage
          handlerRoute={this.handlerRoute}
          location={this.props.location}
        />
        <Route path="/graph" component={Graph} />
        <Route path="/weather" component={Weather} />
      </div>
    );
  }
}

export default Home;
