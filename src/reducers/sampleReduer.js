/*  
  questionReducer.js

  Reducers for the Questions Entity

*/

import { FETCH_SAMPLE_DATA } from "../actions/actionTypes";

const INITIAL_STATE = {
  sampleDataLoading: false,
  sampleData: [],
  sampleDataError: null,
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case `${FETCH_SAMPLE_DATA}_LOADING`:
      return {
        ...state,
        sampleData: [],
        sampleDataLoading: true
      };
    case `${FETCH_SAMPLE_DATA}_SUCCESS`:
      return {
        ...state,
        sampleData: action.payload.data || [],
        sampleDataLoading: false
      };

    case `${FETCH_SAMPLE_DATA}_FAILURE`:
      return {
        ...state,
        sampleData: [],
        sampleDataLoading: false,
        sampleDataError: "Something went wrong"
      };

    default:
      return state;
  }
}
