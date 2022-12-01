import React from 'react'
import Main from '../template/Main'
import Card from '../home/Card'
import ChartGas from "../template/ChartGas"
import ChartWater from "../template/ChartWater"
import "./Home.css";

export default props =>
    <Main icon="desktop" title="Indicador"
        subtitle="Monitoramento residencial.">
        <div className='display-4'>Consumo diário</div>
        <hr />
        <div className='Dashboard'>
            <Card title="Consumo de água" color="#2888ca" >
                <ChartWater/>
            </Card>
            <Card title="Consumo de gas" color="#2888ca" >
                <ChartGas/>
            </Card>
        </div>
    </Main>
    