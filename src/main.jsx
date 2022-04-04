import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Layout from './components/Layout'

import { Provider } from 'react-redux'
import store from './redux/store'

import './sass/index.scss'
import './assets/boxicons-2.0.7/css/boxicons.min.css'

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <Layout />
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
)
