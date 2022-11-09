import { getElementError } from "@testing-library/react";
import React, { Component } from "react";
import TypeWriter from "typewriter-effect";

export default class home extends Component {
  render() {
    

    const handleClick = () => {
      document.getElementById("timeline").scrollIntoView({behavior: 'smooth'})
      
    };
    return (
      <div className="home">
        <div className="entrance-block">
          <div className="entrance-greeting display-6">
            <TypeWriter
              onInit={(sayName) => {
                sayName
                  .typeString(
                    'Hallo, ich bin <span style="color: #0aa200;" >Simon Moor</span>.'
                  )
                  .start();
              }}
            />
          </div>
          <div className="entrance-description lead">
            <TypeWriter
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(5000)
                  .typeString("Applikationsentwickler")
                  .start();
              }}
            />
          </div>
        </div>
        <div class="wrap">
          
            <button class="button" onClick={handleClick}>About Me</button>
          
        </div>
      </div>
    );
  }
}
