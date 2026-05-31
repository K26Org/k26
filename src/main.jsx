import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import "@fontsource/poppins";

import { SiteProvider }
from './context/SiteContext.jsx'

import { HelmetProvider }
from "react-helmet-async";

ReactDOM.createRoot(
    document.getElementById('root')
).render(
    <React.StrictMode>

        <SiteProvider>

            <HelmetProvider>

            <App />

        </HelmetProvider>

        </SiteProvider>

    </React.StrictMode>
)
