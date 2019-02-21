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
        border: 0
        // background: "#3494e6" /* fallback for old browsers */,
        // eslint-disable-next-line no-dupe-keys
        // background:
        //   "-webkit-linear-gradient(to left, #ec6ead, #3494e6)" /* Chrome 10-25, Safari 5.1-6 */,
        // eslint-disable-next-line no-dupe-keys
        // background:
        //   "linear-gradient(to left, #ec6ead, #3494e6)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
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
          <Container text style={{ zIndex: 100 }}>
            {title && (
              <Header
                style={{
                  fontFamily: '"Merriweather", "Times New Roman", serif'
                }}
                textAlign="center"
              >
                {title}
              </Header>
            )}
            {this.props.children}
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
