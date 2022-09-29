import React, { Component } from 'react'
import ReactHighcharts from 'react-highcharts/ReactHighstock.src'
import moment from 'moment'

export default class Chart extends Component {

    state = {
      data: []
  };

  componentDidMount() {
  fetch('http://localhost:5000/api/waters')
      .then(res => res.json())
      .then(res => {
          this.setState({
              data: res
          });
      });
  }

  render() {
    let result = [0,0];

    const formatValue = (item) => {
        return [new Date(item.created_at).getTime(), item.value];
    };

    if (this.state.data.length > 0){
      result = this.state.data.map(formatValue);
    }
 
    const configPrice = {
      
      yAxis: [{
        offset: 20,

        labels: {
          formatter: function () {
            return this.value + ' L'
          }
          ,
          x: -15,
          style: {
            "color": "#000", "position": "absolute"

          },
          align: 'left'
        },
      },
        
      ],
      tooltip: {
        shared: true,
        formatter: function () {
          return this.y + ' Litros </b><br/>' + moment(this.x).format('DD/MM/YYYY, HH:mm')
        }
      },
      plotOptions: {
        series: {
          showInNavigator: true,
          gapSize: 6,

        }
      },
      rangeSelector: {
        selected: 1
      },
      title: {
        text: `Histórico de consumo - Água`
      },
      chart: {
        height: 550,
      },
  
      credits: {
        enabled: false
      },
  
      legend: {
        enabled: true
      },
      xAxis: {
        type: 'date',
      },
      rangeSelector: {
        buttons: [{
          type: 'day',
          count: 1,
          text: '1d',
        }, {
          type: 'day',
          count: 7,
          text: '7d'
        }, {
          type: 'month',
          count: 1,
          text: '1m'
        }, {
          type: 'month',
          count: 3,
          text: '3m'
        },
          {
          type: 'all',
          text: 'All'
        }],
        selected: 4
      },
      series: [{
        name: 'Litros de água',
        type: 'spline',
  
        data: result,
        tooltip: {
          valueDecimals: 3
        },
  
      }
      ]
    };
    return (
      <div>
         <ReactHighcharts config = {configPrice}></ReactHighcharts>
      </div>
    )
  }
}
