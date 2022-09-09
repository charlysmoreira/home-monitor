import React, { Component } from "react";
import ReactHighcharts from "react-highcharts";
import HighchartsMore from "highcharts-more";
import SolidGauge from "highcharts-solid-gauge";

export default class ChartGas extends Component {
  constructor(props) {
    super(props);
    HighchartsMore(ReactHighcharts.Highcharts);
    SolidGauge(ReactHighcharts.Highcharts);

    window.Highcharts = ReactHighcharts.Highcharts;
  }
  render() {
    return (
      <ReactHighcharts
        config={chartGas}
      ></ReactHighcharts>
    );
  }
}

var gaugeOptions = {
  chart: {
      type: 'solidgauge'
  },

  title: null,

  pane: {
      center: ['50%', '85%'],
      size: '140%',
      startAngle: -90,
      endAngle: 90,
      background: {
          backgroundColor:
          ReactHighcharts.Highcharts.defaultOptions.legend.backgroundColor || '#EEE',
          innerRadius: '60%',
          outerRadius: '100%',
          shape: 'arc'
      }
  },

  exporting: {
      enabled: false
  },

  tooltip: {
      enabled: false
  },

  yAxis: {
      stops: [
          [0.1, '#DF5353'], // red
          [0.5, '#DDDF0D'], // yellow
          [0.9, '#55BF3B']  // green
      ],
      lineWidth: 0,
      tickWidth: 0,
      minorTickInterval: null,
      tickAmount: 2,
      title: {
          y: -70
      },
      labels: {
          y: 13
      }
  },

  plotOptions: {
      solidgauge: {
          dataLabels: {
              y: 5,
              borderWidth: 0,
              useHTML: true
          }
      }
  }
};

var chartGas = ReactHighcharts.Highcharts.merge(gaugeOptions, {
  yAxis: {
      min: 0,
      max: 6,
      title: {
          text: 'Gás'
      }
  },

  credits: {
      enabled: false
  },

  series: [{
      name: 'Gás',
      data: [2.3],
      dataLabels: {
          format:
              '<div style="text-align:center">' +
              '<span style="font-size:25px">{y}</span><br/>' +
              '<span style="font-size:12px;opacity:0.4">m³</span>' +
              '</div>'
      },
      tooltip: {
          valueSuffix: ' m³'
      }
  }]
});
