import * as api from '../../api'
import {
  CREATE_ADDITIONAL_SESSION,
  DELETE_ADDITIONAL_SESSION,
  FETCH_ADDITIONAL_SESSION,
  UPDATE_ADDITIONAL_SESSION,
} from '../constants/actionTypes'

// Action Creators
export const getAdditionalSessions = () => async (dispatch) => {
  try {
    const { data } = await api.fetchAdditionalSessions()

    console.log(data)

    dispatch({ type: FETCH_ADDITIONAL_SESSION, payload: data })
  } catch (error) {
    console.log(error)
  }
}

export const createAdditionalSession = (additionalData) => async (dispatch) => {
  try {
    const { data } = await api.createAdditionalSession(additionalData)

    dispatch({ type: CREATE_ADDITIONAL_SESSION, payload: data })
  } catch (error) {
    console.log(error)
  }
}

export const updateAdditionalSession = (id, additionalData) => async (
  dispatch,
) => {
  try {
    const { data } = await api.updateAdditionalSession(id, additionalData)

    dispatch({ type: UPDATE_ADDITIONAL_SESSION, payload: data })
  } catch (error) {
    console.log(error)
  }
}

export const deleteAdditionalSession = (id) => async (dispatch) => {
  try {
    await api.deleteAdditionalSession(id)

    dispatch({ type: DELETE_ADDITIONAL_SESSION, payload: id })
  } catch (error) {
    console.log(error)
  }
}
