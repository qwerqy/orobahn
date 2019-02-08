import { Component } from 'react'
import { Container, Breadcrumb, Segment, Header, Divider, Label } from 'semantic-ui-react'
import Butter from 'buttercms'
import Link from 'next/link'
import Head from '../components/head'
import getConfig from 'next/config'
import Moment from 'react-moment'

import Wrapper from '../components/wrapper'
import Footer from '../components/footer'
import "../assets/blog.css"

const {publicRuntimeConfig} = getConfig()

const butter = Butter(publicRuntimeConfig.BUTTERCMS_API)

const BlogBreadcrumb = (props) => {
  return (
    <Breadcrumb>
      <Breadcrumb.Section><Link href='/blog'><a>Blog</a></Link></Breadcrumb.Section>
      <Breadcrumb.Divider>/</Breadcrumb.Divider>
      <Breadcrumb.Section active>{props.title}</Breadcrumb.Section>
    </Breadcrumb>
  )
}

class Post extends Component {
  static async getInitialProps({ query }) {
    const resp = await butter.post.retrieve(query.slug);  
    return resp.data;
  }
  render() {
    const post = this.props.data;

    return (
      <div>
        <Head title={post.seo_title} ogImage={post.featured_image} description={post.meta_description}/>
        <Wrapper dark solid>
          <Container style={{marginBottom: '3rem'}} text>
            <Segment style={{marginTop: '1rem', paddingLeft: 0}} basic>
              <BlogBreadcrumb title={post.seo_title} />
            </Segment>
            <Header className='post-header'>
              {post.title}
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
            <Divider/>
            <div dangerouslySetInnerHTML={{ __html: post.body }} />
            <Header sub>Tags:</Header>
            {
              post.tags.map((tag, i) => {
                return <Label key={i} as='a'>{tag.name}</Label>
              })
            }
            <br/>
          </Container>
          <Footer/>
        </Wrapper>
      </div>
    )
  }
}

export default Post;