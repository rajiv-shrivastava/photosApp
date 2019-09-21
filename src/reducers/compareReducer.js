/*  
  questionReducer.js

  Reducers for the Questions Entity

*/

import { COMPARE_PHOTO,REMOVE_PHOTO } from "../actions/actionTypes";

const INITIAL_STATE = {
  comparePhotos: [],
  comparePhotosError: null,
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case COMPARE_PHOTO:
      return {
        ...state,
        comparePhotos: [],
        comparePhotosLoading: true
      };
    case REMOVE_PHOTO:
      return {
        ...state,
        comparePhotos: action.payload.data || [],
        comparePhotosLoading: false
      };


    default:
      return state;
  }
}
