import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';

export default class Home extends Component {

  state = {
    conteudo: {}
  }

  componentDidMount = () => {
    axios.get("http://localhost:3000/home")
      .then(resposta => {
        this.setState({ conteudo: resposta.data })
      })
  }

  render() {
    const { conteudo } = this.state

    return (
      <>
        <Helmet>
          <title>Home</title>
        </Helmet>
        <div className="page">
          <div className="conteudo">
            <div className="flex">
              <img src={conteudo.foto} alt="Perfil" />

              <div className="resumo">
                <h1>{conteudo.nome}</h1>
                <p>{conteudo.resumo}</p>
                <h2>Minha Stack</h2>

                {conteudo.stacks !== undefined && (
                  <ul>
                    {conteudo.stacks.map((item, indice) => (
                      <li key={indice}>{item}</li>
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
