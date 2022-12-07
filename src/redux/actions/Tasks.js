import * as api from '../../api'
import { CREATE_TASK, FETCH_TASKS } from '../constants/actionTypes'

export const createTask = (taskData) => async (dispatch) => {
  try {
    const { data } = await api.createTask(taskData)

    dispatch({ type: CREATE_TASK, payload: data })
  } catch (error) {
    console.log(error)
  }
}

export const getTasks = () => async (dispatch) => {
  try {
    const { data } = await api.getTasks()

    dispatch({ type: FETCH_TASKS, payload: data })
  } catch (error) {
    console.log(error)
  }
}
