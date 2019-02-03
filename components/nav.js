import { Component, Fragment } from 'react';
import Link from 'next/link' 
import { Menu, Segment, Transition, Responsive, Container } from 'semantic-ui-react';

import "../assets/css/nav.css"

const links = [
  { label: 'software', href: '/software', position: 'right' },
  { label: 'gaming', href: '/gaming' }
]

const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}
class ResponsiveNav extends Component {
  state = {
    activeItem: ''
  }

  handleClick = (name) => {
    this.setState({ activeItem: name })
  }

  render() {
    const { show, fixed, activeItem, dark } = this.props
    const styles = {
      segment: {
        backgroundColor: show && fixed ? 'white' : 'transparent', 
        border: 0, 
        display: show ? 'block' : 'none',
        position: show && fixed ? 'fixed' : 'absolute',
        zIndex: '100',
        margin: 0,
        width: '100%',
        top: 0
      }
    }

    return (
      <Fragment>
          <Transition visible={show} animation="fade down" duration={500}>
            <Segment inverted textAlign='center' style={styles.segment}>
              <Container text>
                <Menu inverted={dark} pointing secondary style={{ borderBottom: 0 }}>
                  <Menu.Item className="nav-header" style={{letterSpacing: '3px'}} header>AMIN ROSLAN</Menu.Item>
                  {
                    Object.keys(links).map( i => {
                      return (
                        <Link href={links[i].href}>
                          <Menu.Item className='nav-item' key={i} name={links[i].label} active={activeItem === links[i].label} onClick={this.handleClick} position={links[i].position} />
                        </Link>
                        )
                      })
                    }
                </Menu>
              </Container>
            </Segment>
          </Transition>
      </Fragment>
    )
  }
}



export default ResponsiveNav
