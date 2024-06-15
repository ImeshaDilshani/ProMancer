import { GET_PROJECT_REQUEST , GET_PROJECT_SUCCESS, GET_PROJECT_FAIL} from '../constants/projectConstants'

export const projectListReducer = (state = { projects: [] }, action) => {
  switch (action.type) {
    case GET_PROJECT_REQUEST:
        return { loading: true, success:false, projects: [] }
    case GET_PROJECT_SUCCESS:
        return { loading: false, success:true, projects: action.payload }
    case GET_PROJECT_FAIL:
        return { loading: false, success:false, error: action.payload }       
    default:
      return state
  }
}