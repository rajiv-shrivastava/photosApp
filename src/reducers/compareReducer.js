/*  
  questionReducer.js

  Reducers for the Questions Entity

*/

import { COMPARE_PHOTO,REMOVE_PHOTO } from "../actions/actionTypes";

const INITIAL_STATE = {
  comparePhotos: []
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case COMPARE_PHOTO:
        let isPresent = state.comparePhotos.find(photo => 
            {return photo.id == action.payload.id})
        if(!isPresent){
            return {
                ...state,
                comparePhotos: [...state.comparePhotos, action.payload]
            };
        }
    case REMOVE_PHOTO:
    let allPhotos = []

    state.comparePhotos.map(photo => {
        if(photo.id != action.payload){
            allPhotos.push(photo)
        }
        
    })
    
      return {
        ...state,
        comparePhotos: allPhotos,
      };


    default:
      return state;
  }
}
