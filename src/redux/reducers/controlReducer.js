import {
  UPDATE_FILTER
} from '../actionTypes';

const initialState = {
  filter: ''
};

const controlReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_FILTER:
      return {
        ...state,
        filter: payload
      };

    default:
      return state;
  }
};
  
  export default controlReducer;