import React, { Component } from "react";
import { Chart } from "react-charts";

export default class LineChart extends Component {
  render() {
    return (
      <div className="graphscale">
        <Chart
          data={[
            {
              label: "Men",
              data: [
                [2007, 106],
                [2008, 103],
                [2009, 99],
                [2010, 87],
                [2011, 101],
                [2012, 118],
                [2013, 103]
              ]
            },
            {
              label: "Women",
              data: [
                [2007, 97],
                [2008, 94],
                [2009, 91],
                [2010, 79],
                [2011, 94],
                [2012, 110],
                [2013, 95]
              ]
            }
          ]}
          axes={[
            { primary: true, type: "linear", position: "bottom" },
            { type: "linear", position: "left" }
          ]}
        />
      </div>
    );
  }
}
