import React from 'react';
import { Item, Image, Button, Popup } from 'semantic-ui-react'
import logo from '../logo.png'
import stickman from '../stickman.png'

import '../index.css';
import 'semantic-ui-css/semantic.min.css';

class UseNow extends React.Component {
  constructor () {
    super()
    this.state = {
        notification: false
    }
  }

  wipNotification = () => {
    this.setState((prevState, props) => {
      return { notification: !prevState.notification }
    })
    console.log(this.state.notification)
  }

  render () {
    return (
      <div className='section home-usenow'>
        <Item.Group className="usernow-content">
        <Item>
          <Item.Content>
            <Popup
                trigger={<Button 
                            size='massive' 
                            circular={true}
                            primary>
                            Use Kickit for Free
                        </Button>}
                content='Currently the app isnt available right now, an early release will be available in mid June 2018'
                on='click'
                hideOnScroll
            />
            
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