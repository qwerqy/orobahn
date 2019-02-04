import { Component, Fragment } from 'react'
import { Container, Header, Responsive } from 'semantic-ui-react'
import Particles from 'react-particles-js';

import ResponsiveNav from './nav'
import { getWidth } from './helpers'
// import "../assets/css/cover.css"


class DesktopHeroText extends Component {
  render() {
    const { dark } = this.props
    const styles = {
      header: {
        fontFamily: '"Raleway", "Roboto", sans-serif',
        fontSize: "4rem",
        fontWeight: 300,
        margin: 0,
        letterSpacing: '8px',
        zIndex: 100
      },
      container: {
        position: 'absolute',
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
      }
    }
    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyComputer.minWidth}>
        <div className="hero-container">
          <Container text style={styles.container}> 
            <Header inverted={dark} style={styles.header}>AMIN ROSLAN</Header>
            <span style={{fontSize: "1.6rem", fontWeight: 300, color: dark ? "#fff" : "#1b1c1d"}}>Software Engineer at Vase Technologies. Huge gaming nerd.</span>
          </Container>
        </div>
      </Responsive>
    )
  }
}

class TabletHeroText extends Component {
  render() {
    const { dark } = this.props
    const styles = {
      header: {
        fontFamily: '"Raleway", "Roboto", sans-serif',
      fontSize: "4rem",
      fontWeight: 300,
      margin: 0,
      letterSpacing: '8px',
      zIndex: 100
      },
      container: {
        position: 'absolute',
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
      }
    }
    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth} maxWidth={Responsive.onlyTablet.maxWidth}>
        <div className="hero-container">
          <Container text style={styles.container}> 
            <Header inverted={dark} style={styles.header}>AMIN ROSLAN</Header>
            <span style={{fontSize: "1.6rem", color: dark ? "#fff" : "#1b1c1d"}}>Software Engineer at Vase Technologies. Huge gaming nerd.</span>
          </Container>
        </div>
      </Responsive>
    )
  }
}

class MobileHeroText extends Component {
  render() {
    const { dark } = this.props
    const styles = {
      header: {
        fontFamily: '"Raleway", "Roboto", sans-serif',
        fontSize: "4rem",
        fontWeight: 300,
        margin: 0,
        letterSpacing: '8px',
        zIndex: 100
      },
      container: {
        position: 'absolute',
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
      }
    }
    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyMobile.minWidth} maxWidth={Responsive.onlyMobile.maxWidth}>
        <div className="hero-container" style={{}}>
          <Container text style={styles.container}> 
            <Header inverted={dark} style={styles.header}>AMIN ROSLAN</Header>
            <span style={{fontSize: "1.6rem", color: dark ? "#fff" : "#1b1c1d"}}>Software Engineer at Vase Technologies. Huge gaming nerd.</span>
          </Container>
        </div>
      </Responsive>
    )
  }
}

class HeroText extends Component {
  render() {
    return (
      <Fragment>
        <DesktopHeroText {...this.props} />
        <TabletHeroText {...this.props} />
        <MobileHeroText {...this.props} />
      </Fragment>
    )
  }
}

class Cover extends Component {
  render() {
    return (
      <Fragment>
        <div className='bg-image'>
          <ResponsiveNav dark show />
          {
            typeof window !== 'undefined'
            ? <Particles
                width="100vw"
                height="100vh"
                style={{position: 'absolute'}}
                params={{"particles": {
                    "number": {
                        "value": 100
                    },
                    "size": {
                        "value": 2
                    }
                },
                "interactivity": {
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "repulse"
                        }
                    }
                }}}/>
            : <canvas/>
          }
          
          <HeroText dark />
        </div>
        <style jsx>
        {`
          @import url("https://fonts.googleapis.com/css?family=Raleway");

          .bg-image {
            height: 100vh;
            width: 100vw;
            top: 0;
            position: relative;
            background-color: #1b1c1d;
          }
        `}
        </style>
      </Fragment>
    )
  }
}

export default Cover;