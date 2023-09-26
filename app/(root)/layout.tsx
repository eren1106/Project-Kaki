import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import Topbar from '@/components/Topbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ProjectKaki',
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
          <div className='flex-1 flex flex-col items-center'>
            <div className='container p-6'>
              {children}
            </div>
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
