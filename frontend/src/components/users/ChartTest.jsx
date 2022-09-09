import React, { Component } from 'react'
import Chart from "../template/Chart"
import Main from "../template/Main"

const headerProps = {
    icon: "users",
    title: "Indicadores",
    subtitle: "Consumo residencial"
}

export default class ChartTest extends Component {
    render(){
        return (
            <Main {...headerProps}>
                <Chart/>
            </Main>
            
            )
    }
}