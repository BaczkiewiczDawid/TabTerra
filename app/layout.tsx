"use client";

import {Inter} from 'next/font/google'
import './globals.css'
import {ThemeProvider} from "@/components/theme-provider"
import {Navigation} from "@/components/ui/Navigation";

const inter = Inter({subsets: ['latin']})

export default function RootLayout({children}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body className={inter.className}>
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className={"flex flex-row"}>
        <Navigation/>
        <div className={"p-6"}>
          {children}
        </div>
      </div>

    </ThemeProvider>
    </body>
    </html>
  )
}
