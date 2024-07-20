import { GET_PROJECT_REQUEST , GET_PROJECT_SUCCESS, GET_PROJECT_FAIL} from '../constants/projectConstants'
import { ADD_PROJECT_REQUEST , ADD_PROJECT_SUCCESS, ADD_PROJECT_FAIL, ADD_PROJECT_RESET} from '../constants/projectConstants'
import { DETAIL_PROJECT_REQUEST , DETAIL_PROJECT_SUCCESS, DETAIL_PROJECT_FAIL} from '../constants/projectConstants'


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

export const addprojectReducer = (state = { }, action) => {
  switch (action.type) {
    case ADD_PROJECT_REQUEST:
        return { loading: true, success:false}
    case ADD_PROJECT_SUCCESS:
        return { loading: false, success:true, ...state, projects: action.payload }
    case ADD_PROJECT_FAIL:
        return { loading: false, success:false, error: action.payload }
    case ADD_PROJECT_RESET:
          return { }
    default:
      return state
  }
}

export const detailprojectReducer = (state = {project:{} }, action) => {
  switch (action.type) {
    case DETAIL_PROJECT_REQUEST:
        return { loading: true, ...this.state}
    case DETAIL_PROJECT_SUCCESS:
        return { loading: false, success:true, projects: action.payload }
    case DETAIL_PROJECT_FAIL:
        return { loading: false,  error: action.payload }
    default:
      return state
  }
}