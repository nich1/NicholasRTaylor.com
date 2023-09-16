import Image from 'next/image'
import Navbar from './Navbar'
import MiddleHome from './MiddleHome'
import About from './About'
import Stack from './Stack'

export default function Home() {
  return (
    <main>
      <MiddleHome/>
      <Stack/>
      <About/>
    </main>
  )
}
