/*  
  PhotoComponent

  Component for a single Photo

*/


import React, { Component } from "react";
import './style.css'

export default class PhotoComponent extends Component {
  render() {
    return (
      <div className="card card-primary mb-4">
        <div className="mb-2"> Title:  {this.props.title}</div>
        <div>  
        <button className="btn btn-primary text-center compare-btn">Compare</button>
        </div>
      </div>
    );
  }
}
