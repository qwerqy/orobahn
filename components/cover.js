import { Component, Fragment, useState } from "react";
import { Header, Image, Transition } from "semantic-ui-react";
import { bool } from "prop-types";
// import ParticlesBackground from "../components/particles";

import "../assets/cover.css";

const HeroText = ({ dark, fields, isLoaded }) => {
  const [isVisible, setVisible] = useState(false);

  return (
    <div className="hero-container">
      <Transition
        onComplete={() => setVisible(true)}
        visible={isLoaded}
        animation="fade up"
        duration={1000}
      >
        <Header inverted={dark} textAlign="center" className="hero-header">
          {fields.hero_title}
          <Transition visible={isVisible} animation="scale" duration={1000}>
            <Header.Subheader className="hero-caption">
              {fields.hero_caption}
            </Header.Subheader>
          </Transition>
        </Header>
      </Transition>
    </div>
  );
};

HeroText.propTypes = {
  dark: bool
};

class Cover extends Component {
  state = { isLoaded: false };

  componentDidMount() {
    this.setState({ isLoaded: true });
  }
  render() {
    const { isLoaded } = this.state;
    return (
      <>
        <div className="bg-image">
          <HeroText dark {...this.props} isLoaded={isLoaded} />
        </div>
        <style jsx>{`
          .bg-image {
            height: 100vh;
            width: 100vw;
            top: 0;
            position: relative;
            background-color: #1b1c1d;
            background-image: url("/static/background.png");
            background-size: cover;
            background-position: center;
          }
        `}</style>
      </>
    );
  }
}

export default Cover;
