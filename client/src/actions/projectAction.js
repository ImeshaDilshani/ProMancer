//get all project data from api
import axios from 'axios';

export const getListProjects = () => async (dispatch) => {
    try {
        dispatch({ type: 'GET_PROJECT_REQUEST' });

        const { data } = await axios.get('http://127.0.0.1:8000/api/');

        dispatch({
            type: 'GET_PROJECT_SUCCESS',
            payload: data
        });
    } catch (error) {
        dispatch({
            type: 'GET_PROJECT_FAIL',
            payload: error.response && error.response.data.message
        });
    }
}