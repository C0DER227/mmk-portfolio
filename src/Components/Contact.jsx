import React from 'react'


function Contact() {
  return (
    <>
    <div className='dark:bg-slate-500 dark:text-white'>
    <div className='sm:text-center'>
        <h1 className='text-2xl px-1 py-3'>Any suggestions????</h1>
        <h1 className='px-2 font-medium'>Mail Id:</h1>
        <p><input className='border border-grey py-2  border-gray-500 mx-2' type="email" required placeholder=' Mail id??' /></p>
        <h1 className='font-medium py-3 mx-2'>Message/Query:</h1>
        <p><textarea className='border-2 border-grey mx-2' name="message??" id="" cols="50" rows="10"></textarea></p>
        <button className='bg-blue-600 text-white h-12 w-16 rounded-lg hover:bg-blue-300 mx-2'>Submit</button>
    </div><hr />
    <div>
    <h1 className='text-2xl font-medium py-2 underline mx-2'>Contact Me:</h1>
    <p className='font-medium mx-2'>Email ID: inbuiltcoder22794@gmail.com</p>
    <p className='font-medium mx-2'>Phone No.: +9194285283</p>
    </div>
    </div>
    </>
  )
}

export default Contact