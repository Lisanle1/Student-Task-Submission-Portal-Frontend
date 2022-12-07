import axios from 'axios'

const API = axios.create({
  baseURL: "http://localhost:3001",
})

export const signIn = (values) => API.post(`/user/login`, values)
export const signUp = (values) => API.post(`/user/signup`, values)
export const forgotPassword = (values) => API.post(`/user/forgot-password`, values)
export const resetPassword = (values) => API.put(`/user/reset-password/:id`, values)
export const fetchSessions = () => API.get(`/sessions`)
export const createSession = (sessionData) => API.post(`/sessions`, sessionData)
export const updateSession = (id, sessionData) =>
  API.patch(`/sessions/${id}`, sessionData)
export const deleteSession = (id) => API.delete(`/sessions/${id}`)

export const fetchAdditionalSessions = () => API.get('/additionalSessions')
export const createAdditionalSession = (additionalData) =>
  API.post(`/additionalSessions`, additionalData)
export const updateAdditionalSession = (id, additionalData) =>
  API.patch(`/additionalSessions/${id}`, additionalData)
export const deleteAdditionalSession = (id) =>
  API.delete(`/additionalSessions/${id}`)

export const createTask = (taskData) => API.post(`/tasks`, taskData)
export const getTasks = () => API.get(`/tasks`)

export const getQueries = () => API.get(`/queries`)
export const createQuery = (queryData) => API.post(`/queries`, queryData)
export const updateQuery = (id, queryData) =>
  API.patch(`/queries/${id}`, queryData)
export const deleteQuery = (id) => API.delete(`/queries/${id}`)

export const getWebcodes = () => API.get(`/webcodes`)
export const createWebcode = (webcodeData) =>
  API.post(`/webcodes`, webcodeData)
export const updateWebcode = (id, webcodeData) =>
  API.patch(`/webcodes/${id}`, webcodeData)
export const deleteWebcode = (id) => API.delete(`/webcodes/${id}`)

export const getWebcodeSubmissions = () => API.get(`/webcodes/submissions`)
export const createWebcodeSubmissions = (submissionData) =>
  API.post(`/webcodes/submissions`, submissionData)

export const getCapstone = () => API.get(`/capstone`)
export const createCapstone = (capstoneData) =>
  API.post(`/capstone`, capstoneData)
export const updateCapstone = (id, capstoneData) =>
  API.patch(`/capstone/${id}`, capstoneData)
export const deleteCapstone = (id) => API.delete(`/capstone/${id}`)

export const getCapstoneSubmission = () => API.get(`/capstone/submissions`)
export const createCapstoneSubmission = (submissionData) =>
  API.post(`/capstone/submissions`, submissionData)

export const getLeaves = () => API.get(`/leaves`)
export const createLeaves = (leaveData) => API.post(`/leaves`, leaveData)
