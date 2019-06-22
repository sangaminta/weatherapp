import React, { Component } from "react";
import LineChart from "./LineChart";
export default class GraphPage extends Component {
  render() {
    return (
      <div className="graph-main-page">
        <div className="Data-title">Data Analysis</div>
        <div className="country-name">Birth in Taiwan</div>
        <LineChart />
      </div>
    );
  }
}
