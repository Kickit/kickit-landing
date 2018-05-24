import React from 'react';
import { Item, Image, Button } from 'semantic-ui-react'
import logo from '../logo.png'
import stickman from '../stickman.png'

import '../index.css';
import 'semantic-ui-css/semantic.min.css';

class UseNow extends React.Component {
  constructor () {
    super()
    this.state = {
    }
  }

  render () {
    return (
      <div className='section home-usenow'>
        <Item.Group className="usernow-content">
        <Item>
          <Item.Content>
            <Button size='massive' circular={true} primary>Use Kickit for Free</Button>
            <Item.Description>
              <p>
              The last project managment tool you need. 
              </p>
            </Item.Description>
          </Item.Content>
        </Item>
        </Item.Group>
      </div>
    )
  }

}
export default UseNow;