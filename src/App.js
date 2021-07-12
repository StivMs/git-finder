import { React, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Users from './components/user/Users'
import User from './components/user/User'
import Search from './components/user/Search'
import Alert from "./components/layout/Alert"
import About from './components/pages/About';
import GithubState from './context/github/GithubState'
import AlertState from './context/alert/AlertState'


import './App.css';

const App = () => {



  // Search Github users
  /*const searchUsers = async username => {
    setLoading(true)
    const res = await
      axios.get(`https://api.github.com/search/users?q=${username}
      &client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
      &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)

    setUsers(res.data.items)
    setLoading(false)
  }*/


  // Get a single Github user
  /*const getUser = async (username) => {
    setLoading(true)

    const res = await
      axios.get(`https://api.github.com/users/${username}
      ?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
      &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)

    setUser(res.data)
    setLoading(false)
  }*/

  /*const getUserRepo = async (username) => {
    setLoading(true)

    const res = await
      axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
      &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)

    setRepos(res.data)
    setLoading(false)
  }*/

  /*const clearSearch = () => {
    setUsers([])
    setLoading(false)
  }*/




  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className='App'>
            <Navbar />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path='/' render={props => (
                  <Fragment>
                    <Search />
                    <Users />
                  </Fragment>
                )} />
                <Route exact path='/about' component={About} />
                <Route exact path='/user/:login' component={User} />
              </Switch>

            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
}


export default App;
