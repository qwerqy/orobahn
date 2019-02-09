import { Component } from 'react';
import { Segment, Container, Header } from 'semantic-ui-react'
import { string } from 'prop-types'

import '../assets/cover.css'
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
        height: '25vh',
        width: '100vw',
        padding: '8em 0em',
        border: 0
      },
      container: {
        position: 'absolute',
        width: '100vw',
        padding: '0em 24%',
        top: "50%",
        left: "50%",
        transform: 'translate(-50%, -50%)'
      }
    }

    return (
      <Segment style={styles.segment} inverted>
        <Container textAlign='center'>
          <Header className='hero-header' style={styles.header} inverted>
            {this.capitalizeTitle(title)}
          </Header>
            <span className='hero-para' style={styles.paragraph}>
              {this.props.children}
            </span>
        </Container>
      </Segment>
    )
  }
}

HeroHeader.propTypes = { 
  title: string
}

export default HeroHeader;