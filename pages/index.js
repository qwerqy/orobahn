import { Component } from 'react'
import { Visibility, Responsive } from 'semantic-ui-react'
import Head from '../components/head'
import Cover from '../components/cover'
import HeroBox from '../components/herobox'
import HeroPage from '../components/heropage'
import Footer from '../components/footer'
import Wrapper from '../components/wrapper'

class Home extends Component {
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
          <Wrapper dark>
            <Cover />
            <HeroBox title='work' dark slant='right'>
              I am a Full-Stack Software Engineer. I am currently with Vase Technologies as their Full-Stack Software Engineer. 
              I am responsible in developing & maintaining their in-house products both for our business clients & consumer clients.
              All of their products are mostly in Javascript.
            </HeroBox>
            <HeroBox title='game' titleAlign='right'>
              I used to stream on Twitch going under the name 'GreenCheese'. I am currently putting streaming on hold in the hopes of getting better gears for it.
              I like to play strategy, role-playing, heavy-story based games.
            </HeroBox>
            <HeroPage dark title='latest blog post'>
            </HeroPage>
            <Footer />
          </Wrapper>
      </div>
    )
  }
} 

export default Home
