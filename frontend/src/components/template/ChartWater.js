import React, { Component } from "react";
import ReactHighcharts from "react-highcharts";
import HighchartsMore from "highcharts-more";
import SolidGauge from "highcharts-solid-gauge";

export default class ChartWater extends Component {
  constructor(props) {
    super(props);
    HighchartsMore(ReactHighcharts.Highcharts);
    SolidGauge(ReactHighcharts.Highcharts);

    window.Highcharts = ReactHighcharts.Highcharts;
  }

  state = {
        data: []
    };

  componentDidMount() {
    /*fetch('http://localhost:5000/water')
        .then(res => res.json())
        .then(res => {
            this.setState({
                data: res
            });
        });*/
    }
  render() {
    
    const data =  this.state.data.length > 0 ? this.state.data : [1]

    return (
      <ReactHighcharts
        config={chartWater(data)}
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
          y: 20
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

var chartWater = (data) => ReactHighcharts.Highcharts.merge(gaugeOptions, {
  yAxis: {
      min: 0,
      max: 20,
      title: {
          text: 'Água'
      }
  },

  credits: {
      enabled: false
  },

  series: [{
      name: 'Água',
      data,
      dataLabels: {
          format:
              '<div style="text-align:center">' +
              '<span style="font-size:25px">{y}</span><br/>' +
              '<span style="font-size:12px;opacity:0.4">L</span>' +
              '</div>'
      },
      tooltip: {
          valueSuffix: 'L'
      }
  }]
});
