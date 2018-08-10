import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom"
import Doc from './Docs/Doc'
import Home from './Home/Home'
import docs from '../documentation/docs'
import logo from '../resources/logo_k.png'
import './styles/App.css';
import { Layout, Menu, Icon } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

const camelToNorm = (camel) => 
  camel.replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/([A-Z])([a-z])/g, ' $1$2')
    .replace(/\ +/g, ' ')
    .replace(/^./, function(str){ return str.toUpperCase(); })


const MyLayout = (props) => (
  <Layout style={{ minHeight: '100VH' }} >
    <Sider
      breakpoint='xxl'
      collapsedWidth='0'
      onBreakpoint={(broken) => { console.log(broken);}}
      onCollapse={(collapsed, type) => { console.log(collapsed, type) }}>
      <MenuItems/>
    </Sider>
    <Layout>
      <Content>
        <div>
          <Background />
          <MyRouter />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        {/* Will turn these into links*/}
        Made by Nicholas Lewanowicz and Contributors
      </Footer>
    </Layout>
  </Layout>
)

const MyRouter = () => (
  <div className="outlet">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/docs" component={Doc} />
    </Switch>
  </div>
)

const MenuItems = () => (
  <Menu 
    theme="dark" 
    mode="inline"
    className="tl"
    defaultSelectedKeys={["3"]}
    defaultOpenKeys={["3"]}>
    <Menu.Item key="0" >
      <Icon type="home" />
      <span className="nav-text">
        <Link to={`../../`} style={{color: 'rgba(255, 255, 255, 0.65)'}}>Home</Link>
      </span>
    </Menu.Item>
    <Menu.Item key="1">
      <Icon type="login" />
      <span className="nav-text">
      <a href='https://app.kickit.us/login' target='_blank' style={{color: 'rgba(255, 255, 255, 0.65)'}}>
        Login
      </a>
      </span>
    </Menu.Item>
    <Menu.Item key="2">
      <Icon type="user" />
      <span className="nav-text">
        <a href='https://app.kickit.us/register' target='_blank' style={{color: 'rgba(255, 255, 255, 0.65)'}}>
          Register
        </a>
      </span>
    </Menu.Item>
    <Menu.SubMenu key="3" title={<span><Icon type="copy" /><span>Documentation</span></span>}>
      {Object.keys(docs).map(category => (
        <Menu.ItemGroup className='tl' key={category} title={camelToNorm(category)}>
          {Object.keys(docs[category]).map(doc => (
            <Menu.Item key={doc} onClick={()=> console.log(doc)}>
            <Link to={`/docs/${category}/${doc}`}>
              {camelToNorm(doc)}
            </Link>
            </Menu.Item>
          ))}
        </Menu.ItemGroup>
      ))}
    </Menu.SubMenu>
  </Menu>
)


const Background = () => (
  <div className="bg">
    <div className="circle one">&nbsp;</div>
    <div className="circle two">&nbsp;</div>
    <div className="circle three">&nbsp;</div>
    <div className="circle four">&nbsp;</div>
    <div className="circle five">&nbsp;</div>
    <div className="circle six">&nbsp;</div>
    <div className="circle seven">&nbsp;</div>
    <div className="circle eight">&nbsp;</div>
    <div className="circle nine">&nbsp;</div>
    <div className="circle ten">&nbsp;</div>
    <div className="circle eleven">&nbsp;</div>
    <div className="circle twelve">&nbsp;</div>
    <div className="circle thirteen">&nbsp;</div>
    <div className="circle fourteen">&nbsp;</div>
  </div>
)

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <MyLayout />
      </Router>
      </div>
    );
  }
}

export default App;
