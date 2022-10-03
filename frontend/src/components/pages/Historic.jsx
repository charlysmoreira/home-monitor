import React, { Component } from 'react'
import Chart from "../template/Chart"
import Main from "../template/Main"

const headerProps = {
    icon: "history",
    title: "Histórico de consumo",
    subtitle: "Consumo residencial"
}

export default class Historic extends Component {
    render(){
        return (
            <Main {...headerProps}>
                <Chart/>
            </Main>
            
            )
    }
}