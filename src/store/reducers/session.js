import {GET_USER} from '../actions/user'
import {
  initUser, SING_IN_ERROR, SING_IN_SUCCESS, SING_OUT_ERROR, SING_OUT_SUCCESS,
  SING_UP_ERROR
} from '../actions/auth'

const user = initUser()
const INIT_STATE = {signedIn: !!user, user, error: null}

export default function sessionWorkflow(state=INIT_STATE, action) {
  switch (action.type) {
    case GET_USER:
      return {...state, userDetails: action.payload}
    case SING_IN_SUCCESS:
      return {...state, signedIn: true, user: action.payload, error: null}
    case SING_IN_ERROR:
    case SING_UP_ERROR:
      return {signedIn: false, user: null, userDetails: null, error: action.payload}
    case SING_OUT_SUCCESS:
      return {signedIn: false, user: null, userDetails: null, error: null}
    case SING_OUT_ERROR:
      return {...state, error: action.payload}
    default:
      return state
  }
}