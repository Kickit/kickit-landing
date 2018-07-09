import React from 'react';
import { Item, Image } from 'semantic-ui-react'

class Contribute extends React.Component {
  constructor () {
    super()
    this.state = {
    }
  }

  render () {
    return (
      <div className='section home-contribute'>
        <Item.Group>
        <Item>
          <Item.Content>
            <Item.Header as='b'>How to Contribute?</Item.Header>
            <Item.Description>
              <p>
                Unfortunately we dont have any budget to offer bounties or much incentives to offer
                but if you feel like an awesome person your free to check out the repos linked above,
                find an issue that matches your skill level on the issues tab or a task on the project
                board, and after getting your development environment setup you will be all set to make
                changes. Please refer to the wiki on the github before submitting your PR as there is a 
                format that we like to see :)
              </p>
            </Item.Description>
          </Item.Content>
        </Item>
        </Item.Group>
      </div>
    )
  }

}
export default Contribute;