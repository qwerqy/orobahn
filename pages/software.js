import { Component } from 'react'
import { Card, Header, Grid, List } from 'semantic-ui-react'
import Head from '../components/head'
import HeroPage from '../components/heropage'
import Footer from '../components/footer'
import Wrapper from '../components/wrapper'
import Projects from '../components/projects'
import HeroHeader from '../components/heroheader'
import HeroBox from '../components/herobox'

const items = [
  {
    header: 'Project Report - April',
    description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
    meta: 'ROI: 30%',
  },
  {
    header: 'Project Report - May',
    description: 'Bring to the table win-win survival strategies to ensure proactive domination.',
    meta: 'ROI: 34%',
  },
  {
    header: 'Project Report - June',
    description:
      'Capitalise on low hanging fruit to identify a ballpark value added activity to beta test.',
    meta: 'ROI: 27%',
  },
]

const skillset = [
  {
    header: 'Core',
    items: ['Node.js', 'Ruby']
  },
  {
    header: 'Front End',
    items: ['React.js', 'React Native', 'Vue.js', 'ES6+', 'Javascript', 'jQuery']
  },
  {
    header: 'Back End',
    items: ['Express', 'Koa', 'Ruby On Rails']
  },
  {
    header: 'Database',
    items: ['MongoDB', 'Postgresql', 'Firestore']
  },
  {
    header: 'Frameworks',
    items: ['Bootstrap', 'Semantic UI', 'Element UI', 'Carbon UI']
  },
  {
    header: 'CD & CI',
    items: ['Docker', 'Heroku', 'Drone']
  }
]
class Software extends Component {
  state = {
    showNav: false,
    width: 0
  }
  showFixedMenu = () => {
    this.setState({ showNav: true })
  }

  render() {
    return (
      <div>
        <Head title="Software Portfolio" />
        <Wrapper dark>
          <HeroHeader title="software portfolio." />
          <HeroBox title='skillset'>
            <Grid stackable columns={skillset.length}>
              <Grid.Row>
                {
                  skillset.map((list, index) => {
                    return (
                      <Grid.Column style={{paddingBottom:'1rem'}} key={index}>
                        <Header sub style={{ letterSpacing: '2px' }}>{list.header}</Header>
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
          </HeroBox>
          <HeroPage title='projects showcase' sub='Showcasing my finished projects some of which are live.'>
            <Card.Group itemsPerRow={1} items={items} />
          </HeroPage>
          <HeroPage title='personal projects' sub='Project repos from my github which are public.'>
            <Projects />
          </HeroPage>
          <Footer />
        </Wrapper>
      </div>
    )
  }
} 

export default Software;