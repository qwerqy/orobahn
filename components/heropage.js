import { Component } from "react";
import { Segment, Header, Container } from "semantic-ui-react";
import { string, bool } from "prop-types";
import { observer } from "mobx-react";
@observer
class HeroPage extends Component {
  slantDirection = direction => {
    switch (direction) {
      case "right": {
        return "polygon(0 0, 100% 0, 100% 90%, 0 100%)";
      }
      case "left": {
        return "polygon(0 0, 100% 10%, 100% 100%, 0 100%)";
      }
      default: {
        return "polygon(0 0, 100% 0, 100% 100%, 0 100%)";
      }
    }
  };

  capitalizeTitle = title => {
    return title ? title.toUpperCase() : null;
  };

  render() {
    const { slant, title, dark, size, contain, gradient, store } = this.props;
    const styles = {
      segment: {
        borderRadius: 0,
        margin: 0,
        minHeight: size === "half" ? "50vh" : "100vh",
        width: "100vw",
        padding: "2em 0em",
        background: store.darkMode
          ? "#1b1c1d"
          : "white" /* fallback for old browsers */,
        // eslint-disable-next-line no-dupe-keys
        // background: gradient
        //   ? "-webkit-linear-gradient(to right, #2C5364, #203A43, #0F2027)"
        //   : "white" /* Chrome 10-25, Safari 5.1-6 */,
        // // eslint-disable-next-line no-dupe-keys
        // background: gradient
        //   ? "linear-gradient(to right, #2C5364, #203A43, #0F2027)"
        //   : "white" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,

        border: 0
      },
      header: {
        letterSpacing: "5px",
        fontSize: "1.5em"
      },
      subheader: {
        letterSpacing: 0
      },
      paragraph: {
        fontSize: "1.3em"
      }
    };

    return (
      <Segment inverted={store.darkMode} style={styles.segment}>
        <Container text={contain}>
          <Header style={styles.header} inverted={store.darkMode}>
            {this.capitalizeTitle(title)}
            <Header.Subheader style={styles.subheader}>
              {this.props.sub}
            </Header.Subheader>
          </Header>
          {this.props.children}
        </Container>
      </Segment>
    );
  }
}

HeroPage.propTypes = {
  slant: string,
  title: string,
  dark: bool,
  size: string
};

export default HeroPage;
