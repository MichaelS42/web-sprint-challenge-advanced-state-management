import { FETCH_DATA, FETCH_SUCCESS, FETCH_FAIL, POST_DATA, POST_SUCCESS, POST_FAIL } from "../Actions";
  const initialState ={
    smurfs: [],
    isFetching: false,
    isPosting: false,
    error: ""
}
const smurfsReducer = (state=initialState, actions) => {
    switch(actions.type){
        case FETCH_DATA:
            return{
                ...state,
                isFetching: true
            }
            case FETCH_SUCCESS:
                return{
                    ...state,
                    isFetching: false,
                    smurfs: actions.payload
                }
                case FETCH_FAIL:
                    return{
                        ...state,
                        isFetching: false,
                        error: actions.payload
                    }
                    case POST_DATA:
                        return{
                            ...state,
                            isPosting: true,
                            smurfs: [...state.smurfs]
                        }
                        case POST_SUCCESS:
                            return{
                                ...state,
                                isPosting: false,
                                smurfs:actions.payload
                            }
                            case POST_FAIL:
                                return{
                                    ...state,
                                    isPosting: false,
                                    error: actions.payload
                                }
                                    default:
                                        return state
    }
}
  export default smurfsReducer
















// import {ActionTypes} from '../Actions';

// const initialState = {
//   smurfs: [],
//   isFetching: false,
//   isPosting: false,
//   error: "",
// };

// export default function smurfReducer(state=initialState, action){
//   switch(action.type){
//     case ActionTypes.FETCH_DATA:
//       return {
//         ...state,
//         isFetching: true
//       };

//     case ActionTypes.FETCH_SUCCESS:
//       return {
//         error: null,
//         facts: action.payload,
//         isFetching: false
//       };

//     case ActionTypes.FETCH_FAIL:
//       return {
//         ...state,
//         error: action.payload,
//         isFetching: false
//       };

//       case ActionTypes.POST_DATA:
//         return {
//           ...state,
//           isPosting: true,
//           smurfs: [...state.smurfs]
//         }
          
//         case ActionTypes.POST_SUCCESS:
//           return {
//           ...state,
//           isPosting: false,
//           smurfs: action.payload,
//         }

//         case ActionTypes.POST_FAIL:
//           return {
//             ...state,
//             isPosting: false,
//             error: action.payload,
//         }

//     default:
//       return state;
//   }
// }