import React from 'react';
import ReactMarkdown from 'react-markdown'
import docs from '../../documentation/docs'


const getMarkdown = async (fileName) => {
  let response = await fetch(require(`../../documentation/${fileName}.md`))
  let text = await response.text();
  return text
}

const getGist = async (gistLink) => {
  let response = await fetch(gistLink)
  let text = await response.text();
  return text
}

class Doc extends React.Component {
  state = {}
  static getDerivedStateFromProps(props, state) {
    const pathname = props.location.pathname.split('/')
    const section = pathname[2]
    const file = pathname[3]
    const url = docs[section][file]
    
    return { file, url, doc:null }
  }

  render() {
    if ( !this.state.url || this.state.url == "") {
      return(<h1 className='tc pt5'>Coming Soon!</h1>)
    }
    if ( !this.state.doc ) {
      // getGist(this.state.url).then(res => this.setState({doc: res}))
      getMarkdown(this.state.file).then(res => this.setState({doc: res}))
      return(null)
    }
    
    return (
      <div className="flex flex-row">
        <div className="w-100 tl ma3 pl4">
          <ReactMarkdown escapeHtml={false} allowNode={() => true} source={this.state.doc} />
        </div>
      </div>
    )
  }
}

export default Doc;
