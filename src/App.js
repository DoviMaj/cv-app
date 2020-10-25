import React from "react";
import MyForm from "./components/Form";
import Cv from "./components/Cv";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: true,
      name: "Flavio Gonzales",
      email: "flaviogonz@gmail.com",
      phoneNumber: "1393923932",
      adress: "3204 Windover Way Houston, TX 77204",
      education: [
        {
          id: 1,
          schoolName: "University of Houston",
          studyType: "Ph.d in spanish",
          studyStartDate: "2017-06-01",
          studyEndDate: "2013-04-11",
        },
        {
          id: 2,
          schoolName: "University of TX",
          studyType: "Mb.d in Linguistics",
          studyStartDate: "2017-06-01",
          studyEndDate: "2013-04-11",
        },
      ],
      companyName: "ABC Corporation",
      positionTitle: "Linguist",
      mainTasks:
        "Edited and translated written materials, business correspondence, and translation between languages.",
      jobStartDate: "2018-04-13",
      jobEndDate: "2020-02-26",
    };
    this.handleChange = this.handleChange.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.addEducation = this.addEducation.bind(this);
    this.handleEdChange = this.handleEdChange.bind(this);
    this.removeEd = this.removeEd.bind(this);
  }
  handleChange(e) {
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
  handleEdChange(e) {
    const newEd = this.state.education.map((ed) => {
      if (ed.id === Number(e.target.closest(".ed-container").id)) {
        const ed1 = ed;
        ed1[e.target.name] = [e.target.value];
        return ed1;
      } else {
        return ed;
      }
    });
    this.setState({
      education: newEd,
    });
  }
  addEducation() {
    const thisStateEd = this.state.education;
    const newId =
      thisStateEd.length === 0 ? 0 : thisStateEd[thisStateEd.length - 1].id + 1;
    const newEdField = {
      id: newId,
      schoolName: "",
      studyType: "",
      studyStartDate: "",
      studyEndDate: "",
    };
    this.setState({
      education: this.state.education.concat(newEdField),
    });
  }
  removeEd(e) {
    console.log(e.target.closest(".ed-container").id);
    const newEd = this.state.education.filter(
      (ed) => ed.id !== Number(e.target.closest(".ed-container").id)
    );
    this.setState({
      education: newEd,
    });
  }
  render() {
    return (
      <div className="App">
        <h1>CV APP</h1>
        {!this.state.edit ? (
          <Cv
            state={this.state}
            addEducation={this.addEducation}
            toggleEdit={this.toggleEdit}
          />
        ) : (
          <MyForm
            addEducation={this.addEducation}
            removeEd={this.removeEd}
            state={this.state}
            handleEdChange={this.handleEdChange}
            handleChange={this.handleChange}
            toggleEdit={this.toggleEdit}
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
