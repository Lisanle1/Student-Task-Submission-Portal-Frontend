import { CREATE_TASK, FETCH_TASKS } from '../constants/actionTypes'

const taskReducer = (tasks = [], action) => {
  switch (action.type) {
    case CREATE_TASK:
      return [...tasks, action.payload]

    case FETCH_TASKS:
      return action.payload

    default:
      return tasks
  }
}

export default taskReducer
