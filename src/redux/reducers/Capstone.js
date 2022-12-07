import {
  CREATE_CAPSTONE,
  DELETE_CAPSTONE,
  FETCH_CAPSTONE,
  UPDATE_CAPSTONE,
} from '../constants/actionTypes'

export const capstoneReducer = (capstone = [], action) => {
  switch (action.type) {
    case FETCH_CAPSTONE:
      return action.payload
    case CREATE_CAPSTONE:
      return [...capstone, action.payload]
    case UPDATE_CAPSTONE:
      return [
        capstone.map((cap) =>
          cap._id === action.payload._id ? action.payload : cap,
        ),
        action.payload,
      ]
    case DELETE_CAPSTONE:
      return capstone.filter((cap) => cap.id !== action.payload.id)

    default:
      return capstone
  }
}

export default capstoneReducer
