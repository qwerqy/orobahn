import { Component } from 'react'
import getConfig from 'next/config'
import { Grid, Container, Header } from 'semantic-ui-react'
import Head from '../components/head'
import HeroPage from '../components/heropage'
import Footer from '../components/footer'
import ResponsiveNav from '../components/nav'
import HeroHeader from '../components/heroheader';
import Butter from 'buttercms';
const {publicRuntimeConfig} = getConfig()
const butter = Butter(publicRuntimeConfig.BUTTERCMS_API)

butter.post.list({page: 1, page_size: 10}).then(function(response) {
  console.log(response)
})

class Blog extends Component {
  state = {
    showNav: false,
    width: 0
  }

  showFixedMenu = () => {
    this.setState({ showNav: true })
  }

  render() {
    const styles = {
      header: {
        letterSpacing: '5px',
        fontSize: '1.5em'
      }
    }

    return (
      <div>
        <Head title="Blog" />
          <ResponsiveNav dark />
          <HeroHeader title="the blog.">
            Short disclaimer, I rarely write in my blog, but I'll try writing more often. Whatever life events that has happened in my life will go to this blog.
            That can be any projects, achievements, self-improvement tips, etc.
          </HeroHeader>
          <HeroPage>
            <Grid>
              <Grid.Row>
                <Grid.Column width={4}>
                  <Container>
                    <Header style={styles.header}>Latest Posts</Header>
                  </Container>
                </Grid.Column>
                <Grid.Column width={12}>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </HeroPage>
          <Footer />
      </div>
    )
  }
} 

export default Blog