import { Component, Fragment } from "react";
import { Header } from "semantic-ui-react";
import { bool } from "prop-types";
import ParticlesBackground from "../components/particles";

import "../assets/cover.css";

const HeroText = ({ dark }) => {
  // const styles = {
  //   container: {
  //     position: "absolute",
  //     top: "50%",
  //     left: "50%",
  //     transform: "translate(-50%, -50%)"
  //   }
  // };
  return (
    <div className="hero-container">
      {/* <Container text style={styles.container}> */}
      <Header inverted={dark} textAlign="center" className="hero-header">
        AMIN ROSLAN
        <Header.Subheader className="hero-caption">
          Software Engineer at{" "}
          <a
            style={{ color: "lightgrey" }}
            href="https://vase.ai"
            target="_blank"
          >
            Vase.ai
          </a>{" "}
          . Huge gaming nerd.
        </Header.Subheader>
      </Header>
      {/* </Container> */}
    </div>
  );
};

HeroText.propTypes = {
  dark: bool
};

class Cover extends Component {
  render() {
    return (
      <Fragment>
        <div className="bg-image">
          <ParticlesBackground />
          <HeroText dark />
        </div>
      </Fragment>
    );
  }
}

export default Cover;
