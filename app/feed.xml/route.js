import { getPosts } from '../posts/get-posts.js'

const CONFIG = {
  title: 'Gabriel Evan',
  siteUrl: 'https://thatevan.dpdns.org',
  description: 'Latest blog posts',
  lang: 'en-us'
}

function escapeXml(str = '') {
  return str
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
}

export async function GET() {
  const allPosts = await getPosts()
  const posts = allPosts
    .map((post) => {
      const categories = (post.frontMatter.tags || [])
        .map((tag) => `        <category>${escapeXml(tag)}</category>`)
        .join('\n')
      return `    <item>
        <title>${escapeXml(post.title)}</title>
        <description>${escapeXml(post.frontMatter.description)}</description>
        <link>${CONFIG.siteUrl}${post.route}</link>
        <pubDate>${new Date(post.frontMatter.date).toUTCString()}</pubDate>
        <author>${escapeXml(post.frontMatter.author || '')}</author>
${categories}
    </item>`
    })
    .join('\n')
  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>${CONFIG.title}</title>
    <link>${CONFIG.siteUrl}</link>
    <description>${CONFIG.description}</description>
    <language>${CONFIG.lang}</language>
${posts}
  </channel>
</rss>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml'
    }
  })
}
