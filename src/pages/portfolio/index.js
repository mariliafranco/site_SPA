import React, { Component } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";

export default class Portfolio extends Component {

    state = {
        imagem: {}
    }

    componentDidMount = () => {
        axios.get("http://localhost:3000/portfolio")
            .then(resposta => {
                this.setState({ imagem: resposta.data })
            })
    }

    render() {
        const { imagem } = this.state
        return (
            <>
                <Helmet>
                    <title> Portfolio </title>
                </Helmet>
                <div className="page">
                    <div className="conteudo">
                        <h1>{imagem.titulo}</h1>
                        <div className="flex">
                            <div className="portfolio-list">
                                {imagem.imagens !== undefined && (
                                    <ul>
                                        {imagem.imagens.map(item => (
                                            <li key={item.id}>
                                                <img src={item.foto} alt="Portfolio 1" />
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}