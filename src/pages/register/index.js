import React from "react";
import "../../css/registerStyle.css";
export default function Register(){
  return(
    <div className ="header">
      <p id ="head-name">Register</p>
      <div className ="contain">
        <div className ="row">
          <div className = "group-r1-c1">
            <p id = "text">First Name : </p>
            <input type="text" name="fn" id = "box1"/>
          </div>
          <div className = "group-r1-c2">
            <p id = "text">Last Name : </p>
            <input type="text" name="ln" id = "box1"/>
          </div>
        </div>
        <div className ="row">
          <div className = "group-r2-c1">
            <p id = "text">Nickname : </p>
            <input type="text" name="bd" id = "box2"/>
          </div>
          <div className = "group-r2-c2">
            <form action="/action_page.php">
              Birthday (date and time) :
              <input type="datetime-local" name="bdaytime"id = "bdbox"/>
            </form>
          </div>
        </div>
        <div className ="row">
          <div className = "group-r3-c1">
            <p id = "text">Email : </p>
            <input type="text" id = "box3"/>
          </div>
          <div className = "group-r3-c2">
            <p id = "text">Phone : </p>
            <input type="text" id = "box1"/>
          </div>
        </div>
        <div className ="row">
          <div className = "group-r4-c1">
            <p id = "text">Address : </p>
            <input type="text" id = "box4"/>
          </div>
          <div className = "group-r4-c2">
            <p id = "text">Notation : </p>
            <input type="text" id = "box4"/>
          </div>
        </div>
        <div className ="row">
          <button className= "btsummit">Summit</button>
        </div>
      </div>
    </div>
  );
}
