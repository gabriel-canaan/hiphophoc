import React, {Component} from "react";
import './puff.css'
import {Form, Button, Grid, Segment, Container} from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';
import {AgeFromDate} from "age-calculator";
// var getAge = require("get-age");

const HOC = Forma => class extends Component {
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

  componentDidMount() {
    this.setState();
  }

  render() {
    return <Forma {...this.props} stuff={this.state}/>;
  }
};

// -----------------------------------------------------------

class App extends Component {
  render() {
    return (<div className="App">
      <FormaHOC></FormaHOC>
    </div>);
  }
}

// ---------------------------------------------------------------

const Submit = HOC(props => <Button fluid type="submit" id="Subtubbs" >Submit</Button>);

// -----------------------------------------------------------------

class Forma extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ...props.stuff
    }
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextState.yyyy && nextState.mm && nextState.dd) {
      if (nextState.age !== this.state.age || this.state.age === "") {
        this.setState({
          age: this.calculateAge(nextState.yyyy, nextState.mm, nextState.dd)
        });
      }
    }
  }

  onSubmit = async event => {
    event.preventDefault();
    this.setState();
  };

  clearFields = () => this.setState({
    name: "",
    dd: "",
    mm: "",
    yyyy: "",
    age: "",
    email: ""
  })

  saveFields = () => {
    const {displayName, displayAge, displayEmail} = this.state
    this.setState({displayName: this.state.name, displayAge: this.state.age, displayEmail: this.state.email})

  }

  calculateAge = (yyyy, mm, dd) => {
    let ageFromDate = new AgeFromDate(new Date(yyyy, mm, dd)).age;
    return ageFromDate;
  };

  // calculateAge = (yyyy, mm, dd) => {
  //   let getAge = new getAge(yyyy, mm, dd);
  //   return getAge;
  // };

  handleAgeFieldChange = (field, event) => {
    event.preventDefault();
    this.setState({[field]: event.target.value});
  };

  render() {
    return (<Container style={{
        marginTop: 20
      }}>
      <Grid divided="vertically">
        <Grid.Row columns={2}>
          <Grid.Column width={8}>
            <Segment id="Segpauline">
              <Form onSubmit={this.clearFields}>
                <Form.Input id="Indave" placeholder="name" required value={this.state.name} onChange={event => this.setState({name: event.target.value})}/>
                <Form.Input fluid id="Indave" placeholder='Example(Sean Puffy Combs)' readOnly="readOnly"/>
                <Grid divided="vertically">
                  <Grid.Row columns={3}>
                    <Grid.Column>
                      <Form.Input id="Indave" placeholder="dd" required input="number" max='31' value={this.state.dd} onChange={event => this.handleAgeFieldChange("dd", event)}/>
                    </Grid.Column>

                    <Grid.Column>
                      <Form.Input id="Indave" placeholder="mm" required input="number" max='12' value={this.state.mm} onChange={event => this.handleAgeFieldChange("mm", event)}/>
                    </Grid.Column>

                    <Grid.Column>
                      <Form.Input id="Indave" placeholder="yyyy" required input="number" value={this.state.yyyy} onChange={event => this.handleAgeFieldChange("yyyy", event)}/>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
                <Form.Input id="Indave" placeholder="email@domain.com" input="email" value={this.state.email} onChange={event => this.setState({email: event.target.value})}/>
                <Submit
                   onClick={this.onSubmit}>Submit</Submit>
              </Form>
            </Segment>
          </Grid.Column>
          <Grid.Column width={8}>
            <Segment id="Bacmickey">
              <Form size={'large'} key={'large'} onSubmit={this.saveFields}>
                <Form.Input  id="Dislazaru"
                  label='name'
                  placeholder={`${this.state.name}` || `${this.props.displayName}`} readOnly="readOnly"/>
                <Form.Input id="Dislazaru"
                  label='age'
                  placeholder={`${this.state.age}` || "age"} readOnly="readOnly"/>
                <Form.Input id="Dislazaru"
                  label='email'
                  placeholder={`${this.state.email}` || "email"} readOnly="readOnly"/>
              </Form>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>);
  }
}
const FormaHOC = HOC(Forma);
export default App;
