import type { Metadata } from 'next'
import { Auth0Provider } from '@auth0/auth0-react';
import { NavLinks } from './ui/nav-links'
 
export const metadata: Metadata = {
  title: 'Ngondang Next',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Auth0Provider
      domain="dev-3zaiyeq4pdv4k48w.us.auth0.com"
      clientId="i1JvsIxPaxbpux5OEpj1WTpFLIdQ8vh4"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <html lang="en">
        <body className="bg-gray-50 text-gray-900">
          <NavLinks />
          <main className="flex flex-col min-h-screen">{children}</main>
        </body>
      </html>
    </Auth0Provider>
  )
}