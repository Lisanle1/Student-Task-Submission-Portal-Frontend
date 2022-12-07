import * as api from '../../api'
import {
  CREATE_WEBCODE,
  CREATE_WEBCODE_SUBMISSIONS,
  DELETE_WEBCODE,
  FETCH_WEBCODE,
  FETCH_WEBCODE_SUBMISSIONS,
  UPDATE_WEBCODE,
} from '../constants/actionTypes'

export const getWebcode = () => async (dispatch) => {
  try {
    const { data } = await api.getWebcodes()

    dispatch({ type: FETCH_WEBCODE, payload: data })
  } catch (error) {
    console.log(error)
  }
}

export const createWebcode = (webcodeData) => async (dispatch) => {
  try {
    const { data } = await api.createWebcode(webcodeData)

    dispatch({ type: CREATE_WEBCODE, payload: data })
  } catch (error) {
    console.log(error)
  }
}

export const updateWebcode = (id, webcodeData) => async (dispatch) => {
  try {
    const { data } = await api.updateWebcode(id, webcodeData)
    dispatch({ type: UPDATE_WEBCODE, payload: data })
  } catch (error) {
    console.log(error)
  }
}

export const deleteWebcode = (id) => async (dispatch) => {
  try {
    await api.deleteWebcode(id)

    dispatch({ type: DELETE_WEBCODE, payload: id })
  } catch (error) {
    console.log(error)
  }
}

export const getWebcodeSubmissions = () => async (dispatch) => {
  try {
    const { data } = await api.getWebcodeSubmissions()

    dispatch({ type: FETCH_WEBCODE_SUBMISSIONS, payload: data })
  } catch (error) {
    console.log(error)
  }
}

export const createWebcodeSubmissions = (submissionData) => async (
  dispatch,
) => {
  try {
    const { data } = await api.createWebcodeSubmissions(submissionData)

    dispatch({ type: CREATE_WEBCODE_SUBMISSIONS, payload: data })
  } catch (error) {
    console.log(error)
  }
}
