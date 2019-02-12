import { Component } from "react";
import { Table } from "semantic-ui-react";
import { gaUserTracking } from "../analytics";

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
    return (
      <Table celled striped inverted>
        <Table.Header style={{ width: "calc( 100% - 1em )" }}>
          <Table.Row>
            <Table.HeaderCell colSpan="3">
              Latest Updated Git Repository
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body
          style={{
            height: "70vh",
            display: "block",
            overflowY: "scroll",
            overflowX: "hidden"
          }}
        >
          {Object.keys(repos).map(i => {
            return (
              <Table.Row
                style={{
                  display: "table",
                  width: "100%",
                  tableLayout: "fixed"
                }}
                key={i}
              >
                <Table.Cell>
                  <a
                    target="_blank"
                    style={{ textDecoration: "none", color: "white" }}
                    href={repos[i].html_url}
                    onClick={() =>
                      gaUserTracking(
                        "Projects",
                        `Clicked Github Repo ${repos[i].name}`
                      )
                    }
                  >
                    {repos[i].name}
                  </a>
                </Table.Cell>
                <Table.Cell>{repos[i].description}</Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    );
  }
}

export default ProjectTable;
