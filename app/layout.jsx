import { Footer, Layout, Navbar, ThemeSwitch } from 'nextra-theme-blog'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import { Analytics } from '@vercel/analytics/react'
import 'nextra-theme-blog/style.css'
import '../styles/main.css'

export const metadata = {
  metadataBase: new URL('https://thatevan.dpdns.org'),
  title: "Evan's Portfolio and Blog Site",
  description: 'Personal website where I write blogs and show my portfolio.',
  robots: 'follow, index',
  openGraph: {
    siteName: "Evan's Portfolio and Blog Site",
    title: "Evan's Portfolio and Blog Site",
    description: 'Personal website where I write blogs and show my portfolio.',
    images: ['/images/url-img.webp']
  },
  twitter: {
    card: 'summary_large_image',
    site: '@gabrielevan_21',
    title: "Evan's Portfolio and Blog Site",
    description: 'Personal website where I write blogs and show my portfolio.',
    images: ['/images/url-img.webp']
  }
}

export default async function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS"
          href="/feed.xml"
        />
        <link
          rel="preload"
          href="/fonts/Inter-roman.latin.var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <body>
        <Layout>
          <Navbar pageMap={await getPageMap()}>
            <a href="https://github.com/Evan-aja/Blog-ku">GitHub 🐙</a>
            <ThemeSwitch />
          </Navbar>

          {children}

          <Footer>
            {new Date().getFullYear()} © Gabriel Evan.
            <a href="/feed.xml" style={{ float: 'right' }}>
              RSS
            </a>
          </Footer>
        </Layout>
        <Analytics />
      </body>
    </html>
  )
}
