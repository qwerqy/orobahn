import { Component } from 'react'
import Moment from 'react-moment'
import getConfig from 'next/config'
import { Grid, Segment, Header, List, Divider } from 'semantic-ui-react'
import Head from '../components/head'
import HeroPage from '../components/heropage'
import Footer from '../components/footer'
import HeroHeader from '../components/heroheader';
import Wrapper from '../components/wrapper'
import "../assets/blog.css"
import Butter from 'buttercms';
const {publicRuntimeConfig} = getConfig()
const butter = Butter(publicRuntimeConfig.BUTTERCMS_API)

class Blog extends Component {
  static async getInitialProps() {
    const res = await butter.post.list({page: 1, page_size: 10, })    
    return res.data;
  }

  state = {
    showNav: false,
    width: 0
  }

  showFixedMenu = () => {
    this.setState({ showNav: true })
  }

  render() {
    const posts = this.props.data;

    return (
      <div>
        <Head title="Blog" />
        <Wrapper dark>
          <HeroHeader title="the blog.">
            Short disclaimer, I rarely write in my blog, but I'll try writing more often. Whatever life events that has happened in my life will go to this blog.
            That can be any projects, achievements, self-improvement tips, etc.
          </HeroHeader>
          <HeroPage>
            <Grid container stackable>
              <Grid.Row>
                <Grid.Column width={4}>
                  <Segment>
                    <Header className='recent-posts'>Recent Posts</Header>
                    <List>
                      {
                        posts.map(post => {
                          return (
                            <List.Item key={post.created}>{post.title}</List.Item>
                          )
                        })
                      }
                    </List>
                  </Segment>
                </Grid.Column>
                <Grid.Column width={12}>
                  {
                    posts.map(post => {
                      return (
                        <Segment key={post.created} vertical >
                          <Header className='post-header'>
                            {post.seo_title}
                            <Header.Subheader>{post.meta_description}</Header.Subheader>
                          </Header>
                          <Header sub>
                            <Moment format="D MMM YYYY" withTitle>
                                {post.published}
                            </Moment>
                          </Header>
                          <br />
                          <div dangerouslySetInnerHTML={{__html: post.body}} />
                        </Segment>
                      )
                    })
                  }
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </HeroPage>
          <Footer />
        </Wrapper>
      </div>
    )
  }
} 

export default Blog