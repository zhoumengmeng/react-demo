import React from 'react';
import ReactDOM from 'react-dom';
import RootRouters from '../router/router.js';
import {Provider} from 'react-redux'
import { createStore } from 'redux'
import '../style/style.css'
import reducer from '../redux/redux.js'

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <RootRouters />
  </Provider>,
  document.getElementById('root')
)
