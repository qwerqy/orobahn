import { Component, Fragment } from 'react';
import { Menu, Segment, Transition } from 'semantic-ui-react';

import "../assets/css/nav.css"

const links = [
  { label: 'software', href: '/', position: 'right' },
  { label: 'gaming', href: '/' }
]

class Nav extends Component {
  state = {
    activeItem: ''
  }

  handleClick = (e, { name }) => {
    this.setState({ activeItem: name })
  }

  render() {
    const { show, fixed } = this.props
    const { activeItem } = this.state

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
      </Fragment>
    )
  }
}

export default Nav
