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

  render() {
    return (
      <Container style={{ marginTop: 20 }}>
          <Grid divided="vertically">
            <Grid.Row columns={2}>
              <Grid.Column width={8}>
                <Form>
                  <Form.Input
                    placeholder="name"
                  />
                </Form>
              </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }

}

export default Forma;
