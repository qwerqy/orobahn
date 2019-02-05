import { Component, Fragment } from "react";
import { Container, Header } from "semantic-ui-react";
import Particles from "react-particles-js";

import "../assets/cover.css"


class HeroText extends Component {
  render() {
    const { dark } = this.props;
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
          <Header inverted={dark} className='hero-header'>AMIN ROSLAN</Header>
          <span className="hero-caption">Software Engineer at Vase Technologies. Huge gaming nerd.</span>
        </Container>
      </div>
    );
  }
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