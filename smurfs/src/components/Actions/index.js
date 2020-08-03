import axios from "axios";

export const ActionTypes = {
    FETCH_DATA : 'FETCH_DATA',
    FETCH_SUCCESS : 'FETCH_SUCCESS',
    FETCH_FAIL : 'FETCH_FAIL',
    POST_DATA : 'POST_DATA',
    POST_SUCCESS : 'POST_SUCCESS',
    POST_FAIL : 'POST_FAIL'
};

export const fetchAll = () => dispatch => {
    dispatch({ type: ActionTypes.FETCH_DATA});
    axios
        .get("http://localhost:7431/smurfs")

        .then(res => {
            console.log("fetch success", res.data);
            dispatch({
                type: ActionTypes.FETCH_SUCCESS,
                payload: res.data.all
            })
        })
        .catch(err => {
            console.error("fetch failed", err.message);
            dispatch({ 
                type: ActionTypes.FETCH_FAIL, 
                payload: err.message 
            });
        })
}

export const postSmurfs = (smurf) => (dispatch) => {
    dispatch({type: ActionTypes.POST_DATA})
    axios
    .post("http://localhost:7431/smurfs")
    .then ( res => {
        console.log("post succes", res.data);
        dispatch({type: ActionTypes.POST_SUCCESS, payload: res.data})
    })
    .catch( err => {
        console.log("err Mesg", err);
        dispatch({type: ActionTypes.POST_FAIL, payload: err})
    })
}