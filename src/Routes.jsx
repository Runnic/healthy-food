import React from 'react'
import { Switch, Route } from 'react-router-dom'

import LandingPage from './Pages/LandingPage'
import RegisterPage from './Pages/RegisterPage'

export default function Routes() {
  return (
    <Switch>
      <Route path="/registrar" component={RegisterPage} />
      <Route exact path="/" component={LandingPage} />
    </Switch>
  )
}
