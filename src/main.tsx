import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import AppProviders from './AppProviders.tsx'

const container = document.getElementById('root')!

const app = (
  <StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </StrictMode>
)

// index.html holds the prerendered homepage. The host serves that same file for every path,
// so only hydrate on "/"; anywhere else (e.g. the 404 page) render fresh over it.
if (window.location.pathname === '/' && container.hasChildNodes()) {
  hydrateRoot(container, app)
} else {
  createRoot(container).render(app)
}
