import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import {TbMinusVertical} from 'react-icons/tb';
import {SiSpotify} from 'react-icons/si';

const NavBar = () => {
  return (
    <div>
        <div className='flex bg-black'>

            <div className='flex flex-row flex-1 pr-21 align-middle justify-center my-4' >
            <SiSpotify className='cursor-pointer' color='white' size='30px'/>  
            <h1 className='text-white pl-1 cursor-pointer'>Spotify</h1>
            </div>
            <div className=' flex my-4 flex-2 pr-60' >
            <a className='text-white  mx-3' href='#'>Premium</a>
            <a className='text-white  mx-3' href='#'>Support</a>
            <a className='text-white  mx-3' href='#'>Download</a>
        </div>
        <div className='flex mr-60 gap-2'>
          <TbMinusVertical className='flex my-4' color='white' size='25px'/>
          <nav className='flex ml-0 mt-4 justify-center'>
            <Link to='/signin' className='text-white mr-3'>Sign In</Link>
            <Link to='/signin' className='text-white'>Sign Up</Link>
          </nav>
        </div>
        </div>
        
    </div>
  )
}

export default NavBar;