import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';

export default class Contato extends Component {
 
  state = {
    contato: {}
  }

  componentDidMount = () => {
    axios.get("http://localhost:3000/contato")
    .then (resposta => {
      this.setState({ contato: resposta.data })
    })
  }

  render() {
    const { contato } = this.state

    return (
      <>
        <Helmet>
          <title>Contato</title>
        </Helmet>
        <div className="page">
          <div className="conteudo">
            <div className="flex">
              <div className="resumo">
                <h1>{contato.titulo}</h1>
                <p>{contato.subtitulo}</p>
                <h2>{contato.informacao}</h2>
                {contato.contatos !== undefined && (
                <ul>
                {contato.contatos.map(item => (
                  <li key={item.id}>
                  <p>{item.tipo}</p>
                  <p>{item.contato}</p>
                  </li>
                ))}
                </ul>
                )}
              </div>
              <img src={contato.foto} alt="Perfil" />
            </div>
          </div>
        </div>
      </>
    )
  }
}
