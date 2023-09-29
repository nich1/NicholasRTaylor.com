import Image from 'next/image'
import SocialMedia from './SocialMedia'

export default function Contact() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className=' text-center   min-w-full  text-8xl'>
    Thanks For Your Interest!
      </div>
      
      <SocialMedia/>
      
    </div>
  )
}
