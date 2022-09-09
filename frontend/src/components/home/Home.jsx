import React from 'react'
import Main from '../template/Main'
import Card from '../home/Card'
import ChartGas from "../template/ChartGas"
import ChartWater from "../template/ChartWater"

export default props =>
    <Main icon="home" title="Início"
        subtitle="Monitoramento residencial.">
        <div className='display-4'>Consumo diário</div>
        <hr />
        <div>
            <Card title="Consumo de água" color="#2888ca" >
                <ChartWater/>
            </Card>
            <Card title="Consumo de gás" color="#2aaaca" >
                <ChartGas/>
            </Card>
            <Card title="Temperatura" color="#fe8a71" >
                <ChartGas/>
            </Card>
        </div>
    </Main>
    