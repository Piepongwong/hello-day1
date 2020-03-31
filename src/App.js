import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Student from "./components/Student";
import Bootcamp from "./components/Bootcamp";
import students from "./students.json";
// https://wd-ft-feb.s3.eu-central-1.amazonaws.com/alena.pn
class App extends Component {
  state = {
    counter: 0
  };

  increment = ()=>{
    this.setState({counter: this.state.counter + 1});
  };

  render() {
    return (
      <div className="App">
        <h1>Count {this.state.counter}</h1>
        <button onClick={this.increment}>increment</button>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Ironhack</h2>
        </div>
        <Bootcamp bootcampType="Web dev FT"/>
        <Bootcamp bootcampType="UX/UI FT"/>

        {students.map((student)=> 
          <Student 
            firstname={student.firstname} 
            image={`https://wd-ft-feb.s3.eu-central-1.amazonaws.com/${student.firstname.toLowerCase()}.png`}
          />)
        }
        <Student firstname="Elena"/>
        <Student firstname="Shabeer"/>
        <Student firstname="Sybille"/>

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
