import React, { Component } from 'react'
import ChartGas from "../template/ChartGas"
import Main from "../template/Main"

const headerProps = {
    icon: "users",
    title: "Indicadores",
    subtitle: "Consumo residencial"
}

export default class ChartGasTest extends Component {
    render(){
        return (
            <Main {...headerProps}>
                <ChartGas/>
            </Main>
            
            )
    }
}