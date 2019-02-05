import { Component, Fragment } from 'react'
import Link from 'next/link'
import { Transition, Segment, Container, Menu, Icon, Sidebar } from 'semantic-ui-react'

import '../assets/nav.css'

const links = [
  { label: 'blog', href: '/blog' },
  { label: 'software portfolio', href: '/software'},
  { label: 'gaming', href: '/gaming' }
]

class ResponsiveNav extends Component {
  state = {
    activeItem: '',
    visible: false
  }

  handleClick = (name) => {
    this.setState({ activeItem: name })
  }

  handleClickToToggle = () => this.setState({ visible: true })

  handleSidebarHide = () => this.setState({ visible: false })



  render() {
    const { show, fixed, activeItem, dark } = this.props
    const { visible } = this.state
    
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
                <Link href='/'>
                  <Menu.Item className="nav-header" style={{letterSpacing: '3px'}} header>AMIN ROSLAN</Menu.Item>
                </Link>
                  <Menu.Menu className='right-menu' position='right'>
                    {
                      Object.keys(links).map( i => {
                        return (
                          <Link href={links[i].href}>
                            <Menu.Item className='nav-item' key={i} name={links[i].label} active={activeItem === links[i].label} onClick={this.handleClick} position={links[i].position} />
                          </Link>
                        )
                      })
                    }
                  </Menu.Menu>
                  <Menu.Item className="dropper-right" position='right' onClick={this.handleClickToToggle}><Icon name="sidebar"/></Menu.Item>
              </Menu>
            </Container>
          </Segment>
        </Transition>
        <Sidebar
          as={Menu}
          animation='overlay'
          icon='labeled'
          inverted
          direction='right'
          onHide={this.handleSidebarHide}
          vertical
          visible={visible}
          width='thin'
        >
        {
          Object.keys(links).map( i => {
            return (
              <Link href={links[i].href}>
                <Menu.Item className='nav-item' key={i} name={links[i].label} active={activeItem === links[i].label} onClick={this.handleClick} position={links[i].position} />
              </Link>
            )
          })
        }
      </Sidebar> 
      </Fragment>
    )
  }
}

class Wrapper extends Component {
  render() {
    return (
      <Sidebar.Pushable>
        <ResponsiveNav dark={this.props.dark} />
        {this.props.children}
      </Sidebar.Pushable>
    )
  }
}

export default Wrapper;