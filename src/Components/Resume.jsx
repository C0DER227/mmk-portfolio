import React from 'react'
import Skillset from './Skillset'

function Resume() {
  return (
    <>
    <div className="dark:bg-slate-500 dark:text-white">
      <Skillset />
      <p className='text-center py-4'>For More references
      <a href="https://c0der227.github.io/Resume/"><button className='p-4 mx-2  bg-blue-700 text-white rounded hover:bg-blue-400'>Click</button></a>
      </p>
    </div>
    </>
  )
}

export default Resume