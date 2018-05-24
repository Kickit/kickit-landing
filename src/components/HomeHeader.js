import React from 'react';
import { Button, Input, Form } from 'semantic-ui-react'
import logo from '../logo.png'

import '../index.css';
import 'semantic-ui-css/semantic.min.css';

class Header extends React.Component {
  constructor () {
    super()
    this.state = {
    }
  }

  render () {
    return (
      <div className="header">
        <img src={logo} height={"111px"} width={"300px"} alt={""}/>
        <div className="intro">
          
        </div>
      </div>
    )
  }

}
export default Header;