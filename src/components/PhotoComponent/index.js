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
        <div className="mb-2">
           <img src={this.props.url} height="150px" width="150px" />
           </div>
        <div>  
        <button 
           className="btn btn-primary text-center compare-btn"
           onClick={(id) => this.props.comparePhoto(this.props.id)}
            >
             Compare
        </button>
        </div>
      </div>
    );
  }
}
