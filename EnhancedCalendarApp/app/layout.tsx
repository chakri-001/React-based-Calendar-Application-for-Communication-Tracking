import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Communication Tracker',
  description: 'Track and manage company communications efficiently',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full bg-gray-50">
      <body className={`${inter.className} h-full`}>
        <div className="min-h-full flex flex-col">
          <Header />
          <main className="flex-grow">
            <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
              {children}
            </div>
          </main>
          <footer className="bg-white shadow mt-auto">
            <div className="mx-auto max-w-7xl py-4 px-4 sm:px-6 lg:px-8">
              <p className="text-center text-sm text-gray-500">© 2023 Communication Tracker. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}

