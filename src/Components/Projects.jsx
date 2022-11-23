import React from 'react'
import gh from '../images/githublogo.png';
import web from '../images/web.png';
import fk from '../images/flip.png';
import my from '../images/myntra.png';
import cb from '../images/coinbase.svg';
import zo from '../images/Zomato.png';
import db from '../images/Dropbox.png';
import nx from '../images/Netflix.png';

function Projects() {
  return (
    <>
    <div className='bg-red-300 dark:bg-slate-500 dark:text-black'>
    <div>
        <h1 className='mx-4 font-bold text-2xl underline'>Projects:</h1>
        </div>
        <div className='card dark:bg-slate-800 dark:text-white'>
        <p className='text-center py-2 underline'>1.Html & Css:</p>
        <h1 className='pb-2 font-medium py-2'><img className='h-12' src={fk} alt="" /> Flipkart</h1>
        <p className='pb-2'>Flipkart-clone with cards an non-responsive website <br />
        <div className='grid grid-cols-2'>
        <p className='my-1'>Source-code:<a href="https://github.com/C0DER227/Websites-HTML-CSS-/tree/main/Flipkart%20Clone"><img className='h-16' src={gh} alt="" /></a></p>
        <p className='my-1'>Website:<a href="#"><img className='h-14' src={web} alt="" /></a></p>
        </div>
        </p><hr/>
        <h1 className='pb-2 font-medium py-2'>Gym-Website</h1>
        <p className='pb-2'>Sample Gym website  with hovers and forms</p>
        <div className='grid grid-cols-2'>
        <p className='my-1'>Source-code:<a href="https://github.com/C0DER227/Websites-HTML-CSS-/tree/main/Gym-Website"><img className='h-16' src={gh} alt="" /></a></p>
        <p className='my-1'>Website:<a href="#"><img className='h-14' src={web} alt="" /></a></p>
        </div><hr/>
        <h1 className='pb-2 font-medium py-2'><img className='h-12' src={my} alt="" /> Myntra Website</h1>
        <p className='pb-2'>Myntra website design non-responsive</p>
        <div className='grid grid-cols-2'>
        <p className='my-1'>Source-code:<a href="https://github.com/C0DER227/Websites-HTML-CSS-/tree/main/Gym-Website"><img className='h-16' src={gh} alt="" /></a></p>
        <p className='my-1'>Website:<a href="#"><img className='h-16' src={web} alt="" /></a></p>
        </div><hr/>
        <h1 className='pb-2 font-medium py-3'><img className='h-12' src={cb} alt="" /> Coinbase</h1>
        <p className='pb-3'>Coinbase is a crypto currency exchange used widly by users</p>
        <div className='grid grid-cols-2'>
        <p className='my-1'>Source-code:<a href="https://github.com/C0DER227/Websites-HTML-CSS-/tree/main/Gym-Website"><img className='h-16' src={gh} alt="" /></a></p>
        <p className='my-1'>Website:<a href="#"><img className='h-16' src={web} alt="" /></a></p>
        </div><hr/>
        </div>
        <hr  className='bg-black'/>
        <div className="card text-center  dark:bg-slate-800 dark:text-white">
        <p className='text-center underline pb-2'>2.JavaScript:</p>
        <h1 className='pb-2 font-medium '>Rock,Paper,Scissors</h1>
        <p className='pb-2'>Simple Game with limited operations<br /></p>
        <p className='py-2 mx-48 lg:mx-[47.3%]'>Source-code:<a href="https://github.com/C0DER227/Javascript/tree/main/Rock%20Paper%20nd%20Scissors%20game"><img className='h-16' src={gh} alt="" /></a></p>
        <hr />
        <h1 className='pb-2 font-medium'>Qoute Generator</h1>
        <p className='pb-2'>Random qoute's displayed<br /></p>
        <p className='py-2 mx-48 lg:mx-[47.3%]'>Source-code:<a href="https://github.com/C0DER227/Javascript/tree/main/Quote%20Generator"><img className='h-16' src={gh} alt="" /></a></p>
        <hr />
        <h1 className='pb-2 font-medium'>Dog Random App</h1>
        <p className='pb-2'>Api fetching and depolying random Dog pics<br /></p>
        <p className='py-2 mx-48 lg:mx-[47.3%]'>Source-code:<a href="https://github.com/C0DER227/Javascript/tree/main/API'S/Dog%20Random%20App"><img className='h-16' src={gh} alt="" /></a></p>
        <hr />
        <h1 className='pb-2 font-medium'>Image Slider</h1>
        <p className='pb-2'>Automated Image Slider depolyed<br /></p>
        <p className='py-2 mx-48 lg:mx-[47.3%]'>Source-code:<a href="https://github.com/C0DER227/Javascript/tree/main/Image%20Slider"><img className='h-16' src={gh} alt="" /></a></p>
        <hr />
        <h1 className='pb-2 font-medium'>TODO-list</h1>
        <p className='pb-2'>Day-Day task adding and completion of tasks can be depolyed<br /></p>
        <p className='py-2 mx-48 lg:mx-[47.3%]'>Source-code:<a href="https://github.com/C0DER227/Javascript/tree/main/TODO-list"><img className='h-16' src={gh} alt="" /></a></p>
        <hr />
        </div>
        <hr className='bg-black' />
        <div>
            <div className="card  dark:bg-slate-800 dark:text-white">
            <p className='text-center underline pb-2'>3.Bootstrap:</p>
            <h1 className='pb-2 font-medium py-2'>Grandpa's IceCream</h1>
            <p className='pb-2'>Grandpa's IceCream with cards an non-responsive website(landing page)<br /></p>
            <div className='flex justify-evenly'>
            <p className='my-1'>Source-code:<a href="https://github.com/C0DER227/Bootstrap-v-5-/tree/main/Grandpa's%20IceCream"><img className='h-16' src={gh} alt="" /></a></p>
            <p className='my-1'>Website:<a href="#"><img className='h-16' src={web} alt="" /></a></p>
            </div>
            <hr />
            <h1 className='pb-2 font-medium py-2'>Burger-Queen</h1>
            <p className='pb-2'>Burger-Queen with cards an non-responsive website as a landing page with minimal functions<br /></p>
            <div className='flex justify-evenly'>
            <p className='my-1'>Source-code:<a href="https://github.com/C0DER227/Bootstrap-v-5-/tree/main/Burger-Queen"><img className='h-16' src={gh} alt="" /></a></p>
            <p className='my-1'>Website:<a href="#"><img className='h-16' src={web} alt="" /></a></p>
            </div>
            </div>
            <hr className='bg-black' />
            <div className="card  dark:bg-slate-800 dark:text-white">
            <p className='text-center underline pb-2'>4.Tailwind-Css:</p>
            <h1 className='pb-2 font-medium'>Popular Dishes</h1>
            <p className='pb-2'>Popular  Dishes Recipies an interactive website<br /></p>
            <div className='flex justify-evenly'>
            <p className='my-1'>Source-code:<a href="https://github.com/C0DER227/Tailwind-css/tree/main/Popular%20Dishes"><img className='h-16' src={gh} alt="" /></a></p>
            <p className='my-1'>Website:<a href="#"><img className='h-16' src={web} alt="" /></a></p>
            </div><hr />
            <h1 className='pb-2 font-medium py-2'>Facebook-SignUp </h1>
            <p className='pb-2'>Facebook Sign-up clone design<br /></p>
            <div className='flex justify-evenly'>
            <p className='my-1'>Source-code:<a href="https://github.com/C0DER227/Tailwind-css/tree/main/FB-signup%20Clone"><img className='h-16' src={gh} alt="" /></a></p>
            <p className='my-1'>Website:<a href="#"><img className='h-16' src={web} alt="" /></a></p>
            </div>
            </div>
            <hr className='bg-black'/>
            <div className="card  dark:bg-slate-800 dark:text-white">
            <p className='text-center underline pb-2'>5.React-Js</p>
            <h1 className='pb-2 font-medium py-2'>BroadCom</h1>
            <p className='pb-2'>5G technology website (Landing page)<br /></p>
            <div className='flex justify-evenly'>
            <p className='my-1'>Source-code:<a href="https://github.com/C0DER227/REACT-Js/tree/main/landing-page"><img className='h-16' src={gh} alt="" /></a></p>
            <p className='my-1'>Website:<a href="#"><img className='h-16' src={web} alt="" /></a></p>
            </div><hr />
            <h1 className='pb-2 font-medium py-2'>My-calc</h1>
            <p className='pb-2'>Calculator design with major js concepts<br /></p>
            <div className='flex justify-evenly'>
            <p className='my-1'>Source-code:<a href="https://github.com/C0DER227/REACT-Js/tree/main/my-calc"><img className='h-16' src={gh} alt="" /></a></p>
            <p className='my-1'>Website:<a href="#"><img className='h-16' src={web} alt="" /></a></p>
            </div><hr />
            <h1 className='pb-2 font-medium py-2'>My-Todo-List</h1>
            <p className='pb-2'>Daily Task App(CRUD Operations)<br /></p>
            <div className='flex justify-evenly'>
            <p className='my-1'>Source-code:<a href="https://github.com/C0DER227/REACT-Js/tree/main/my-todo"><img className='h-16' src={gh} alt="" /></a></p>
            <p className='my-1'>Website:<a href="#"><img className='h-16' src={web} alt="" /></a></p>
            </div><hr />
            <h1 className='pb-2 font-medium py-2'>Crypto Tracker</h1>
            <p className='pb-2'>App to track prices,supply and everthing about Cryto<br /></p>
            <div className='flex justify-evenly'>
            <p className='my-1'>Source-code:<a href="https://github.com/C0DER227/REACT-Js/tree/main/my-crypto-app"><img className='h-16' src={gh} alt="" /></a></p>
            <p className='my-1'>Website:<a href="#"><img className='h-16' src={web} alt="" /></a></p>
            </div>
            </div>
        </div>
        <hr className='bg-black' />
        <div className="card  dark:bg-slate-800 dark:text-white">
            <h1 className='font-semibold underline'>Website Clones(Using React-Js):</h1>
            <p className='font-medium py-2'>1.<img className='h-12' src={zo} alt="" />  Zomato</p>
            <p className='pb-2'>Largest Online Food Delivery app<br /></p>
            <div className='flex justify-evenly'>
            <p className='my-1'>Source-code:<a href="https://github.com/C0DER227/React-JS-website-clones/tree/main/Zomato"><img className='h-16' src={gh} alt="" /></a></p>
            <p className='my-1'>Website:<a href="#"><img className='h-16' src={web} alt="" /></a></p>
            </div><hr />
            <p className='font-medium py-2'>2.<img className='h-12' src={db} alt="" />  Dropbox</p>
            <p className='pb-2'>Cloud Storage website<br /></p>
            <div className='flex justify-evenly'>
            <p className='my-1'>Source-code:<a href="https://github.com/C0DER227/React-JS-website-clones/tree/main/dropbox"><img className='h-16' src={gh} alt="" /></a></p>
            <p className='my-1'>Website:<a href="#"><img className='h-16' src={web} alt="" /></a></p>
            </div><hr />
            <p className='font-medium py-2'>3.<img className='h-12' src={nx} alt="" />  Netflix</p>
            <p className='pb-2'>World's largest streaming Website<br /></p>
            <div className='flex justify-evenly'>
            <p className='my-1'>Source-code:<a href="https://github.com/C0DER227/React-JS-website-clones/tree/main/netflix"><img className='h-16' src={gh} alt="" /></a></p>
            <p className='my-1'>Website:<a href="#"><img className='h-16' src={web} alt="" /></a></p>
            </div>
        </div>
        </div>
    </>
  )
}

export default Projects