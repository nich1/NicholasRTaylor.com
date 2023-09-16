import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './Navbar'
import Footer from './Footer'
import { Press_Start_2P } from 'next/font/google'
import {Cinzel} from 'next/font/google'
import {Roboto} from 'next/font/google'
import {Oxygen} from 'next/font/google'
import { Finger_Paint } from 'next/font/google'
const finger_paint = Finger_Paint({subsets:['latin'], weight:['400']})
const press_start_2p = Press_Start_2P({
  subsets: ['latin'],
  weight: ['400']
})

const oxygen = Oxygen({
  subsets: ['latin'],
  weight: ['400']
})

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nick Taylor, Web Developer',
  description: 'Technology, fitness, lifestyle',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className={finger_paint.className}>
        <div className='bg-gradient-to-t from-cyan-950 to-slate-950'>
          <Navbar/>
          {children}
          <Footer/>
        </div>
        
      </body>
    </html>
  )
}
