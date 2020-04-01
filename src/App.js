import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Student from "./components/Student";
import students from "./students.json";
// https://wd-ft-feb.s3.eu-central-1.amazonaws.com/alena.pn
class App extends Component {

  constructor(){
    super()
    this.removeStudent = this.removeStudent.bind(this);
    this.addStudent = this.addStudent.bind(this);
    this.firstnameInputHandler = this.firstnameInputHandler.bind(this);
    this.lastnameInputHandler = this.lastnameInputHandler.bind(this);

  }

  state = {
    firstname: "",
    lastname: "",
    students: students,
    count: 0,
    foods: [{name: "hamburger", calories: 240, quantity: 5}]
  }
  
  removeStudent(studentIndex){
    let studentsCopy = [...this.state.students];
    studentsCopy.splice(studentIndex, 1);
    this.setState({students: studentsCopy});
  }
  increment(){
    this.setState({
      count: this.state.count + 1
    })
  }

  addStudent(e){
    // e.preventDefault();
    let studentsCopy = [...this.state.students];
    studentsCopy.push({
      firstname: this.state.firstname, 
      lastname: this.state.lastname
    })
    this.setState({students: studentsCopy});
  }
  
  toggleForm(){
    this.setState({hidden: !this.state.hidden})
  }

  firstnameInputHandler(event){
    this.setState({firstname:event.target.value})
  }

  lastnameInputHandler(event){
    this.setState({lastname:event.target.value})
  }

  render() {
    let formClassName = this.state.hidden? "hidden": "show"; // dynamic css classes. Implement a .hidden classes in css.
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Ironhack</h2>
        </div>
        <button onClick={this.incremen}>Increment</button>
        <div className={formClassName}>
          <input type="text" onChange={this.firstnameInputHandler} name="firstname" placeholder="firstname"/>
          <input type="text" onChange={this.lastnameInputHandler} name="lastname" placeholder="lastname"/>
          <button onClick={this.addStudent}>Add student</button>
        </div>
        {/* works as well but it's a little bit denser */}
        {/* <form onSubmit={this.addStudent}>
          <input type="text" onChange={this.firstnameInputHandler} name="firstname" placeholder="firstname"/>
          <input type="text" onChange={this.lastnameInputHandler} name="lastname" placeholder="lastname"/>
          <button type="submit">Add student</button>
        </form> */}
        {this.state.students.map((student, index)=> 
          <Student 
            studentIndex={index}
            deleteStudent={this.removeStudent}
            firstname={student.firstname} 
            lastname={student.lastname} 
            image={`https://wd-ft-feb.s3.eu-central-1.amazonaws.com/${student.firstname.toLowerCase()}.png`}
          />)
        }
      </div>
    );
  }
}

// function App(){
//   return (
//     <div className="App">
//       <div className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h2>Welcome to Ironhack</h2>
//       </div>
//       <Student />
//       <Student/>
//       <Student/>
//     </div>
//   )
// }

export default App;
