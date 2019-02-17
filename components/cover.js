import { Component, Fragment, useState } from "react";
import { Header, Image, Transition } from "semantic-ui-react";
import { bool } from "prop-types";
// import ParticlesBackground from "../components/particles";

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
            background: #16222a; /* fallback for old browsers */
            background: -webkit-linear-gradient(
              to left,
              #3a6073,
              #16222a
            ); /* Chrome 10-25, Safari 5.1-6 */
            background: linear-gradient(
              to left,
              #3a6073,
              #16222a
            ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
          }

          .hero-container {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }

          .hero-header {
            font-family: "Raleway", "Roboto", sans-serif !important;
            font-size: 4rem !important;
            font-weight: 300 !important;
            margin: 0 !important;
            letter-spacing: 8px !important;
            z-index: 100 !important;
          }

          .hero-caption {
            font-family: "Roboto", sans-serif !important;
            font-size: 2rem;
            font-weight: 300;
            letter-spacing: 4px !important;
            color: #fff;
            text-align: center;
          }

          .hero-para {
            font-size: 1.2rem;
            font-weight: 300;
            color: #fff;
          }

          @media (max-width: 430px) {
            .hero-header {
              font-size: 2.5rem !important;
            }
            .hero-caption {
              font-size: 1.2rem !important;
            }
            .hero-para {
              display: none !important;
            }
          }
        `}</style>
      </>
    );
  }
}

export default Cover;
