import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import Topbar from '@/components/Topbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Project Kaki',
  description: 'Platform to find your project partners',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className='min-h-screen bg-body relative flex flex-col'>
        <Providers>
          <Topbar />
          <div className='p-5 flex-1'>
            {children}
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
