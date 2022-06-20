import React from 'react';
import {SiSpotify} from 'react-icons/si';

const Footer = () => {
  return (
    <div>
        <div className='flex flex-row bg-black p-20'>
            <div className='flex flex-row ml-24'>
            <SiSpotify className='cursor-pointer'color='white' size='30px'/>
            <h1 className='text-white pl-1 cursor-pointer'>Spotify</h1>
            </div>
            <div className='flex flex-col pl-20 text-white'>
                <p className='text-gray-300 mb-5 font-semibold'>COMPANY</p>
                <a href=''>About</a>
                <a href=''>Jobs</a>
                <a href=''>For the Record</a>
            </div>
            <div className='flex flex-col pl-20  text-white'>
                <p className='text-gray-300 mb-5 font-semibold'>COMMUNITIES</p>
                <a href=''>For Artists</a>
                <a href=''>Developers</a>
                <a href=''>Advertising</a>
                <a href=''>Investors</a>
                <a href=''>Vendors</a>
            </div>
            <div className='flex flex-col pl-20 text-white'>
                <p className='text-gray-300 mb-5 font-semibold'>USEFUL LINKS</p>
                <a href=''>Support</a>
                <a href=''>Web Player</a>
                <a href=''>Free Mobile App</a>
            </div>
        </div>
    </div>
)}

export default Footer;