/*  
  actionMain.js

  Collection of all async actions in the app

*/

import axios from "./axios";
import { FETCH_PHOTOS } from "./actionTypes";

export function fetchPhotos() {
  return {
    type: FETCH_PHOTOS,
    payload: axios.get("photos")
  };
}
