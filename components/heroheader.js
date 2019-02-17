import { Component } from "react";
import { Segment, Container, Header } from "semantic-ui-react";
import { string } from "prop-types";

// import "../assets/cover.css";
class HeroHeader extends Component {
  capitalizeTitle = title => {
    return title ? title.toUpperCase() : null;
  };

  render() {
    const { title } = this.props;
    const styles = {
      segment: {
        borderRadius: 0,
        margin: 0,
        height: "auto",
        width: "100vw",
        paddingTop: "5em",
        border: 0,
        background: "#16222A" /* fallback for old browsers */,
        // eslint-disable-next-line no-dupe-keys
        background:
          "-webkit-linear-gradient(to left, #3A6073, #16222A)" /* Chrome 10-25, Safari 5.1-6 */,
        // eslint-disable-next-line no-dupe-keys
        background:
          "linear-gradient(to left, #3A6073, #16222A)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      },
      container: {
        position: "absolute",
        width: "100vw",
        padding: "0em 24%",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
      }
    };

    return (
      <>
        <Segment style={styles.segment}>
          <Container textAlign="center" style={{ zIndex: 100 }}>
            <Header as="h1" inverted>
              {this.capitalizeTitle(title)}
            </Header>
            <span className="hero-para" style={styles.paragraph}>
              {this.props.children}
            </span>
          </Container>
        </Segment>
      </>
    );
  }
}

HeroHeader.propTypes = {
  title: string
};

export default HeroHeader;
