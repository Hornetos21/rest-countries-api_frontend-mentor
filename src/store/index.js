import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootReducer } from './rootReducer.js'
import thunk from 'redux-thunk'
import axios from 'axios'

import * as api from '../config.js'

export const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument({ client: axios, api }))
  )
)
