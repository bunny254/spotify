import React from 'react';
import {HiOutlineDotsHorizontal} from 'react-icons/hi';
import {TiHome} from 'react-icons/ti';
import {BiSearch,BiLibrary} from 'react-icons/bi';
import {BsFillPlusSquareFill,BsBookmarkFill} from 'react-icons/bs';
import{AiOutlineHeart} from 'react-icons/ai';

const MusicPlayer = () => {
  return (
    <div>
        <div className='grid grid-cols-3'>
            <div className='pl-6 bg-black'>
                <div className='cursor-pointer'>
                    <HiOutlineDotsHorizontal color='white' size='30px'/>
                </div>
                <div>
                <div className='mb-3 cursor-pointer flex flex-row'>
                    <TiHome color='gray' size='25px'/>
                    <h2 className='ml-2 text-gray-500 hover:text-white'>Home</h2>
                </div>
                <div className='mb-3 cursor-pointer flex flex-row'>
                    <BiSearch color='gray' size='25px'/>
                    <h2 className='ml-2 text-gray-500 hover:text-white'>Search</h2>
                </div>
                <div className='cursor-pointer flex flex-row'>
                    <BiLibrary color='gray' size='25px'/>
                    <h2 className='ml-2 text-gray-500 hover:text-white'>Your Library</h2>
                </div>
                </div>

                <div className='mt-8'>
                    <div className='mb-3 cursor-pointer flex flex-row'>
                        <BsFillPlusSquareFill color='gray' size='25px'/>
                        <h2 className='ml-2 text-gray-500 hover:text-white'>Create Playlist</h2>
                    </div>
                    <div className='mb-3 cursor-pointer flex flex-row'>
                        <AiOutlineHeart color='gray' size='25px'/>
                        <h2 className='ml-2 text-gray-500 hover:text-white'>Liked Songs</h2>
                    </div>
                    <div className='cursor-pointer flex flex-row'>
                        <BsBookmarkFill color='green' size='25px'/>
                        <h2 className='ml-2 text-gray-500 hover:text-white'>Your Episodes</h2>
                    </div>
                </div>
                <div className='mt-2 mb-2 border-b-2 border-gray-300'></div>

            </div>
            <div className=' bg-gradient-to-r from-purple-400 to-gray-500'>
                Shenzi

            </div>
            <div className='bg-black'>Haha</div>

        </div>
    </div>
  )
}

export default MusicPlayer