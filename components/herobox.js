import { Component, Fragment } from 'react'
import { Container, Header, Segment, List, Grid } from 'semantic-ui-react'

class ListBox extends Component {
  // Any lists will be filled under this.state.contents. 
  state = {
    contents: [
      {
        category:'work',
        lists: [
          {
            header: 'Front End',
            items: ['React', 'React Native', 'Vue', 'MobX', 'Next.js', 'Nuxt.js']
          },
          {
            header: 'Back End',
            items: ['Express', 'Koa', 'Ruby On Rails']
          },
          {
            header: 'Database',
            items: ['MongoDB', 'Postgresql']
          }
        ]
      }
    ]
  } 
  render() {
    const { category } = this.props
    const { contents } = this.state

    // for loop to detect category of listbox
    for (let i in contents) {
      let content = contents[i]
      if (content.category === category) {
        return (
          <Grid centered columns={content.lists.length}>
            <Grid.Row>
              {
                content.lists.map((list, index) => {
                  return (
                    <Grid.Column key={index}>
                      <Header inverted style={{ letterSpacing: '2px' }}>{list.header}</Header>
                      <List bulleted>
                        {
                          list.items.map( (item, index) => <List.Item key={index}>{item}</List.Item>)
                        }
                      </List>
                    </Grid.Column>
                  )
                })
              }
            </Grid.Row>
          </Grid>
        )    
      } else {
        return null
      }
    }
  }
  
  
}

class HeroBox extends Component {
  capitalizeTitle = title => {
    return title ? title.toUpperCase() : null
  }

  slantDirection = direction => {
    switch (direction) {
      case 'right': {
        return "polygon(0 0, 100% 0, 100% 90%, 0 100%)"
      }
      case 'left': {
        return "polygon(0 0, 100% 10%, 100% 100%, 0 100%)"
      }
      default: {
        return "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
      }
    }
  }

  render() {
    const { title, dark, slant, titleAlign } = this.props

    const styles = {
      segment: {
        borderRadius: 0,
        margin: 0,
        padding: '5em 0em',
        clipPath: this.slantDirection(slant),
        border: 0
      },
      header: {
        letterSpacing: '5px',
        fontSize: '1.5em'
      },
      paragraph: {
        fontSize: '1.3em'
      }
    }

    return (
      <Segment style={styles.segment} inverted={dark}>
        <Container textAlign={titleAlign}>
          <Header style={styles.header} textAlign={titleAlign} inverted={dark}>{this.capitalizeTitle(title)}</Header>
          <p style={styles.paragraph}>{this.props.children}</p>
          <br/>
          <ListBox category={title}/>
        </Container>
      </Segment>
    )
  }
}

export default HeroBox;