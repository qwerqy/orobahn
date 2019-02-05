import { Component, Fragment } from "react";
import Link from "next/link";
import { Transition, Segment, Container, Menu, Icon, Sidebar, Visibility } from "semantic-ui-react";

import "../assets/nav.css";

const links = [
  { label: "blog", href: "/blog" },
  { label: "software portfolio", href: "/software"},
  { label: "gaming", href: "/gaming" }
];

class DesktopWrapper extends Component {
  state = {
    activeItem: "",
    fixedNav: false
  }

  handleClick = (name) => {
    this.setState({ activeItem: name });
  }

  render() {
    const { dark } = this.props;
    const { activeItem, fixedNav } = this.state;
    
    const styles = {
      segment: {
        backgroundColor: fixedNav ? 'white' : 'transparent', 
        border: 0, 
        position: fixedNav ? 'fixed' : 'absolute',
        zIndex: "100",
        margin: 0,
        width: '100%',
        top: 0
      }
    };

    return (
      <div className='desktop-wrapper'>
        <Visibility once={false} onBottomPassed={() => this.setState({ fixedNav: true })} onBottomPassedReverse={() => this.setState({ fixedNav: false })}>
          {/* <Transition visible={show} animation="fade down" duration={500}> */}
            <Segment inverted vertical textAlign='center' style={styles.segment}>
              <Container text>
                <Menu inverted={dark && !fixedNav} pointing secondary style={{ borderBottom: 0 }}>
                  <Link href='/'>
                    <Menu.Item className="nav-header" style={{letterSpacing: "3px"}} header>AMIN ROSLAN</Menu.Item>
                  </Link>
                  <Menu.Menu className='right-menu' position='right'>
                    {
                      Object.keys(links).map( i => {
                        return (
                          <Link href={links[i].href}>
                            <Menu.Item className='nav-item' key={i} name={links[i].label} active={activeItem === links[i].label} onClick={this.handleClick} position={links[i].position} />
                          </Link>
                        );
                      })
                    }
                  </Menu.Menu>
                  <Menu.Item className="dropper-right" position='right' onClick={this.handleClickToToggle}><Icon name="sidebar"/></Menu.Item>
                </Menu>
              </Container>
            </Segment>
          {/* </Transition> */}
        </Visibility>
        {this.props.children}
      </div>
    );
  }
}

class MobileWrapper extends Component{
  state = {
    activeItem: "",
    visible: false
  }

  handleClick = (name) => {
    this.setState({ activeItem: name });
  }

  handleClickToToggle = () => this.setState({ visible: true })

  handleSidebarHide = () => this.setState({ visible: false })

  render() {
    const { activeItem, visible } = this.state;

    const styles = {
      segment: {
        backgroundColor: 'transparent', 
        border: 0, 
        position: 'absolute',
        zIndex: "100",
        margin: 0,
        width: '100%',
        top: 0
      },
      sidebarItem: {
        padding: '20px 10px',
        letterSpacing: '3px',
        lineHeight: 1.5
      }
    };

    return (
      <Sidebar.Pushable className='mobile-wrapper'>
        <Sidebar
          as={Menu}
          style={{padding:'0px 5px'}}
          animation='overlay'
          icon='labeled'
          inverted
          direction='right'
          onHide={this.handleSidebarHide}
          vertical
          visible={visible}
          width='thin'
        >
          <Menu.Item style={styles.sidebarItem} inverted header>MENU</Menu.Item>
          {
            Object.keys(links).map( i => {
              return (
                <Link href={links[i].href}>
                  <Menu.Item style={styles.sidebarItem} key={i} name={links[i].label} active={activeItem === links[i].label} onClick={this.handleClick} position={links[i].position} />
                </Link>
              );
            })
          }
        </Sidebar> 
        <Sidebar.Pusher>
            <Segment inverted vertical textAlign='center' style={styles.segment}>
              <Container text>
                <Menu inverted pointing secondary style={{ borderBottom: 0 }}>
                  <Link href='/'>
                    <Menu.Item className="nav-header" style={{letterSpacing: "3px"}} header>AMIN ROSLAN</Menu.Item>
                  </Link>
                  <Menu.Item className="dropper-right" position='right' onClick={this.handleClickToToggle}><Icon name="sidebar"/></Menu.Item>
                </Menu>
              </Container>
            </Segment>
          {this.props.children}
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    );
  }
}

class Wrapper extends Component {
  render() {
    return (
      <Fragment>
        <DesktopWrapper dark={this.props.dark}>{this.props.children}</DesktopWrapper>
        <MobileWrapper dark={this.props.dark}>{this.props.children}</MobileWrapper>
      </Fragment>
    );
  }
}

export default Wrapper;