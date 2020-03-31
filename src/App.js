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
    random: students[Math.floor(Math.random()*students.length)]
  };

  increment = ()=>{
    this.setState({counter: this.state.counter + 1});
  };

  randomStudent = ()=> {
    this.setState({random: students[Math.ceil(Math.random()*students.length)]})
  }

  render() {
    return (
      <div className="App">
        <h1>Count {this.state.counter}</h1>
        <button onClick={this.increment}>increment</button>

        <button onClick={this.randomStudent}>Choose random student!</button>

        <Student 
            firstname={this.state.random.firstname} 
            image={`https://wd-ft-feb.s3.eu-central-1.amazonaws.com/${this.state.random.firstname.toLowerCase()}.png`}
        />
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
