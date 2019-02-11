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

class Contact extends Component {
  static async getInitialProps() {
    const node_env = process.env.NODE_ENV;
    return { node_env };
  }

  handleSubmit = async e => {
    e.preventDefault();

    const data = {
      name: document.querySelector("#contact-name").value,
      email: document.querySelector("#contact-email").value,
      subject: document.querySelector("#contact-subject").value,
      message: document.querySelector("#contact-message").value
    };

    try {
      const domain =
        this.props.node_env === "production"
          ? "https://aminroslan.com"
          : "http://localhost:3000";

      const response = await fetch(`${domain}/sendemail`, {
        method: "POST",
        body: data
      });

      if (response.data.msg === "success") {
        alert("Message sent");
        this.resetForm();
      } else {
        console.log("Message not sent, something went wrong!");
      }
    } catch (err) {
      console.error(err);
    }
  };

  resetForm = () => document.querySelector("#contact-form").reset();

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
                <Form id="contact-form" onSubmit={this.handleSubmit}>
                  <Form.Field>
                    <label>Name</label>
                    <input type="text" id="contact-name" />
                  </Form.Field>
                  <Form.Field>
                    <label>Email</label>
                    <input type="email" id="contact-email" />
                  </Form.Field>
                  <Form.Field>
                    <label>Subject</label>
                    <input type="text" id="contact-subject" />
                  </Form.Field>
                  <Form.TextArea label="Message" id="contact-message" />
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
