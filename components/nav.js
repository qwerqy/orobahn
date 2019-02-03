import { Component, Fragment } from 'react';
import { Menu, Segment, Transition, Responsive } from 'semantic-ui-react';

import "../assets/css/nav.css"

const links = [
  { label: 'software', href: '/', position: 'right' },
  { label: 'gaming', href: '/' }
]

const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

class DesktopNav extends Component {
  handleClick = (e, {name}) => {
    this.props.onMenuSelect(name)
  }
  
  render() {
    const { show, fixed, activeItem } = this.props
    const styles = {
      segment: {
        backgroundColor: show && fixed ? 'white' : 'transparent', 
        border: 0, 
        display: show ? 'block' : 'none',
        position: show && fixed ? 'fixed' : 'absolute',
        zIndex: '100',
        margin: 0,
        width: '100%',
        top: 0,
        padding: '1em 20em'
      }
    }

    return (
      <Fragment>
        <Responsive getWidth={getWidth} minWidth={Responsive.onlyComputer.minWidth}>
          <Transition visible={show} animation="fade down" duration={500}>
            <Segment inverted textAlign='center' style={styles.segment}>
              <Menu pointing secondary style={{ borderBottom: 0 }}>
                <Menu.Item style={{letterSpacing: '3px'}} header>AMIN ROSLAN</Menu.Item>
                {
                  Object.keys(links).map( i => {
                    return (
                      <Menu.Item key={i} name={links[i].label} active={activeItem === links[i].label} onClick={this.handleClick} position={links[i].position} />
                    )
                  })
                }
              </Menu>
            </Segment>
          </Transition>
        </Responsive>
      </Fragment>
    )
  }
}

class TabletNav extends Component {
  handleClick = (e, {name}) => {
    this.props.onMenuSelect(name)
  }
  
  render() {
    const { show, fixed, activeItem } = this.props
    const styles = {
      segment: {
        backgroundColor: show && fixed ? 'white' : 'transparent', 
        border: 0, 
        display: show ? 'block' : 'none',
        position: show && fixed ? 'fixed' : 'absolute',
        zIndex: '100',
        margin: 0,
        width: '100%',
        top: 0,
        padding: '1em 5em'
      }
    }

    return (
      <Fragment>
        <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth} maxWidth={Responsive.onlyTablet.maxWidth}>
          <Transition visible={show} animation="fade down" duration={500}>
            <Segment inverted textAlign='center' style={styles.segment}>
              <Menu pointing secondary style={{ borderBottom: 0 }}>
                <Menu.Item style={{letterSpacing: '3px'}} header>AMIN ROSLAN</Menu.Item>
                {
                  Object.keys(links).map( i => {
                    return (
                      <Menu.Item key={i} name={links[i].label} active={activeItem === links[i].label} onClick={this.handleClick} position={links[i].position} />
                    )
                  })
                }
              </Menu>
            </Segment>
          </Transition>
        </Responsive>
      </Fragment>
    )
  }
}

class MobileNav extends Component {
  handleClick = (e, {name}) => {
    this.props.onMenuSelect(name)
  }
  
  render() {
    const { show, fixed, activeItem } = this.props
    const styles = {
      segment: {
        backgroundColor: show && fixed ? 'white' : 'transparent', 
        border: 0, 
        display: show ? 'block' : 'none',
        position: show && fixed ? 'fixed' : 'absolute',
        zIndex: '100',
        margin: 0,
        width: '100%',
        top: 0,
        padding: '1em 0em'
      }
    }

    return (
      <Fragment>
        <Responsive getWidth={getWidth} minWidth={Responsive.onlyMobile.minWidth} maxWidth={Responsive.onlyMobile.maxWidth}>
          <Transition visible={show} animation="fade down" duration={500}>
            <Segment inverted textAlign='center' style={styles.segment}>
              <Menu pointing secondary style={{ borderBottom: 0, padding: 0 }}>
                <Menu.Item style={{letterSpacing: '3px'}} header>AMIN ROSLAN</Menu.Item>
                {
                  Object.keys(links).map( i => {
                    return (
                      <Menu.Item key={i} name={links[i].label} active={activeItem === links[i].label} onClick={this.handleClick} position={links[i].position} />
                    )
                  })
                }
              </Menu>
            </Segment>
          </Transition>
        </Responsive>
      </Fragment>
    )
  }
}

class ResponsiveNav extends Component {
  state = {
    activeItem: ''
  }

  handleClick = (name) => {
    this.setState({ activeItem: name })
  }

  render() {
    return (
      <Fragment>
        <DesktopNav {...this.props} {...this.state} onMenuSelect={this.handleClick}/>
        <TabletNav {...this.props} {...this.state} onMenuSelect={this.handleClick}/>
        <MobileNav {...this.props} {...this.state} onMenuSelect={this.handleClick}/>
      </Fragment>

    )
  }
}



export default ResponsiveNav
