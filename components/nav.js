import { Component, Fragment } from 'react';
import { Menu, Segment } from 'semantic-ui-react';

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
    const { activeItem } = this.state

    return (
      <Fragment>
        <Segment inverted textAlign='center' style={{ padding: '1em 20em' }}>
          <Menu inverted pointing secondary>
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
      </Fragment>
    )
  }
}

export default Nav
