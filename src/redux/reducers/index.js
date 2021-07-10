import { combineReducers } from 'redux'
import { movie_reducer} from './reducers'
export const reducers = combineReducers({
    allPayloads: movie_reducer
})