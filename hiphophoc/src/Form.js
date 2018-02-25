import React, { Component } from "react";
import { Form,Button,Input,Grid,Container, Card } from "semantic-ui-react";

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
                  <Grid divided="vertically">
                  <Grid.Row columns={3}>
                    <Grid.Column>
                      <Form.Input
                        placeholder="dd"
                        required
                        value={this.state.dd}
                        onChange={event => this.handleAgeFieldChange("dd", event)}
                      />
                    </Grid.Column>

                    <Grid.Column>
                      <Form.Input
                        placeholder="mm"
                        value={this.state.mm}
                        onChange={event => this.handleAgeFieldChange("mm", event)}
                      />
                    </Grid.Column>

                    <Grid.Column>
                      <Form.Input
                        placeholder="yyyy"
                        value={this.state.yyyy}
                        onChange={event => this.handleAgeFieldChange("yyyy", event)}
                      />
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
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
              <Grid.Column width={8}>
              <Card.Group>
                <Card fluid header={`${this.state.name}` || "name"} />
                <Card fluid header={`${this.state.email}` || "email"} />
              </Card.Group>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }

}

export default Forma;
