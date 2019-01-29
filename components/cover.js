import { Component} from 'react'

import Nav from './nav'
import "../assets/css/cover.css"

class Cover extends Component {
  render() {
    return (
      <div className='bg-image'>
        <Nav />
        <div className="hero-container">
          <h1 className='hero-text'>Amin Roslan</h1>
          <span>Software Engineer at Vase Technologies. Huge gaming nerd.</span>
        </div>
        <style jsx>
        {`
          
        `}
        </style>
      </div>
    )
  }
}

export default Cover;