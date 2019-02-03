import { Component} from 'react'
import { Container, Header } from 'semantic-ui-react'

import Nav from './nav'
import "../assets/css/cover.css"

const HeroText = () => {
  const style = {
    fontSize: "5rem",
    fontWeight: 300,
    margin: 0,
    letterSpacing: '8px'
  }

  return (
    <div className="hero-container">
      <Container text> 
        <Header style={style}>AMIN ROSLAN</Header>
        <span style={{fontSize: "2rem"}}>Software Engineer at Vase Technologies. Huge gaming nerd.</span>
      </Container>
    </div>
  )
}

class Cover extends Component {
  render() {
    return (
      <div className='bg-image'>
        <Nav show />
        <HeroText />
      </div>
    )
  }
}

export default Cover;