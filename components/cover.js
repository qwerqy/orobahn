import { Component, Fragment } from "react";
import { Header } from "semantic-ui-react";
import { bool } from "prop-types";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";
import ParticlesBackground from "../components/particles";

import "../assets/cover.css";

const HeroText = ({ dark, fields }) => {
  return (
    <div className="hero-container">
      <Parallax
        className="custom-class"
        offsetXMax={0}
        offsetXMin={0}
        offsetYMax={200}
        offsetYMin={-200}
        slowerScrollRate
        tag="figure"
      >
        {/* <Container text style={styles.container}> */}
        <Header inverted={dark} textAlign="center" className="hero-header">
          {fields.hero_title}
          <Header.Subheader className="hero-caption">
            {fields.hero_caption}
          </Header.Subheader>
        </Header>
        {/* </Container> */}
      </Parallax>
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
          <ParallaxBanner
            className="your-class"
            layers={[
              {
                image: "../static/background.jpg",
                amount: 0.3,
                slowerScrollRate: true
              }
            ]}
            style={{
              height: "100vh"
            }}
          >
            <HeroText dark {...this.props} />
          </ParallaxBanner>
        </div>
      </Fragment>
    );
  }
}

export default Cover;
