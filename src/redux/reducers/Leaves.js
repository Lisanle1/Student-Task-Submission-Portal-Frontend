import { CREATE_LEAVES, FETCH_LEAVES } from '../constants/actionTypes'

export const leaveReducer = (leaves = [], action) => {
  switch (action.type) {
    case FETCH_LEAVES:
      return action.payload
    case CREATE_LEAVES:
      return [...leaves, action.payload]

    default:
      return leaves
  }
}

export default leaveReducer
