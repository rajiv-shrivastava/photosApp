/*  
  questionReducer.js

  Reducers for the Questions Entity

*/

import { FETCH_PHOTOS } from "../actions/actionTypes";

const INITIAL_STATE = {
  photosLoading: false,
  photos: [],
  photosError: null,
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case `${FETCH_PHOTOS}_LOADING`:
      return {
        ...state,
        photos: [],
        photosLoading: true
      };
    case `${FETCH_PHOTOS}_SUCCESS`:
      return {
        ...state,
        photos: action.payload.data || [],
        photosLoading: false
      };

    case `${FETCH_PHOTOS}_FAILURE`:
      return {
        ...state,
        photos: [],
        photosLoading: false,
        photosError: "Something went wrong"
      };

    default:
      return state;
  }
}
