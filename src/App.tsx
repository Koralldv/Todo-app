import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import {Helmet} from 'react-helmet'

import { Navbar } from './Components/Navbar'
import { TodoPage } from './pages/TodoPage'
import { AboutPage } from './pages/AboutPage'

const App: React.FC = () => {

  return (
  <BrowserRouter>
  <Helmet>
  <meta charSet="utf-8" />
  <title>MyToDo</title>
  </Helmet>
    <Navbar/>
    <div className="container">
  <Switch>
    <Route component={TodoPage} path="/" exact/>
    <Route component={AboutPage} path="/about"/>
  </Switch>
    </div>
    </BrowserRouter>
  )
}

export default App;
