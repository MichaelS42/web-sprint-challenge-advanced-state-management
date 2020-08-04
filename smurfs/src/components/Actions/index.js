import axios from "axios";
export const FETCH_DATA = "FETCH_DATA";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";
export const fetchAll = () => (dispatch) => {
  dispatch({ type: FETCH_DATA})
    axios
        .get("http://localhost:7431/smurfs")
        .then(res => {
            console.log("Fetch success", res.data);
            dispatch({type: FETCH_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log("Error:", err);
            dispatch({type: FETCH_FAIL, payload: err})
        })
}
export const POST_DATA = "POST_DATA";
export const POST_SUCCESS = "POST_SUCCESS";
export const POST_FAIL = "POST_FAIL";
export const postSmurfs = (smurfs) => (dispatch) => {
    dispatch({ type: POST_DATA})
      axios
          .post("http://localhost:7431/smurfs", smurfs)
          .then(res => {
              console.log("Post success", res.data);
              dispatch({type: POST_SUCCESS, payload: res.data})
          })
          .catch(err => {
              console.log("Error:", err);
              dispatch({type: POST_FAIL, payload: err.response})
          })
  }

















// import axios from "axios";

// export const ActionTypes = {
//     FETCH_DATA : 'FETCH_DATA',
//     FETCH_SUCCESS : 'FETCH_SUCCESS',
//     FETCH_FAIL : 'FETCH_FAIL',
//     POST_DATA : 'POST_DATA',
//     POST_SUCCESS : 'POST_SUCCESS',
//     POST_FAIL : 'POST_FAIL'
// };

// export const fetchAll = () => (dispatch) => {
//     dispatch({ type: ActionTypes.FETCH_DATA});
//     axios
//         .get("http://localhost:7431/smurfs")
//         .then(res => {
//             console.log("fetch success", res.data);
//             dispatch({
//                 type: ActionTypes.FETCH_SUCCESS,
//                 payload: res.data.all
//             })
//         })
//         .catch(err => {
//             console.error("fetch failed", err.message);
//             dispatch({ 
//                 type: ActionTypes.FETCH_FAIL, 
//                 payload: err.message 
//             });
//         })
// }

// export const postSmurfs = (smurfs) => (dispatch) => {
//     dispatch({type: ActionTypes.POST_DATA})
//     axios
//     .post("http://localhost:7431/smurfs")
//     .then ( res => {
//         console.log("post succes", res.data);
//         dispatch({type: ActionTypes.POST_SUCCESS, payload: res.data})
//     })
//     .catch( err => {
//         console.log("err Mesg", err);
//         dispatch({type: ActionTypes.POST_FAIL, payload: err})
//     })
// }