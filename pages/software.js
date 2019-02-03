import { Component } from 'react'
import { Visibility, Responsive } from 'semantic-ui-react'
import Head from '../components/head'
import Cover from '../components/cover'
import HeroBox from '../components/herobox'
import HeroPage from '../components/heropage'
import Footer from '../components/footer'
import Projects from '../components/projects'
import ResponsiveNav from '../components/nav'

class Software extends Component {
  state = {
    showNav: false,
    width: 0
  }
  getWidth = () => {
    const isSSR = typeof window === 'undefined'
  
    return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
  }
  showFixedMenu = () => {
    this.setState({ showNav: true })
  }

  render() {
    return (
      <div>
        <Head title="Home" />
        <Responsive getWidth={this.getWidth}>
          <Visibility once={false} onBottomPassed={() => this.setState({ showNav: true})} onBottomPassedReverse={() => this.setState({ showNav: false})}>
            <Cover />
          </Visibility>
          <ResponsiveNav show={this.state.showNav} fixed />
          <HeroPage title='personal projects'>
            <Projects />
          </HeroPage>
          <Footer />
        </Responsive>
      </div>
    )
  }
} 

export default Software;