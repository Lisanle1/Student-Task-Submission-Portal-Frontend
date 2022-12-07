import * as api from '../../api'
import { CREATE_LEAVES, FETCH_LEAVES } from '../constants/actionTypes'

export const getLeaves = () => async (dispatch) => {
  try {
    const { data } = await api.getLeaves()
    dispatch({ type: FETCH_LEAVES, payload: data })
  } catch (error) {
    console.log(error)
  }
}

export const createLeaves = (leaveData) => async (dispatch) => {
  try {
    const { data } = await api.createLeaves(leaveData)
    dispatch({ type: CREATE_LEAVES, payload: data })
  } catch (error) {
    console.log(error)
  }
}
