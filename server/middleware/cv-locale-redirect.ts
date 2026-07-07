export default defineEventHandler((event) => {
  const { pathname, search } = getRequestURL(event)
  const match = pathname.match(/^\/(?:en|id)\/cv\/(.+)$/)

  if (!match) {
    return
  }

  return sendRedirect(event, `/cv/${match[1]}${search}`, 302)
})
