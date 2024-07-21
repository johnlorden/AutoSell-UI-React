import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Newsfeed from './views/newsfeed'
import Jobs from './views/jobs'
import Challenges from './views/challenges'
import Marketplace from './views/marketplace'
import Programs from './views/programs'
import Search from './views/search'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Newsfeed} exact path="/" />
        <Route component={Jobs} exact path="/jobs" />
        <Route component={Challenges} exact path="/challenges" />
        <Route component={Marketplace} exact path="/marketplace" />
        <Route component={Programs} exact path="/programs" />
        <Route component={Search} exact path="/search" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
