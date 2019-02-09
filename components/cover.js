import { Component, Fragment } from "react";
import { Container, Header } from "semantic-ui-react";
import Particles from "react-particles-js";
import { bool } from 'prop-types'

import "../assets/cover.css"

// HeroText
// props:
// dark - set header text to be white if true
const HeroText = ({ dark }) => {
  const styles = {
    container: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)"
    }
  };
  return (
    <div className="hero-container">
      <Container text style={styles.container}> 
        <Header inverted={dark} textAlign='center' className='hero-header'>AMIN ROSLAN</Header>
        <Header.Subheader className="hero-caption">Software Engineer at <a style={{color:'lightgrey'}} href='https://vase.ai' target='_blank'>Vase.ai</a> . Huge gaming nerd.</Header.Subheader>
      </Container>
    </div>
  );
}

HeroText.propTypes = {
  dark: bool
}

class Cover extends Component {
  render() {
    return (
      <Fragment>
        <div className='bg-image'>
          {
            typeof window !== "undefined"
              ? <Particles
                width="100vw"
                height="100vh"
                style={{position: "absolute"}}
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
      </Fragment>
    );
  }
}

export default Cover;