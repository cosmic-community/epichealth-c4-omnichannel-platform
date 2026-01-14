import type { Metadata } from 'next'
import './globals.css'
import CosmicBadge from '@/components/CosmicBadge'

export const metadata: Metadata = {
  title: 'EpicHealth - C4 Omnichannel Platform',
  description: 'Healthcare omnichannel platform dashboard for managing patient metrics, marketing campaigns, and AI-assisted workflows.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const bucketSlug = process.env.COSMIC_BUCKET_SLUG as string
  
  return (
    <html lang="en">
      <head>
        <script src="/dashboard-console-capture.js" />
      </head>
      <body className="bg-gray-50 min-h-screen">
        {children}
        <CosmicBadge bucketSlug={bucketSlug} />
      </body>
    </html>
  )
}