/*  
  PhotoComponent

  Component for a single Photo

*/


import React, { Component } from "react";
import './style.css'

export default class PhotoComponent extends Component {
  render() {
    return (
      <div>
        Title:  {this.props.title}
        <button className="btn btn-primary">Compare</button>
        <Button > dsaad</Button> 
      </div>
    );
  }
}
