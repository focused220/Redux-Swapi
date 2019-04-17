import axios from 'axios';

export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const FETCH_INPROCESS = 'FETCH_INPROCESS';

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator

export const getPeople = () => dispatch => {
    dispatch({ type: FETCH_INPROCESS});
    axios.get("https://swapi.co/api/people/")
    .then(res => dispatch({type: FETCH_SUCCESS, payload: res.data.results}))
    .catch(err => dispatch({type: FETCH_FAILURE, payload: err}))
}