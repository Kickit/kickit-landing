import React from 'react';
import { Menu, Button, Input, Form } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import docs from '../../documentation/docs'
import Sidebar from 'react-sidebar';

const getMarkdown = async (fileName) => {
  let response = await fetch(require(`../../documentation/${fileName}`))
  let text = await response.text();
  console.log(text)
  return text
}

const getGist = async (gistLink) => {
  let response = await fetch(gistLink)
  let text = await response.text();
  console.log(text)
  return text
}

class Docs extends React.Component {
  constructor () {
    super()
    this.state = {
      doc: '',
      activeItem: 'gettingStarted',
      docs: {}
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (Object.keys(state.docs).length === 0) { return state }
    const route = props.location.pathname.split('/')
    if (route.length === 4 && state.docs[route[2]] && state.docs[route[2]][route[3]]){
      state.doc = state.docs[route[2]][route[3]]
    } else {
      state.doc = state.docs[Object.keys(state.docs)[0]][Object.keys(state.docs[Object.keys(state.docs)[0]])[0]]
    }
    state.activeItem = route[3] || 'gettingStarted'
    return state
  }

  handleItemClick (topic, title) {
    this.props.history.push(`../../docs/${topic}/${title}`)
  }

  async initDocs (docs) {
    // Iterate through topics and get individual documents
    Object.keys(docs).forEach( topic => {
      let currDocs = this.state.docs
      currDocs[topic] = {}
      this.setState({ docs: currDocs })

      //Iterate through individual documents and fetch data
      Object.keys(docs[topic]).forEach( doc => {
        let currDocs = this.state.docs
        currDocs[topic][doc] = null
        this.setState({ docs: currDocs })

        //Helper Function to getGist from URL with callback to setState
        getGist(docs[topic][doc]).then( md => {
          let currDocs = this.state.docs
          currDocs[topic][doc] = md
          this.setState({ docs: currDocs })
        })
      })
    })
  }

  render () {
    const { activeItem, docs, doc } = this.state
    const sidebar = (
      <div className="w-100 h-100 bg-white mr5 pt3">
        <h2>Documentation</h2>
        <Menu secondary vertical>
        {Object.keys(docs).map( topic => {
          return (
            <Menu.Item>
              <Menu.Header className='tl'>
                {topic.replace(/([A-Z]+)*([A-Z][a-z])/g, "$1 $2").charAt(0).toUpperCase() + topic.replace(/([A-Z]+)*([A-Z][a-z])/g, "$1 $2").slice(1)}
              </Menu.Header>
              <Menu.Menu>
                {Object.keys(docs[topic]).map( page => {
                  return (
                    <Menu.Item
                      name={page}
                      active={activeItem === page }
                      onClick={() => this.handleItemClick(topic, page)}
                    />
                  )
                })}
              </Menu.Menu>
            </Menu.Item>
          )
        })}
        </Menu>
      </div>
    )
    return (
      <div className="flex flex-row">
        <div className="w-100 tl ma3">
          {<ReactMarkdown source={doc} />}
        </div>
      </div>
    )
  }
}

export default Docs;
