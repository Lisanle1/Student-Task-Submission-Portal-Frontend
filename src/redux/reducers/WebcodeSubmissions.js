import {
  CREATE_WEBCODE_SUBMISSIONS,
  FETCH_WEBCODE_SUBMISSIONS,
} from '../constants/actionTypes'

export const webcodeSubmissionsReducer = (
  webcodeSubmissions = [],
  action,
) => {
  switch (action.type) {
    case FETCH_WEBCODE_SUBMISSIONS:
      return action.payload
    case CREATE_WEBCODE_SUBMISSIONS:
      return [...webcodeSubmissions, action.payload]

    default:
      return webcodeSubmissions
  }
}

export default webcodeSubmissionsReducer
