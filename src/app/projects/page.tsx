import Image from 'next/image'

export default function Projects() {
  return (
    <main className=" min-w-full flex min-h-screen flex-col items-center justify-between ">
      <div className=' mt-8 rounded-lg shadow-2xl w-5/6 min-h-screen bg-slate-800'>
        
        <div className='m-14 flex justify-left'>
          <div className='border-r w-1/3'>
            <div className=' text-cyan-400 text-5xl'>Personal Website</div>
            <div className=' text-2xl'>Status: <span className=' text-green-500'>Release 1.0</span></div>
            <a className=" text-xl underline" target="_blank" href="https://github.com/nich1/NicholasRTaylor.com">https://github.com/nich1/NicholasRTaylor.com</a>
          </div>
          <div className=' text-2xl px-8 w-2/3 '>Serves as a central hub to all my projects, connection links, and general information. Built with React, 
          Next, AWS, Postgres, Prisma. A modern, traditional approach to site building. Where I can discuss problems, interests, and all things related to development.
          Blog posts have accounts, posts, comments and interact with a database.Technologies picked for building comes down to personal interest.</div>
        </div>

        <div className='m-14 flex justify-left'>
          <div className='border-r w-1/3'>
            <div className=' text-cyan-400 text-5xl'>Nich Neuron</div>
            <div className=' text-2xl'>Status: <span className=' text-yellow-400'>In-Progress</span></div>

            <a className=" text-xl underline" target="_blank" href="https://github.com/nich1/nich-neuron">https://github.com/nich1/nich-neuron</a>
            
          </div>
          <div className=' text-2xl px-8 w-2/3 '> Personal server / drive. Long term project where a desktop and mobile interface will be created for uploading, downloading, viewing, and editing files. There will also be a build in scheduler as an API for future server functions. </div>
        </div>

        

        <div className='m-14 flex justify-left'>
          <div className='border-r w-1/3'>
            <div className=' text-cyan-400 text-5xl'>Mock E-Commerce</div>
            <div className=' text-2xl'>Status: <span className=' text-red-500'>Not Started</span></div>

          </div>
          <div className=' text-2xl px-8 w-2/3 '>Handling payments, creating accounts. Will either build with React or
          Svelte, whichever ends up being my favorite. </div>
        </div>

        <div className='m-14 flex justify-left'>
          <div className='border-r w-1/3'>
            <div className=' text-cyan-400 text-5xl'>E-Mail API and CLI</div>
            <div className=' text-2xl'>Status: <span className=' text-red-500'>Not Started</span></div>

          </div>
          <div className=' text-2xl px-8 w-2/3 '> Server written in Rust / C for sending emails. CLI to interact, API written in various languages. </div>
        </div>
        

        

      </div>
    </main>
  )
}
