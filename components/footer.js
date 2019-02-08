import { Component } from 'react';
import { Segment, Container, Grid, Header, List, Icon, Image } from 'semantic-ui-react'

const links = [
  {icon:"facebook", link:"https://www.facebook.com/amnrsln" },
  {icon:"instagram", link:"https://www.instagram.com/taikomin/"},
  {icon:"twitter", link:"https://twitter.com/qwerqy_dev"},
  {icon:"linkedin", link:"https://www.linkedin.com/in/aminroslan/"},
  {icon:"github", link:"https://www.github.com/qwerqy"}
]

class Footer extends Component {
  render() {
    return (
      <Segment inverted vertical style={{ backgroundColor: 'black', padding: '5em 0em' }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={3}>
                <Header inverted as='h4' content='About' />
                <List link inverted>
                  <List.Item as='a'>Projects</List.Item>
                  <List.Item as='a'>Contact Me</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as='h4' content='Services' />
                <List link inverted>
                  <List.Item as='a'>Freelance Work</List.Item>
                  <List.Item as='a'>Resume</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={7}>
              <Header as='h4' inverted>
                Social Media
              </Header>
              <List horizontal>
                {
                  links.map(link => {
                    return (
                      <List.Item key={link.icon}>
                        <a style={{textDecoration: 'none', color: 'white'}} href={link.link}>
                        <Icon size='large' name={link.icon} />
                        </a>
                      </List.Item>
                    )
                  })
                }
              </List>
              <Header as='h4' inverted>Blog Engine by</Header>
              <Image size='small' src='/static/butter-w.png'/>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    )
  }
}

export default Footer;