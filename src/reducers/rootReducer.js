import combineReducers from 'react-combine-reducers'
import { photoReducer } from './photoReducer'
const photoInitState = {
  get: {
    data: null,
    fail: null,
  },
}

const [rootReducer, initialStateCombined] = combineReducers({
  photo: [photoReducer, photoInitState],
})

export { rootReducer, initialStateCombined }
