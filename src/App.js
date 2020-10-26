import React from "react";
import MyForm from "./components/Form";
import Cv from "./components/Cv";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
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
      experience: [
        {
          id: 1,
          companyName: "ABC Corporation",
          positionTitle: "Linguist",
          mainTasks:
            "Edited and translated written materials, business correspondence, and translation between languages.",
          jobStartDate: "2018-04-13",
          jobEndDate: "2020-02-26",
        },
        {
          id: 2,
          companyName: "CDE Corporation",
          positionTitle: "Linguist",
          mainTasks:
            "Edited and translated written materials, business correspondence, and translation between languages.",
          jobStartDate: "2015-04-13",
          jobEndDate: "2017-02-26",
        },
      ],
    };
    this.handleChange = this.handleChange.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.addEducation = this.addEducation.bind(this);
    this.addExperience = this.addExperience.bind(this);
    this.handleEdChange = this.handleEdChange.bind(this);
    this.removeEd = this.removeEd.bind(this);
    this.removeEx = this.removeEx.bind(this);
    this.handleExChange = this.handleExChange.bind(this);
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
  handleExChange(e) {
    const newEx = this.state.experience.map((ed) => {
      if (ed.id === Number(e.target.closest(".ex-container").id)) {
        const ed1 = ed;
        ed1[e.target.name] = [e.target.value];
        return ed1;
      } else {
        return ed;
      }
    });
    this.setState({
      experience: newEx,
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
  addExperience() {
    debugger;
    const thisStateEx = this.state.experience;
    const newId =
      thisStateEx.length === 0 ? 0 : thisStateEx[thisStateEx.length - 1].id + 1;
    const newExField = {
      id: newId,
      companyName: "",
      positionTitle: "",
      mainTasks: "",
      jobStartDate: "",
      jobEndDate: "",
    };
    this.setState({
      experience: this.state.experience.concat(newExField),
    });
  }
  addEducation() {
    debugger;
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
  removeEx(e) {
    const newEx = this.state.experience.filter(
      (ex) => ex.id !== Number(e.target.closest(".ex-container").id)
    );
    this.setState({
      experience: newEx,
    });
  }
  removeEd(e) {
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
            removeEx={this.removeEx}
            state={this.state}
            addExperience={this.addExperience}
            handleExChange={this.handleExChange}
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
