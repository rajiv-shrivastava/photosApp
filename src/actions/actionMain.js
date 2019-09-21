/*  
  actionMain.js

  Collection of all sample actions in the app

*/

import axios from "./axios";
import { FETCH_SAMPLE_DATA,SIMPLE_POST_ACTION } from "./actionTypes";

export function fetchData() {
  return {
    type: FETCH_SAMPLE_DATA,
    payload: axios.get("users")
  };
}

export function simlePostCall(data) {

  return {
    type: SIMPLE_POST_ACTION,
    payload: axios.post("/posts",data)
  };
}


// export function simlePutCall(response) {
// let data = {someparam1: "param1value",someparam2: "someparam2value"}
//   return {
//     type: SIMPLE_POST_ACTION,
//     payload: axios.put("users",data)
//   };
// }


// export function simleReducAction(response) {
//   return {
//     type: SIMPLE_REDUX_aCTION,
//     payload: response
//   };
// }