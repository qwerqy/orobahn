import { Component } from 'react';
import { Segment, Container, Header } from 'semantic-ui-react'

class HeroHeader extends Component {
  capitalizeTitle = title => {
    return title ? title.toUpperCase() : null
  }

  render() {
    const { title } = this.props
    const styles = {
      segment: {
        borderRadius: 0,
        margin: 0,
        height: '50vh',
        width: '100vw',
        padding: '5em 0em',
        border: 0
      },
      header: {
        letterSpacing: '5px',
        fontSize: '5em',
        fontWeight: 300
      },
      paragraph: {
        fontSize: '1.8em',
        fontWeight: 'normal'
      },
      container: {
        marginTop: '2em'
      }
    }

    return (
      <Segment style={styles.segment} inverted>
        <Container style={styles.container}>
          <Header style={styles.header} inverted>{this.capitalizeTitle(title)}</Header>
          <p style={styles.paragraph}>
            {this.props.children}
          </p>
        </Container>
      </Segment>
    )
  }
}

export default HeroHeader;