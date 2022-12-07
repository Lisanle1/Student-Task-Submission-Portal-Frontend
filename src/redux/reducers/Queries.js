import {
  CREATE_QUERY,
  DELETE_QUERY,
  FETCH_QUERIES,
  UPDATE_QUERY,
} from '../constants/actionTypes'

export const queryReducer = (queries = [], action) => {
  switch (action.type) {
    case FETCH_QUERIES:
      return action.payload
    case CREATE_QUERY:
      return [...queries, action.payload]
    case UPDATE_QUERY:
      return [
        queries.map((query) =>
          query._id === action.payload._id ? action.payload : query,
        ),
        action.payload,
      ]
    case DELETE_QUERY:
      return queries.filter((query) => query.id !== action.payload.id)

    default:
      return queries
  }
}

export default queryReducer
