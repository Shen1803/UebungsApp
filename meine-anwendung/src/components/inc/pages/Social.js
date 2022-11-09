import React, { Component } from "react";

export default class Social extends Component {
  render() {
    return (
      <div>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
          integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
          crossorigin="anonymous"
        ></link>
        <ul>
          <li>
            <a href="https://twitter.com/IiiGraf">
              <i class="fab fa-twitter icon"></i>{" "}
            </a>
          </li>
          <li>
            <a href="https://github.com/Shen1803">
              <i class="fab fa-github icon"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fab fa-linkedin-in icon"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/s1m0n1778/?hl=en">
              <i class="fab fa-instagram icon"></i>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
