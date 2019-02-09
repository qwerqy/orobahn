import { Component } from "react";
import { Segment, Header, Container } from 'semantic-ui-react'
import { string, bool } from 'prop-types'

class HeroPage extends Component {
  slantDirection = direction => {
    switch (direction) {
      case 'right': {
        return "polygon(0 0, 100% 0, 100% 90%, 0 100%)"
      }
      case 'left': {
        return "polygon(0 0, 100% 10%, 100% 100%, 0 100%)"
      }
      default: {
        return "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
      }
    }
  }

  capitalizeTitle = title => {
    return title ? title.toUpperCase() : null
  }

  render() {
    const { slant, title, dark, size } = this.props
    const styles = {
      segment: {
        borderRadius: 0,
        margin: 0,
        minHeight: size === 'half' ? '50vh' : '100vh',
        width: '100vw',
        padding: '2em 0em',
        clipPath: this.slantDirection(slant),
        border: 0
      },
      header: {
        letterSpacing: '5px',
        fontSize: '1.5em'
      },
      subheader: {
        letterSpacing: 0
      },
      paragraph: {
        fontSize: '1.3em'
      }
    }

    return (
      <Segment style={styles.segment} inverted={dark}>
        <Container>
          <Header style={styles.header} inverted={dark}>
          {this.capitalizeTitle(title)}
          <Header.Subheader style={styles.subheader}>{this.props.sub}</Header.Subheader>
          </Header>
          {this.props.children}
        </Container>
      </Segment>
    )
  }
}

HeroPage.propTypes = {
  slant: string,
  title: string,
  dark: bool,
  size: string
}

export default HeroPage