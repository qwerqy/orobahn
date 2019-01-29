import { Component, Fragment } from 'react'

import "../assets/css/nav.css"

const links = [
  { href: '/', label: 'Software' },
  { href: '/', label: 'Gaming' }
]

class Nav extends Component {
  render() {
    return (
      <Fragment>
        <nav>
          <div className="nav-wrapper">
            <ul className="nav-menu-left">
              <li><a>Amin Roslan</a></li>
            </ul>
            <ul className="nav-menu-right">
              {
                Object.keys(links).map( i => {
                  let link = links[i]
                  return (
                    <li key={i}>
                      <a href={link.href}>{link.label}</a>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </nav>
      </Fragment>
    )
  }
}

export default Nav
