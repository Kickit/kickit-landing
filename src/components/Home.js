import React from 'react';
import { Button, Input, Form } from 'semantic-ui-react'
import logo from '../logo.png'
import Header from './HomeHeader'
import Github from './HomeGithub'
import Contribute from './HomeContribute'
import UseNow from './HomeUseNow'


import '../index.css';
import 'semantic-ui-css/semantic.min.css';

class Home extends React.Component {
  constructor () {
    super()
    this.state = {
    }
  }

  render () {
    return (
      <div className="home">
        <div className='slanted'>
          <div className='nav'>
            <Button basic href="https://app.kickit.us/login" target="_blank" color='blue'>Login</Button>
            <Button href="https://app.kickit.us/register" target="_blank" color='yellow'>Register</Button>
          </div>
        
        <img className="logo" src={logo} height={"111px"} width={"300px"} alt={""}/>
        <UseNow/>
        </div>
        <Header/>
        <Github/>
        <Contribute/>
      </div>
    )
  }

}
export default Home;
