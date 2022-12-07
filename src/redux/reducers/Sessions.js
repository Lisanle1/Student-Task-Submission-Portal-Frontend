import {
  CREATE_SESSION,
  DELETE_SESSION,
  FETCH_SESSIONS,
  UPDATE_SESSION,
} from '../constants/actionTypes'

const sessionReducer = (sessions = [], action) => {
  switch (action.type) {
    case FETCH_SESSIONS:
      return action.payload

    case CREATE_SESSION:
      return [...sessions, action.payload]

    case UPDATE_SESSION:
      return [
        sessions.map((session) =>
          session._id === action.payload._id ? action.payload : session,
        ),
        action.payload,
      ]
    case DELETE_SESSION:
      return sessions.filter((session) => session.id !== action.payload.id)

    default:
      return sessions
  }
}

export default sessionReducer
