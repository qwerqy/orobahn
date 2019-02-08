import { Component } from 'react'
import { Card, Responsive } from 'semantic-ui-react'
import Moment from 'react-moment'
import Link from 'next/link'
import getConfig from 'next/config'

import Head from '../components/head'
import Cover from '../components/cover'
import HeroBox from '../components/herobox'
import HeroPage from '../components/heropage'
import Footer from '../components/footer'
import Wrapper from '../components/wrapper'
import '../assets/index.css'

import Butter from 'buttercms';
const {publicRuntimeConfig} = getConfig()
const butter = Butter(publicRuntimeConfig.BUTTERCMS_API)

class Home extends Component {
  static async getInitialProps() {
    const resp = await butter.post.list({page: 1, page_size: 3, exclude_body: true})
    return resp.data  
  }
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
    const posts = this.props.data
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
            <HeroPage dark title='latest blog posts'>
            <Card.Group>
              {
                posts.map(post => {
                  return (
                    <Card key={post.created} >
                      <Card.Content>
                        <Card.Header>
                          <Link href={`/posts/${post.slug}`}><a>{post.seo_title}</a></Link>
                        </Card.Header>
                        <Card.Meta>
                          <Moment format="D MMM YYYY" withTitle>
                              {post.published}
                          </Moment>
                        </Card.Meta>
                        <br />
                        <Card.Description>{post.summary}</Card.Description>
                      </Card.Content>
                    </Card>
                  )
                })
              }
            </Card.Group>
            </HeroPage>
            <Footer />
          </Wrapper>
      </div>
    )
  }
} 

export default Home
