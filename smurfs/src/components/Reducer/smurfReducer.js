import {ActionTypes} from '../Actions';

const initialState = {
  smurfs: [],
  isFetching: false,
  isPosting: false,
  error: "",
};

export default function smurfReducer(state=initialState, action){
  switch(action.type){
    case ActionTypes.FETCH_DATA:
      return {
        ...state,
        isFetching: true
      };

    case ActionTypes.FETCH_SUCCESS:
      return {
        error: null,
        facts: action.payload,
        isFetching: false
      };

    case ActionTypes.FETCH_FAIL:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };

      case ActionTypes.POST_DATA:
        return {
          ...state,
          isPosting: true,
          smurfs: [...state.smurfs]
        }
          
        case ActionTypes.POST_SUCCESS:
          return {
          ...state,
          isPosting: false,
          smurfs: action.payload,
        }

        case ActionTypes.POST_FAIL:
          return {
            ...state,
            isPosting: false,
            error: action.payload,
        }

    default:
      return state;
  }
}