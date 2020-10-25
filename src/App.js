import React from "react";
import MyForm from "./components/Form";
import Cv from "./components/Cv";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: true,
      name: "dv",
      email: "dv@gmail.com",
      phoneNumber: "093923932",
      schoolName: "cds",
      studyType: "biology",
      studyStartDate: "",
      studyEndDate: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
  }
  handleChange(e) {
    e.preventDefault();
    debugger;
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  toggleEdit(e) {
    e.preventDefault();
    this.setState({
      edit: !this.state.edit,
    });
  }
  render() {
    const {
      name,
      email,
      phoneNumber,
      schoolName,
      studyType,
      studyStartDate,
      studyEndDate,
    } = this.state;

    return (
      <div className="App">
        <h1>CV APP</h1>
        {!this.state.edit ? (
          <Cv state={this.state} toggleEdit={this.toggleEdit} />
        ) : (
          <MyForm
            handleChange={this.handleChange}
            toggleEdit={this.toggleEdit}
            name={name}
            email={email}
            phoneNumber={phoneNumber}
            schoolName={schoolName}
            studyType={studyType}
            studyStartDate={studyStartDate}
            studyEndDate={studyEndDate}
          />
        )}
      </div>
    );
  }
}

export default App;

/*
Think about how to structure your application into components. 
Your application should include:

    A section to add general information like name, 
      email, phone number.
    A section to add your educational experience 
      (school name, title of study, date of study)
    A section to add practical experience (
      company name, position title, main tasks of your jobs, 
      date from and until when you worked for that company)

  Be sure to include an edit and submit button for each 
section or for the whole CV, your preference. 

  The submit button should submit your form and display 
the value of your input fields in HTML elements. The edit button 
should add back (display) the input fields, with the previously 
displayed information as values. In those input fields, 

  you should be able to edit and resubmit the content. 
  
  You’re going to make heavy use of state and props, so make sure 
    you understood those concepts.
  
  Create a components folder in your src directory and add your 
    components.

  If you are familiar with bootstrap or any other CSS framework, 
    feel free to use it. If not, don’t worry, just include a styles 
    folder in your src directory and continue with normal CSS.

  Don’t forget to push your solution to GitHub. You should 
    be proud of your work and show it off to the world!
*/
