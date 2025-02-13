import './global.css'
import type { Metadata } from 'next'
import { Navbar } from './components/nav'
import { baseUrl } from './sitemap'


export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Avery Reyna',
    template: '%s',
  },
  description: 'Avery Reyna\'s personal website',
  openGraph: {
    title: 'Avery Reyna',
    url: baseUrl,
    siteName: 'Avery Reyna',
    locale: 'en_US',
    type: 'website'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    },
  },
  icons: {
    icon: '/favicon.png',
  },
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-black'
      )}
    >
      <body className="antialiased max-w-4xl mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  )
}
