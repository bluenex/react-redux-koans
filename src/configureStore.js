import { createStore } from 'redux'
// import { createStore } from './redux/createStore'
import reducers from './reducers'

const configureStore = () => {
  return createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
}

export default configureStore
