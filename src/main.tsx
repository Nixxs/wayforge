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

// Each prerendered page records its path in data-prerendered. The host falls back to the
// homepage HTML for unknown paths (e.g. the 404 page), so only hydrate when the path matches;
// otherwise render fresh over it.
const pathname = window.location.pathname.endsWith('/') ? window.location.pathname : `${window.location.pathname}/`

if (container.dataset.prerendered === pathname) {
  hydrateRoot(container, app)
} else {
  createRoot(container).render(app)
}
