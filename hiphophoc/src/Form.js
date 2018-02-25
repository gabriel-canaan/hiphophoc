import React, { Component } from "react";
import { Form,Button,Input,Grid,Container } from "semantic-ui-react";

class Forma extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      dd: "",
      mm: "",
      yyyy: "",
      age: "",
      email: ""
    };
  }

  onSubmit = async event => {
    event.preventDefault();
    this.setState;
  }

  render() {
    return (
      <Container style={{ marginTop: 20 }}>
          <Grid divided="vertically">
            <Grid.Row columns={2}>
              <Grid.Column width={8}>
                <Form>
                  <Form.Input
                    className="form"
                    placeholder="name"
                    value={this.state.name}
                    onChange={event => this.setState({ name: event.target.value })}
                  />

                  <Form.Input
                    className="form"
                    placeholder="email"
                    input="email"
                    value={this.state.email}
                    onChange={event => this.setState({ email: event.target.value })}
                  />
                  <Button type="submit" onClick={this.onSubmit}>
                  Submit
                </Button>
                </Form>
              </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }

}

export default Forma;
