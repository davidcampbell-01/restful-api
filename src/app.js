import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Notifications from 'react-notify-toast'
import 'bulma'
import './styles/main.scss'

import Home from './components/common/Home'
import Jets from './components/jets/Index'
import Unknown from './components/common/Unknown'
import Navbar from './components/common/Navbar'
import ViewJet from './components/jets/ViewJet'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import CreateJet from './components/jets/CreateJet'
import EditJet from './components/jets/EditJet'
import SecureRoute from './components/common/SecureRoute'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <Navbar />
          <Notifications />
          <Switch>
            <Route exact path="/" component={Home} />
            <SecureRoute path="/jets/:id/edit" component={EditJet} />
            <SecureRoute path="/jets/create" component={CreateJet} />
            <Route path="/jets/:id" component={ViewJet} />
            <Route exact path="/jets" component={Jets} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route exact path="/*" component={Unknown} />
          </Switch>
        </>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)