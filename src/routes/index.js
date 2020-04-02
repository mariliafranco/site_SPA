import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../pages/home'
import Contato from '../pages/contato'
import Portfolio from '../pages/portfolio'

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/contato" exact component={Contato} />
      <Route path="/portfolio" exact component={Portfolio} />
    </Switch>
  )
}

export default Routes