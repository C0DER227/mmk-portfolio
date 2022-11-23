import React from 'react';
import html from '../images/htmllogo.png';
import css from '../images/csslogo.png';
import js from '../images/JavaScript-logo.png';
import bs from '../images/bootstraplogo.png';
import tw from '../images/tailwindlogo.png';
import git from '../images/gitlogo.png';
import gh from '../images/githublogo.png';
import rt from '../images/reactlogo.png';
import arrow from '../images/arrow.png';
function Skillset() {
  return (
    <>
    <div className='bg-green-500 pb-9  cursor-pointer'>
    <h1 className='text-3xl font-bold mx-3 pb-3 underline'>Skills:</h1>
    <div>
    <h1 className='text-2xl font-medium mx-4 pb-3 text-center underline'>Design:</h1>
        <ul className='flex justify-evenly pb-3'>
            <li><img className='h-16' src={html} alt="html" /></li>
            <li><img className='h-16' src={css} alt="css" /></li>
            <li><img className='h-16' src={js} alt="Js" /></li> 
        </ul>
        <img className='h-24 mx-[12rem] lg:mx-[47%] pb-2' src={arrow} alt="down-arrow" />
    </div>
    <div>
        <h1 className='text-2xl font-medium mx-4 pt-3 pb-3 text-center underline'>Frameworks:</h1>
        <ul className='flex justify-evenly text-white pb-3'>
            <li>Bootstrap
                <img className='h-16' src={bs} alt="bootstrap" />
            </li>
            <li>Tailwind Css
                <img className='h-14 w-14 mx-3' src={tw} alt="tailwind" />
            </li>
        </ul>
        <img className='h-24 mx-[12rem] lg:mx-[47%] pb-2' src={arrow} alt="down-arrow" />
    </div>
    <div>
        <h1 className='text-2xl font-medium mx-4 pt-3 pb-3 text-center underline'>Developer Tools:</h1>
        <ul className='flex justify-evenly text-white pb-3'>
            <li className='text-center'>GIT
                <img className='h-16' src={git} alt="git" />
            </li>
            <li>GitHub
                <img className='h-16' src={gh} alt="gith" />
            </li>
        </ul>
        <img className='h-24 mx-[12rem] lg:mx-[47%] pb-2' src={arrow} alt="down-arrow" />
    </div>
    <div>
        <h1 className='text-2xl font-medium mx-4 pt-3 pb-3 text-center underline'>Library:</h1>
        <ul className='flex justify-evenly text-white pb-3'>
            <li className='text-center'>React-Js
                <img className='h-16' src={rt} alt="react-js" />
            </li>
        </ul>
    </div>
    </div>
    </>
  )
}

export default Skillset