import { Component } from "react";
import {
  Segment,
  Form,
  Button,
  Container,
  Header,
  List,
  Icon
} from "semantic-ui-react";
import Head from "../components/head";
import Wrapper from "../components/wrapper";
import HeroPage from "../components/heropage";
import { links } from "../components/helpers/index";

// import "../assets/contact.css";

class Contact extends Component {
  render() {
    const styles = {
      segment: {
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%"
      }
    };
    return (
      <div>
        <Head title="Contact Me" />
        <Wrapper dark {...this.props}>
          <HeroPage dark>
            <Container style={styles.segment}>
              <Header className="contact-header" textAlign="center" inverted>
                Let's talk! Send me an email.
              </Header>
              <Segment as={Container} text>
                <Form>
                  <Form.Field>
                    <label>Name</label>
                    <input />
                  </Form.Field>
                  <Form.Field>
                    <label>Email</label>
                    <input />
                  </Form.Field>
                  <Form.Field>
                    <label>Subject</label>
                    <input />
                  </Form.Field>
                  <Form.TextArea label="Message" />
                  <Button type="submit">Submit</Button>
                </Form>
              </Segment>
              <br />
              <List
                horizontal
                style={{ display: "flex", justifyContent: "center" }}
              >
                {links.map(link => {
                  return (
                    <List.Item key={link.icon}>
                      <a
                        style={{ textDecoration: "none", color: "white" }}
                        href={link.link}
                      >
                        <Icon size="large" name={link.icon} />
                      </a>
                    </List.Item>
                  );
                })}
              </List>
            </Container>
          </HeroPage>
        </Wrapper>
      </div>
    );
  }
}

export default Contact;
