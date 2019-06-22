import React, { Component } from "react";
import "../style/home.scss";

class HomePage extends Component {
  render() {
    return (
      <div>
        <div id="left_contain">
          <ul id="list_name">
            <li
              id="list_value_data"
              className={
                this.props.location.pathname === "/graph" ? "active" : ""
              }
              onClick={() => this.props.handlerRoute(1)}
            >
              Data Analysis
            </li>
            <li
              id="list_value_data"
              className={
                this.props.location.pathname === "/weather" ? "active" : ""
              }
              onClick={() => this.props.handlerRoute(2)}
            >
              Today's Weather{" "}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default HomePage;
