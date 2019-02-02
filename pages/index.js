import React from 'react'
import { Header, List, Icon } from 'semantic-ui-react'
import Head from '../components/head'
import Cover from '../components/cover'
import HeroBox from '../components/herobox'
import HeroPage from '../components/heropage'
import Footer from '../components/footer'
import Projects from '../components/projects'

const links = [
  {icon:"facebook", link:"https://www.facebook.com/amnrsln" },
  {icon:"instagram", link:"https://www.instagram.com/taikomin/"},
  {icon:"twitter", link:"https://twitter.com/qwerqy_dev"},
  {icon:"linkedin", link:"https://www.linkedin.com/in/aminroslan/"},
  {icon:"github", link:"https://www.github.com/qwerqy"}
]

const Home = () => (
  <div>
    <Head title="Home" />
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
    <HeroPage title='personal projects'>
      <Projects />
    </HeroPage>
    <Footer />
  </div>
)

export default Home
