import React from 'react'
import {FiMenu} from 'react-icons/fi';
import {SiSpotify} from 'react-icons/si';

const NavBar = () => {
  return (
    <div>
        <div className='flex bg-black'>

            <div className='flex flex-row flex-1 pr-40 align-middle justify-center my-4' >
            <SiSpotify className='cursor-pointer' color='white' size='30px'/>  
            <h1 className='text-white pl-1 cursor-pointer'>Spotify</h1>
            </div>
            <div className=' flex my-4 flex-2 pr-80' >
            <a className='text-white  mx-3' href='#'>Premium</a>
            <a className='text-white  mx-3' href='#'>Support</a>
            <a className='text-white  mx-3' href='#'>Download</a>
        </div>
        <div className='flex flex-3 pr-40'>
          <FiMenu className='flex my-4 cursor-pointer' color='white' size='25px'/>
          <div className='absolute hidden'>
            <a className='text-white' href='#'>Log in</a>
            <a className='text-white' href='#'>Sign up</a>
          </div>
        </div>

        </div>
        
    </div>
  )
}

export default NavBar;