// resolveProductionUrl.ts
import type {SanityDocument, Slug} from 'sanity'

const previewSecret = process.env.DRAFT_SECRET
const remoteUrl = process.env.FRONTEND_URL
const localUrl = `http://localhost:3000`

function getSlug(slug: Slug) {
  if (!slug) {
    return '/'
  }
  if (slug.current) {
    return slug.current
  }
  return '/'
}

export default function resolveProductionUrl(doc: SanityDocument) {
  const baseUrl = window.location.hostname === 'localhost' ? localUrl : remoteUrl
  const previewUrl = new URL(baseUrl)
  const {slug} = doc
  previewUrl.pathname = `/api/draft`
  previewUrl.searchParams.append(`secret`, previewSecret)
  previewUrl.searchParams.append(`slug`, getSlug(slug as unknown as Slug))
  return previewUrl.toString().replaceAll('%2F', '/')
}
