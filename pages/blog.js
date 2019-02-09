import { Component, Fragment } from 'react'
import Link from 'next/link'
import Moment from 'react-moment'
import getConfig from 'next/config'
import { Grid, Segment, Header, List, Label, Button } from 'semantic-ui-react'
import Head from '../components/head'
import HeroPage from '../components/heropage'
import Footer from '../components/footer'
import HeroHeader from '../components/heroheader';
import Wrapper from '../components/wrapper'
import "../assets/blog.css"
import Butter from 'buttercms';
const {publicRuntimeConfig} = getConfig()
const butter = Butter(publicRuntimeConfig.BUTTERCMS_API)

const ListOfRecentPosts = ({ posts }) => {
  return (
    <List>
      {
        posts.slice(0, 5).map(post => {
          return (
            <List.Item className='link' key={post.created}><Link href={`/posts/${post.slug}`}><a>{post.seo_title}</a></Link></List.Item>
          )
        })
      }
    </List>
  )
}

const BlogPosts = ({ posts }) => {
  return (
    <Fragment>
      {
        posts.map(post => {
          return (
            <Segment key={post.created} vertical >
              <Header className='post-header'>
                <Link href={`/posts/${post.slug}`}><a>{post.seo_title}</a></Link>
                <Header.Subheader>{post.meta_description}</Header.Subheader>
              </Header>
              {
                post.categories.map((cat, i) => {
                  return <Label key={i} color='black' as='a'>{cat.name}</Label>
                })
              }
              <Header sub>
                <Moment format="D MMM YYYY" withTitle>
                    {post.published}
                </Moment>
              </Header>
              <br />
              <div dangerouslySetInnerHTML={{__html: post.body}} />
              <Header sub>Tags:</Header>
              {
                post.tags.map((tag, i) => {
                  return <Label key={i} as='a'>{tag.name}</Label>
                })
              }
            </Segment>
          )
        })
      }
    </Fragment>
  )
}

class Blog extends Component {
  static async getInitialProps({ query }) {
    let page = query.page || 1;

    const resp = await butter.post.list({page: page, page_size: 10})    
    return resp.data;
  }

  state = {
    showNav: false,
    width: 0
  }

  showFixedMenu = () => {
    this.setState({ showNav: true })
  }

  render() {
    const { next_page, previous_page } = this.props.meta;
    const posts = this.props.data;

    return (
      <div>
        <Head title="Blog" />
        <Wrapper dark {...this.props}>
          <HeroHeader title="the blog."/>
          <HeroPage>
            <Grid container stackable>
              <Grid.Row>
                <Grid.Column width={4}>
                  <Segment>
                    <Header className='recent-posts'>Recent Posts</Header>
                    <ListOfRecentPosts posts={posts} />
                  </Segment>
                </Grid.Column>
                <Grid.Column width={12}>
                  <BlogPosts posts={posts}/>
                  <br/>
                  <div>
                    { 
                      previous_page &&
                      <Button inverted floated='left'>
                        <Link href={`/?page=${previous_page}`}><a>Prev Page</a></Link>
                      </Button>
                    }
                  
                    { 
                      next_page && 
                      <Button inverted floated='right'>
                        <Link href={`/?page=${next_page}`}><a>Next Page</a></Link>
                      </Button>
                    }
                  </div>
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