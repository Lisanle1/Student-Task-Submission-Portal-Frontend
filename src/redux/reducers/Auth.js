import { useNavigate } from 'react-router-dom'
import { AUTH, LOGOUT } from '../constants/actionTypes'

const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case AUTH:
      window.localStorage.setItem(
        'token',
        JSON.stringify({ ...action?.data }),
      )

      return { ...state, authData: action?.data }

    case LOGOUT:
      window.localStorage.clear()
      return { ...state, authData: null }

    default:
      return state
  }
}

export default authReducer
