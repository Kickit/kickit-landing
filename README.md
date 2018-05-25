# Kickit Landing
This repo will serve as the product/landing page for the <b>Kickit Open Source Project Manager</b>. This implementation has been done as a 'create-react-app' to increase its accessibility. This landing page will be live at http://www.kickit.us and act as a launch point to all other kickit domains and documentation including this repository.

The landing page is a separate code base from the [Kickit Web app](http://www.github.com/nicklewanowicz/kickit-frontend) to reduce the size of each codebase and chances requirement to build and reupload the webapp anytime the landing page changes or vise versa.

There has also been a implementation done in Golang but development has been paused in favour of pursueing a full JS stack with the kickit [web-app](http://www.github.com/nicklewanowicz/kickit-frontend) and [mobile-app]() being react and react-native based respectively. 

## Installation:

#### Prerequisites:
- MongoDB
- NodeJS

#### Run the following commands to install:

- `git clone \<repo url\>`
- `cd kickit-backend`
- `yarn`
- `yarn start`
- the server will be available at localhost:3000

#### Routes for development:

- All requests are made to /graphql
- the graphiql interface is available at /graphiql

#### Schema Details:

TBD
