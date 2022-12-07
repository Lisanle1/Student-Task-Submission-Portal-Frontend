import {
  CREATE_CAPSTONE_SUBMISSION,
  FETCH_CAPSTONE_SUBMISSION,
} from '../constants/actionTypes'

export const capstoneSubmissionReducer = (capstoneSubmission = [], action) => {
  switch (action.type) {
    case FETCH_CAPSTONE_SUBMISSION:
      return action.payload
    case CREATE_CAPSTONE_SUBMISSION:
      return [...capstoneSubmission, action.payload]

    default:
      return capstoneSubmission
  }
}

export default capstoneSubmissionReducer
