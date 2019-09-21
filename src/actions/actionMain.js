/*  
  actionMain.js

  Collection of all async actions in the app

*/

import axios from "./axios";
import { FETCH_PHOTOS,COMPARE_PHOTO,REMOVE_PHOTO } from "./actionTypes";
import { bindActionCreators } from "redux";

export function fetchPhotos() {
  return {
    type: FETCH_PHOTOS,
    payload: axios.get("photos")
  };
}



export function comparePhoto(photo) {
  return {
    type: COMPARE_PHOTO,
    payload: photo
  };
}


export function removePhoto(id) {
  console.log(id)
  return {
    type: REMOVE_PHOTO,
    payload: id
  };
}