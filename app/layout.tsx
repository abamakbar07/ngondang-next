import type { Metadata } from 'next'
import { UserProvider } from '@auth0/nextjs-auth0/client';

import NavLinks from "./ui/nav-links";

import './globals.css';
 
export const metadata: Metadata = {
  title: 'Ngondang Next',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
        <UserProvider>
          <body className="bg-gray-50 text-gray-900">
            <NavLinks />
            <main className="flex flex-col min-h-screen">{children}</main>
          </body>
        </UserProvider>
      </html>
  )
}