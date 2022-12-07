import { combineReducers } from 'redux'
import AdditionalSessions from './AdditionalSessions'
import Auth from './Auth'
import Sessions from './Sessions'
import Tasks from './Tasks'
import Queries from './Queries'
import Webcode from './Webcode'
import WebcodeSubmissions from './WebcodeSubmissions'
import Capstone from './Capstone'
import CapstoneSubmission from './CapstoneSubmission'
import Leaves from './Leaves'

export default combineReducers({
  Auth: Auth,
  Sessions: Sessions,
  AdditionalSessions: AdditionalSessions,
  Tasks: Tasks,
  Queries: Queries,
  Webcode: Webcode,
  WebcodeSubmissions: WebcodeSubmissions,
  Capstone: Capstone,
  CapstoneSubmission: CapstoneSubmission,
  Leaves: Leaves,
})
