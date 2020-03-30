import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Student from "./Student";
import Bootcamp from "./Bootcamp";
import students from "./students.json";
// https://wd-ft-feb.s3.eu-central-1.amazonaws.com/alena.pn
class App extends Component {
  render() {
    return (
      <div className="App">
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
