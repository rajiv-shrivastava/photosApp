/*  
  welcomePage.js

  Welcome page when user visits the app

*/

import React, { Component } from "react";
import { Link } from "react-router";
import { Button } from "react-bootstrap";
import './style.css'
export default class welcomePage extends Component {
  render() {
    return (
      <div className="text-center">
        <h1>Welcome to mu Quiz!</h1>
        <p>
          <i>
            You will be presented with 10 questions and you have to answer in
            right and wrong only.{" "}
          </i>
        </p>

        <p>
          <i>
            By default <span className="colorRed"> FALSE </span> is selected
            in the questions{" "}
          </i>
        </p>
        <p>
          <Link to="/questions">
            <Button bsStyle="primary"> Begin </Button>
          </Link>
        </p>
      </div>
    );
  }
}
