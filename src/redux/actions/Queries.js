import * as api from '../../api'
import {
  CREATE_QUERY,
  DELETE_QUERY,
  FETCH_QUERIES,
  UPDATE_QUERY,
} from '../constants/actionTypes'

export const getQueries = () => async (dispatch) => {
  try {
    const { data } = await api.getQueries()
    dispatch({ type: FETCH_QUERIES, payload: data })
  } catch (error) {
    console.log(error)
  }
}

export const createQuery = (queryData) => async (dispatch) => {
  try {
    const { data } = await api.createQuery(queryData)
    dispatch({ type: CREATE_QUERY, payload: data })
  } catch (error) {
    console.log(error)
  }
}

export const updateQuery = (id, queryData) => async (dispatch) => {
  try {
    const { data } = await api.updateQuery(id, queryData)
    dispatch({ type: UPDATE_QUERY, payload: data })
  } catch (error) {
    console.log(error)
  }
}

export const deleteQuery = (id) => async (dispatch) => {
  try {
    await api.deleteQuery(id)

    dispatch({ type: DELETE_QUERY, payload: id })
  } catch (error) {
    console.log(error)
  }
}
