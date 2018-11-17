import React from 'react'
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'
import Home from '../components/Home.jsx'
import Subtotal from '../components/Subtotal.jsx'
import Categories from '../components/Categories.jsx'
import $ from 'jquery'

class AppRouter extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <BrowserRouter>
        <div >
          <Switch>
            <Route exact path='/' component={Home} />
            <Route   path='/categories' component={Categories} />
            <Route   path='/subtotal' component={Subtotal} />
          </Switch>
        </div>
      </BrowserRouter>

    )
  }
}
export default AppRouter
