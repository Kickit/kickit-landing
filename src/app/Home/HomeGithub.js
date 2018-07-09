import React from 'react';
import { Grid, Card, Icon } from 'semantic-ui-react'

import 'semantic-ui-css/semantic.min.css';

class Github extends React.Component {
  constructor () {
    super()
    this.state = {
    }
  }

  render () {
    const backendLink = "https://github.com/kickit/kickit-backend"
    const frontendLink = "https://github.com/kickit/kickit-frontend"
    const mobileLink = "https://github.com/kickit/kickit-mobile"
    const landingLink = "https://github.com/kickit/kickit-landing"

    return (
      <div className="section github">
        <h1>Our Codebase</h1>
        <Grid doubling container={true} textAlign='center' centered={true} columns={5}>
          <Grid.Column>
            <Card>
              <Card.Content>
                <Card.Header>Kickit-Backend</Card.Header>
                <Card.Meta>Node GraphQl Server</Card.Meta>
                <Card.Description>Node base Hapi.js server using a MongoDB to serve data through a GraphQl api</Card.Description>
              </Card.Content>
              <Card.Content link={true} extra>
                <a href={backendLink} target='_blank'>
                  <Icon name='github' />Github
                </a>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card>
              <Card.Content>
                <Card.Header>Kickit-Frontend</Card.Header>
                <Card.Meta>React Web App</Card.Meta>
                <Card.Description>Progressive Web App made with React and Apollos GraphQl module</Card.Description>
              </Card.Content>
              <Card.Content link={true} extra>
                <a href={frontendLink} target='_blank'>
                  <Icon name='github' />Github
                </a>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card>
              <Card.Content>
                <Card.Header>Kickit-Mobile</Card.Header>
                <Card.Meta>React Native Application</Card.Meta>
                <Card.Description>Cross platform iOS and Android Application providing a fluid 'native'</Card.Description>
              </Card.Content>
              <Card.Content link={true} extra>
                <a href={mobileLink} target='_blank'>
                  <Icon name='github' />Github
                </a>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card>
              <Card.Content>
                <Card.Header>Kickit-Landing</Card.Header>
                <Card.Meta>React Web App</Card.Meta>
                <Card.Description>React based product page to convey features and functionality of Kickit</Card.Description>
              </Card.Content>
              <Card.Content link={true} extra>
                <a href={landingLink} target='_blank'>
                  <Icon name='github' />Github
                </a>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid>
      </div>
    )
  }

}
export default Github;
