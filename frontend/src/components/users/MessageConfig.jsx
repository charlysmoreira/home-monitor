import axios from 'axios'
import React, { Component } from 'react'
import Main from "../template/Main"

const headerProps = {
    icon: "users",
    title: "Configurar Mensagem",
    subtitle: "Mensagem de envio para o fornecedor"
}

const baseUrl = "http://localhost:5000/api/messages"
const inicialStates = {
    config : { name: '', phoneNumber: '', message: '' },
    list: []
}

export default class MessageConfig extends Component {

    state = {...inicialStates}

    UNSAFE_componentWillMount() {
        axios(baseUrl).then(resp => {
            this.setState({list: resp.data})
        })
    }

    clear(){
        this.setState({config: inicialStates.config})
    }

    save(){
        debugger;
        const config = this.state.config
        const method = config.id ? 'put' : 'post'
        const url = config.id ? `${baseUrl}/${config.id}` : baseUrl

        axios[method](url, config)
            .then(resp => {
                const list = this.getUpdateList(resp.data)
                this.setState({config: inicialStates.config, list})
        })
    }

    getUpdateList(config, add = true) {
        const list = this.state.list.filter(u => u.id != config.id)
        if(add) list.unshift(config)
        return list;
    }

    updateField(event) {
        const config = { ...this.state.config }
        config[event.target.name] = event.target.value
        this.setState({ config })
    }

    renderForm() {
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Nome</label>
                            <input type="text" className="form-control"
                                name="name"
                                value={this.state.config.name}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o nome..." />
                        </div>
                    </div>

                    <div className="col-3 col-md-2">
                        <div className="form-group">
                            <label>Telefone</label>
                            <input type="text" className="form-control"
                                name="phoneNumber"
                                value={this.state.config.phoneNumber}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o telefone..." />
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Mensagem</label>
                            <textarea type="text" className="form-control"
                                name="message"
                                value={this.state.config.message}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite a mensagem..." />
                        </div>
                    </div>
                </div>

                <hr />
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary"
                            onClick={e => this.save(e)}>
                            Salvar
                        </button>

                        <button className="btn btn-secondary ml-2"
                            onClick={e => this.clear(e)}>
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    load(config) {
        this.setState({ config })
    }

    remove(config) {
        axios.delete(`${baseUrl}/${config.id}`).then(resp => {
            const list = this.getUpdateList(config, false)
            this.setState({ list })
        })
    }

    renderTable() {
        return (
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Telefone</th>
                        <th>Mensagem</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }

    renderRows() {
        return this.state.list.map(config => {
            return (
                <tr key={config.id}>
                    <td>{config.id}</td>
                    <td>{config.phone}</td>
                    <td>{config.message}</td>
                    <td>
                        <button className="btn btn-warning"
                            onClick={() => this.load(config)}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger ml-2"
                            onClick={() => this.remove(config)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }

    render(){
        return (
            <Main {...headerProps}>
                {this.renderForm()}
                {this.renderTable()}
            </Main>
            )
    }
}