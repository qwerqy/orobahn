import { Component, Fragment } from 'react';
import Link from 'next/link' 
import { Menu, Segment, Transition, Responsive, Container } from 'semantic-ui-react';

const links = [
  { label: 'blog', href: '/blog', position: 'right' },
  { label: 'software portfolio', href: '/software'},
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
                  <Link href='/'>
                    <Menu.Item className="nav-header" style={{letterSpacing: '3px'}} header>AMIN ROSLAN</Menu.Item>
                  </Link>
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
          <style jsx>
            {`
              .nav-item {
                margin: 0 !important;
              }
              
              @media (min-width: 1024px) {
                .navbar-container {
                  padding: 1em 15em !important;
                }
              }
              
              @media (min-width: 768px) {
                .navbar-container {
                  padding: 1em 6em !important;
                }
              }
              
              @media (max-width: 423px) {
                .nav-header {
                  font-size: 0.8rem !important;
                }
              
                .nav-item {
                  font-size: 0.8rem !important;
                }
              }
            `}
          </style>
      </Fragment>
    )
  }
}



export default ResponsiveNav
