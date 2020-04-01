import React from "react";
import "./Student.css";
//class based react component
// class Student extends React.Component {

//     render(){
//         return (
//         <div>
//             <h1>Hi I am {this.props.firstname}</h1>
//             <p>This is a story about me</p>
//         </div>
//         )
//     }
// }

// functional react component
function Student(props){
    return (
    <div className="student">
        <h1>Hi I am {props.firstname} {props.lastname}</h1>
        <p>This is a story about me</p>
        <img src={props.image} alt=""/>
        <button onClick={props.deleteStudent}> Delete me :(</button>  
    </div>
    )
}

export default Student;