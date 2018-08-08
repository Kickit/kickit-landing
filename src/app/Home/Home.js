import React from 'react';
import { Button, Input, Form } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd';
import logo from '../../resources/header_k.png'
import MyHeader from './HomeHeader'
import Github from './HomeGithub'
import Contribute from './HomeContribute'
import UseNow from './HomeUseNow'

const { Header, Content, Footer, Sider } = Layout;

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
        <img className="logo" src={logo} height={"200px"} alt={""}/>
        <UseNow/>
        </div>
        <MyHeader/>
        <Github/>
        <Contribute/>
      </div>
    )
  }
}

export default Home;
