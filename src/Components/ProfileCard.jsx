import React from 'react'
import prof from '../images/dp.jpg';
import gif from '../images/logo.gif';


function ProfileCard() {
  return (
    <>
      <div>
        <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
          <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto lg:h-36 lg:w-36 lg:mx-12" src={prof} alt="" width="384" height="512" />
          <div class="pt-6 md:p-8 text-center md:text-left space-y-4 rounded-md">
            <blockquote>
              <p class="text-lg font-medium dark:text-white lg:text-center">
                “I'm a enthuastic Front-end Web Developer
                passionate towards
                work and a hardworking soul”
              </p>
            </blockquote>
            <figcaption class="font-medium lg:text-center">
              <div class="text-sky-500 dark:text-sky-400">
                Mukesh Kumar
              </div>
              <div class="text-slate-700 dark:text-slate-500">
                Vadodara,Guj
              </div><br />
            </figcaption>
            <blockquote className='grid grid-cols-2'>
            <p className='text-xl text-center text-blue-400 font-medium my-6 dark:text-white lg:p-8'>“A successful website <br /> does three things:<br />
                It attracts the right <br /> kinds of visitors.<br />
                Guides them to the main <br /> services or product you offer.<br />
                Collect Contact details for <br /> future ongoing relation.”</p>
              <img className='mx-6 py-8 lg:h-96 w-[100%] lg:px-6' src={gif} alt="" />
            </blockquote>
          </div>
        </figure>
      </div>
      <div>

      </div>
    </>
  )
}

export default ProfileCard