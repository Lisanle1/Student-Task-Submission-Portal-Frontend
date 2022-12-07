import {
  CREATE_ADDITIONAL_SESSION,
  DELETE_ADDITIONAL_SESSION,
  FETCH_ADDITIONAL_SESSION,
  UPDATE_ADDITIONAL_SESSION,
} from '../constants/actionTypes'

export const additionalSessionReducer = (additionalSessions = [], action) => {
  switch (action.type) {
    case FETCH_ADDITIONAL_SESSION:
      return action.payload

    case CREATE_ADDITIONAL_SESSION:
      return [...additionalSessions, action.payload]

    case UPDATE_ADDITIONAL_SESSION:
      return [
        additionalSessions.map((session) =>
          session._id === action.payload.id ? action.payload.id : session,
        ),
        action.payload,
      ]

    case DELETE_ADDITIONAL_SESSION:
      return additionalSessions.filter(
        (session) => session.id !== action.payload.id,
      )

    default:
      return additionalSessions
  }
}
export default additionalSessionReducer
