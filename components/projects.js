import { Component } from "react";
import { Header, Grid } from "semantic-ui-react";
// import { gaUserTracking } from "../analytics";
import Moment from "react-moment";

class ProjectTable extends Component {
  state = {
    repos: ""
  };

  fetchGithubRepo = async url => {
    const res = await fetch(url);
    const json = await res.json();
    return json;
  };

  componentDidMount() {
    this.fetchGithubRepo(
      "https://api.github.com/users/qwerqy/repos?type=owner&sort=updated"
    ).then(json => this.setState({ repos: json }));
  }

  render() {
    const { repos } = this.state;
    const { store } = this.props;
    return (
      <Grid stackable columns={3}>
        {Object.keys(repos).map(i => {
          return (
            <Grid.Row key={i}>
              <Grid.Column width={6}>
                <Header inverted={store.darkMode} className="list-hero-text">
                  {repos[i].name}
                </Header>
              </Grid.Column>
              <Grid.Column width={2}>
                <Moment
                  format="YYYY"
                  withTitle
                  style={{ color: store.darkMode ? "#fff" : "#1b1c1d" }}
                >
                  {repos[i].created_at}
                </Moment>
              </Grid.Column>
              <Grid.Column width={8}>
                <p style={{ color: store.darkMode ? "#fff" : "#1b1c1d" }}>
                  {repos[i].description}
                </p>
                <a href={repos[i].html_url} target="_blank">
                  Source
                </a>
              </Grid.Column>
            </Grid.Row>
          );
        })}
      </Grid>
    );
  }
}

export default ProjectTable;
