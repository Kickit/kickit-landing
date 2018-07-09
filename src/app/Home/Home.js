import React from 'react';
import { Button, Input, Form } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import logo from '../../resources/header_k.png'
import Header from './HomeHeader'
import Github from './HomeGithub'
import Contribute from './HomeContribute'
import UseNow from './HomeUseNow'

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
            {/*<Link to='/docs'><Button basic target="_blank" color='blue'>Docs</Button></Link>*/}
            <Button basic href="https://app.kickit.us/" target="_blank" color='blue'>Login</Button>
            <Button href="https://app.kickit.us/" target="_blank" color='yellow'>Register</Button>
          </div>
        
        <img className="logo" src={logo} height={"200px"} alt={""}/>
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
