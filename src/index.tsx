/* @refresh reload */
import { render } from 'solid-js/web'

import './index.css'
import App from './App'
import {Route, Router, Routes} from "@solidjs/router";

const root = document.getElementById('root')

render(() => (
    <Router>
        <Routes>
            <Route path="/" component={App} />
        </Routes>
    </Router>
), root!)
