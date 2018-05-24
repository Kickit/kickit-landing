import React from 'react';
import { Item, Image } from 'semantic-ui-react'
import logo from '../logo.png'
import stickman from '../stickman.png'

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
      <div className='section home-header'>
        <img src={logo} height={"111px"} width={"300px"} alt={""}/>
        <Item.Group className="intro">
        <Item>
          <Item.Image src={stickman} size='small' />
          <Item.Content>
            <Item.Header as='b'>What is Kickit?</Item.Header>
            <Item.Description>
              <p>
                Kickit is an opensource progressive project managment app that is made by developers and for developers.
                Good development tools can be invaluable, and good developers need tools that are meant for their usecase,
                Kickit's priority is fitting the needs of you and doing so with a minimalist modern UX.
              </p>
            </Item.Description>
          </Item.Content>
        </Item>
        </Item.Group>
      </div>
    )
  }

}
export default Header;