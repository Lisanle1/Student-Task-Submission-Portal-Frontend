import * as api from '../../api'
import {
  FETCH_SESSIONS,
  CREATE_SESSION,
  ADD_RECORDING,
  UPDATE_SESSION,
  DELETE_SESSION,
} from '../constants/actionTypes'

//Action Creators
export const getSessions = () => async (dispatch) => {
  try {
    const { data } = await api.fetchSessions()
    dispatch({ type: FETCH_SESSIONS, payload: data })
  } catch (error) {
    console.log(error)
  }
}

export const createSession = (sessionData) => async (dispatch) => {
  try {
    const { data } = await api.createSession(sessionData)
    dispatch({ type: CREATE_SESSION, payload: data })
  } catch (error) {
    console.log(error)
  }
}

export const updateSession = (id, sessionData) => async (dispatch) => {
  try {
    const { data } = await api.updateSession(id, sessionData)
    dispatch({ type: UPDATE_SESSION, payload: data })
  } catch (error) {
    console.log(error)
  }
}

export const deleteSession = (id) => async (dispatch) => {
  try {
    await api.deleteSession(id)

    dispatch({ type: DELETE_SESSION, payload: id })
  } catch (error) {
    console.log(error)
  }
}
