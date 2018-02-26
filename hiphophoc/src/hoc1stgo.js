import React, {Component} from 'react';
import {Form,Button,Input,Grid,Container,Card,Label} from "semantic-ui-react";
import ageCalculator, { AgeFromDate } from "age-calculator";
var getAge = require('get-age');

const HOC = (Forma) => class extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      dd: "",
      mm: "",
      yyyy: "",
      age: "",
      email: ""
    };
  }

  componentWillMount() {
    console.log('dave');
  }

  render() {
    return (<Forma {...this.props} {...this.state}/>)
  }
}

class App extends Component {
  render() {
    return (<div className="App">
      <Submit>Submit</Submit>
      <FormaHOC>bghfsd</FormaHOC>
    </div>);
  }
}

const Submit = HOC((props) => <Button type="submit">
</Button>)

class Forma extends Component {
  componentWillMount() {
    console.log('papa');
  }

  componentDidMount() {
    this.setState();
  };


  componentWillUpdate(nextProps, nextState) {
     if (nextState.dd && nextState.mm && nextState.yyyy) {
       if (nextState.age !== this.state.age || this.state.age === "") {
         this.setState({
           age: this.calculateAge(nextState.yyyy, nextState.mm, nextState.dd)
         });
       }
     }
   }

  onSubmit = async event => {
    event.preventDefault();
    this.setState;
  };

  calculateAge = (yyyy, mm, dd) => {
    let ageFromDate = new AgeFromDate(new Date(yyyy, mm, dd)).age;
    return ageFromDate;
  };


  calculateAge = (yyyy, mm, dd) => {
    let getAge = new getAge(yyyy, mm, dd);
    return getAge;
}


  handleAgeFieldChange = (field, event) => {
    event.preventDefault();
    this.setState({ [field]: event.target.value });
  };

  render() {
    return (  <Container style={{ marginTop: 20 }}>
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
                    input ="email"
                    value={this.state.email}
                    onChange={event => this.setState({ email: event.target.value })}
                  />
                </Form>
              </Grid.Column>
              <Grid.Column width={8}>
              <Card.Group>
                <Card fluid header={`${this.state.name}` || "name"} />
                <Card fluid header={`${this.state.age}` || "age"} />
                <Card fluid header={`${this.state.email}` || "email"} />
              </Card.Group>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}
const FormaHOC = HOC(Forma)
export default App;
