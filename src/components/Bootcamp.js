import React, {Component} from "react";
import "./Bootcamp.css";
// class Bootcamp extends Component {

//     render(){
//         return (
//             <h1>Web dev bootcamp ftw!</h1>
//         )
//     }
// }

function Bootcamp(props){
    return (
        <div className="bootcamp">
            <h1>{props.bootcampType} bootcamp ftw!</h1>
        </div>

    )
}

export default Bootcamp;