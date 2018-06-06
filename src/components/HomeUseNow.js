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
                            href={`https://app.kickit.us/`}
                            primary>
                            Demo Kickit pre-Alpha Now
                        </Button>}
                content='Kickit is in EARLY development and your are free to login to try navigate the UI and see what we are up to.'
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