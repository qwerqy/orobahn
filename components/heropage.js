import { Component, Fragment } from "react";
import { Segment, Header, Container } from 'semantic-ui-react'

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
    return title.toUpperCase()
  }

  render() {
    const { slant, title } = this.props
    const styles = {
      segment: {
        borderRadius: 0,
        margin: 0,
        height: '100vh',
        width: '100vw',
        padding: '5em 0em',
        clipPath: this.slantDirection(slant),
        border: 0
      },
      header: {
        letterSpacing: '5px',
        fontSize: '1.5em'
      },
      paragraph: {
        fontSize: '1.3em'
      }
    }

    return (
      <Segment style={styles.segment} inverted>
        <Container>
          <Header style={styles.header} inverted>{this.capitalizeTitle(title)}</Header>
          {this.props.children}
        </Container>
      </Segment>
    )
  }
}

export default HeroPage