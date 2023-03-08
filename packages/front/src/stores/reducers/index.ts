import { combineReducers } from 'redux'
import GithubReducers from './GithubReducers'
import ServicesReducers from './ServicesReducers'

const rootReducer = combineReducers({
  github: GithubReducers,
  services: ServicesReducers,
})

export default rootReducer