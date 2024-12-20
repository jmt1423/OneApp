import React from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import App from './app'
import { HashRouter } from 'react-router'

const container = document.getElementById('root')

const root = createRoot(container!)

root.render(
  <React.StrictMode>
    <HashRouter>
      <main className='dark text-foreground bg-background h-full min-h-screen'>
        <App />
      </main>
    </HashRouter>
  </React.StrictMode>
)

