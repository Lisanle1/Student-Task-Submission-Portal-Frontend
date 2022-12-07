import {
  CREATE_WEBCODE,
  CREATE_WEBCODE_SUBMISSIONS,
  DELETE_WEBCODE,
  FETCH_WEBCODE,
  UPDATE_WEBCODE,
} from '../constants/actionTypes'

export const WebcodeReducer = (webcodes = [], action) => {
  switch (action.type) {
    case FETCH_WEBCODE:
      return action.payload
    case CREATE_WEBCODE:
      return [...webcodes, action.payload]
    case UPDATE_WEBCODE:
      return [
        webcodes.map((webcode) =>
        webcode._id === action.payload._id ? action.payload : webcode,
        ),
        action.payload,
      ]
    case DELETE_WEBCODE:
      return webcodes.filter(
        (webcode) => webcode.id !== action.payload.id,
      )

    default:
      return webcodes
  }
}

export default WebcodeReducer
