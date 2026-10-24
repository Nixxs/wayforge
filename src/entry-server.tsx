/* eslint-disable react-refresh/only-export-components -- build-time entry, never hot-reloaded */
import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { createStaticHandler, createStaticRouter, StaticRouterProvider } from 'react-router'
import AppProviders from './AppProviders'
import { routes } from './routes'

export { prerenderPages, SITE_URL } from './pageMeta'

// Build-time only: renders a route to HTML for scripts/prerender.mjs, which also takes the
// list of pages (with their <head> values) from prerenderPages.
// Emotion inlines its <style> tags into the output; on load the client cache moves them into <head>.
export async function render(url: string) {
  const { query, dataRoutes } = createStaticHandler(routes)
  const context = await query(new Request(new URL(url, 'https://wayforge.com.au')))

  if (context instanceof Response) {
    throw new Error(`Unexpected redirect/response while prerendering ${url}`)
  }

  const router = createStaticRouter(dataRoutes, context)

  return renderToString(
    <StrictMode>
      <AppProviders>
        <StaticRouterProvider router={router} context={context} hydrate={false} />
      </AppProviders>
    </StrictMode>,
  )
}
