import axios from 'axios'
import React, { Component } from 'react'
import Main from "../template/Main"

const headerProps = {
    icon: "users",
    title: "Fornecedor",
    subtitle: "Mensagem de envio para o fornecedor"
}

const baseUrl = "http://localhost:5000/api/suppliers"
const inicialStates = {
    data : { name: '', phoneNumber: '', message: '', status: 0 },
    list: []
}

export default class Supplier extends Component {

    state = {...inicialStates}

    UNSAFE_componentWillMount() {
        axios(baseUrl).then(resp => {
            this.setState({list: resp.data})
        })
    }

    clear(){
        this.setState({data: inicialStates.data})
    }

    save(){
        const result = this.state.data
        const method = result.id ? 'put' : 'post'
        const url = result.id ? `${baseUrl}/${result.id}` : baseUrl

        axios[method](url, result)
            .then(resp => {
                this.setState({data: inicialStates.data, list: [resp.data, ...this.state.list]})
        })
    }

    getUpdateList(config, add = true) {
        const list = this.state.list.filter(u => u.id !== config.id)
        if(add) list.unshift(config)
        return list;
    }
    
    updateField(event) {
        const result = { ...this.state.data }
        result[event.target.name] = event.target.name === "status" ? 
            event.target.checked ? 1 : 0 : event.target.value
        this.setState({ data : result })
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
                                value={this.state.data.name}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o nome..." />
                        </div>
                    </div>

                    <div className="col-3 col-md-2">
                        <div className="form-group">
                            <label>Telefone</label>
                            <input type="text" className="form-control"
                                name="phoneNumber"
                                value={this.state.data.phoneNumber}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o telefone..." />
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Mensagem</label>
                            <textarea type="text" className="form-control"
                                name="message"
                                value={this.state.data.message}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite a mensagem..." />
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="statusId" 
                            name="status"
                            onChange={e => this.updateField(e)}/>
                            <label className="form-check-label" for="statusId">Status</label>
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

    load(item) {
        this.setState({ data: item })
    }

    remove(item) {
        axios.delete(`${baseUrl}/${item.id}`).then(resp => {
            const list = this.getUpdateList(item, false)
            this.setState({ list })
        })
    }

    renderTable() {
        return (
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Telefone</th>
                        <th>Mensagem</th>
                        <th>Status</th>
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
        return this.state.list.map(item => {
            return (
                <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.phoneNumber}</td>
                    <td>{item.message}</td>
                    <td>{item.status === 1 ? "Ativo": 'Inativo'}</td>
                    <td>
                        <button className="btn btn-warning"
                            onClick={() => this.load(item)}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger ml-2"
                            onClick={() => this.remove(item)}>
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