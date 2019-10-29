console.log('front end up and running')
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Register from './components/auth/Register'
import Login from './components/auth/Login'

import Home from './components/common/Home'
import Navbar from './components/common/Navbar'

import ProfileNew from './components/profile/ProfileNew'
import ProfileShow from './components/profile/ProfileShow'
import ProfileEdit from './components/profile/ProfileEdit'

import RequestsIndex from './components/requests/RequestsIndex'
import RequestShow from './components/requests/RequestShow'
import RequestEdit from './components/requests/RequestEdit'
import RequestsNew from './components/requests/RequestsNew'




// REMEMBER TO IMPORT PROFILE EDIT TO SOMEHWERE VIA A LINK

import 'normalize.css'
import './style.scss'




const App = () => (
  <BrowserRouter>
    <main>
      <Navbar />
      <Switch>
        <Route path='/requests/new' component={RequestsNew} />
        <Route path='/requests/:id/edit' component={RequestEdit} />
        <Route path='/requests/:id' component={RequestShow} />
        <Route path='/requests' component={RequestsIndex} />
        <Route path='/profile/new' component={ProfileNew} />
        <Route path='/profile/show' component={ProfileShow} />
        <Route path='/profile/edit' component={ProfileEdit} />
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        <Route exact path='/' component={Home} />
        <Route exact path='' component={Home} />
      </Switch>
    </main>
  </BrowserRouter>
   
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
