import type { Metadata } from 'next'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import { Inter } from 'next/font/google'
import { StoreProvider } from '@/store/StoreProvider'
import { lightTheme } from '@/utils/theme'
import { ThemeProvider } from '@mui/material/styles'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Finger Paint',
  description: 'Draw what you see!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <StoreProvider>
      <html lang='en'>
        <body className={inter.className}>
          <AppRouterCacheProvider>
            <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>
          </AppRouterCacheProvider>
        </body>
      </html>
    </StoreProvider>
  )
}
