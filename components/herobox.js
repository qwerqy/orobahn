import { Component } from 'react'
import { Container, Header, Segment } from 'semantic-ui-react'
import { string, bool } from 'prop-types'

class HeroBox extends Component {
  capitalizeTitle = title => {
    return title ? title.toUpperCase() : null
  }

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

  render() {
    const { title, dark, slant, titleAlign } = this.props

    const styles = {
      segment: {
        borderRadius: 0,
        margin: 0,
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
      <Segment style={styles.segment} inverted={dark}>
        <Container textAlign={titleAlign}>
          <Header style={styles.header} textAlign={titleAlign} inverted={dark}>{this.capitalizeTitle(title)}</Header>
          <p style={styles.paragraph}>{this.props.children}</p>
        </Container>
      </Segment>
    )
  }
}

HeroBox.propTypes = {
  title: string,
  dark: bool,
  slant: string,
  titleAlign: string
}

export default HeroBox;