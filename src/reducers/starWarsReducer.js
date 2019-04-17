import {FETCH_SUCCESS, FETCH_FAILURE, FETCH_INPROCESS} from  "../actions";
const initialState = {
  characters: [],
  inProgress: false,
  error: ''
 };

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case FETCH_INPROCESS:
      return{
        ...state,
        error: '',
        inProgress: true
      };
      case FETCH_SUCCESS:
        return{
          ...state,
          characters: action.payload,
          inProgress: false
        };
      case FETCH_FAILURE:
        return{
          ...state,
          error: action.payload,
          inProgress: false
        };
    default:
      return state;
  }
};


