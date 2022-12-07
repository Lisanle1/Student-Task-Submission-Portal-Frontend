import * as api from '../../api'
import {
  CREATE_CAPSTONE,
  CREATE_CAPSTONE_SUBMISSION,
  DELETE_CAPSTONE,
  FETCH_CAPSTONE,
  FETCH_CAPSTONE_SUBMISSION,
  UPDATE_CAPSTONE,
} from '../constants/actionTypes'

export const getCapstone = () => async (dispatch) => {
  try {
    const { data } = await api.getCapstone()

    dispatch({ type: FETCH_CAPSTONE, payload: data })
  } catch (error) {
    console.log(error)
  }
}

export const createCapstone = (capstoneData) => async (dispatch) => {
  try {
    const { data } = await api.createCapstone(capstoneData)

    dispatch({ type: CREATE_CAPSTONE, payload: data })
  } catch (error) {
    console.log(error)
  }
}

export const updateCapstone = (id, capstoneData) => async (dispatch) => {
  try {
    const { data } = await api.updateCapstone(id, capstoneData)
    dispatch({ type: UPDATE_CAPSTONE, payload: data })
  } catch (error) {
    console.log(error)
  }
}

export const deleteCapstone = (id) => async (dispatch) => {
  try {
    await api.deleteCapstone(id)

    dispatch({ type: DELETE_CAPSTONE, payload: id })
  } catch (error) {
    console.log(error)
  }
}

export const getCapstoneSubmission = () => async (dispatch) => {
  try {
    const { data } = await api.getCapstoneSubmission()

    dispatch({ type: FETCH_CAPSTONE_SUBMISSION, payload: data })
  } catch (error) {
    console.log(error)
  }
}

export const createCapstoneSubmission = (submissionData) => async (
  dispatch,
) => {
  try {
    const { data } = await api.createCapstoneSubmission(submissionData)

    dispatch({ type: CREATE_CAPSTONE_SUBMISSION, payload: data })
  } catch (error) {
    console.log(error)
  }
}
