import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Student from "./components/Student";
import Bootcamp from "./components/Bootcamp";
import students from "./students.json";

class App extends Component {

  state = {
    counter: 0,
    students: students,
    filteredStudents: students
  };

  increment = ()=>{
    this.setState({counter: this.state.counter + 1});
  };

  filterStudents = (e)=> {
    debugger
    let filterTheStudents = this.state.students.filter((student)=> {
      return(
      student.firstname.toLowerCase().includes(e.target.value.toLowerCase()) ||
      student.lastname.toLowerCase().includes(e.target.value.toLowerCase()) 
    )});
    debugger
    this.setState({filteredStudents: filterTheStudents});
  }
  render() {
    debugger
    let biggerThan;
    if(this.state.counter > 5){
      biggerThan = <h1>Bigger than 5!</h1>
    } else {
      biggerThan =  <h1>Not bigger than 5</h1>
    }
    return (
      <div className="App">
        <h1>Count {this.state.counter}</h1>
        <button onClick={this.increment}>increment</button>   
        {this.state.counter > 5? 
          <h1>Bigger than 5!</h1>:
          <h1>Not bigger than 5</h1>
        }
        

        {biggerThan}
        {this.state.counter > 10 && <h1>Bigger than 10!</h1>}
        
        <h1>Search Students</h1>
        <input type="text" onChange={this.filterStudents}/>
        {this.state.filteredStudents.map((student, index)=> (
          <Student 
            key={`${student.firstname}-${index}`}
            firstname={student.firstname} 
            lastname={student.lastname}
            image={`https://wd-ft-feb.s3.eu-central-1.amazonaws.com/${student.firstname.toLowerCase()}.png`}
          />
        ))}
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
