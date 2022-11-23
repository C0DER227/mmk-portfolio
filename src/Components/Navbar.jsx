import React from 'react'
import Typed from 'react-typed';
import Dark from './Dark';
function Navbar() {
  return (
    <>
    <header className='bg-blue-500'>
        <nav>
        <div className='font-bold text-3xl text-white'>
        <Typed className='mx-2' strings={['Motupalli','Mukesh','Kumar']}typeSpeed={40} backSpeed={50} loop></Typed>
        </div>
            <ul className='flex justify-end gap-8 mx-6 py-2'>
                <li><a className='text-white hover:underline' href="/">Home</a></li>
                <li><a className='text-white hover:underline' href="/Resume">Resume</a></li>
                <li><a className='text-white hover:underline' href="/Projects">Projects</a></li>
                <li><a className='text-white hover:underline' href="/Contact">Contact-Me</a></li>
                <Dark />
            </ul>
        </nav>
    </header>
    </>
  )
}

export default Navbar