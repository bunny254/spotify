import React from 'react';
import {HiOutlineDotsHorizontal} from 'react-icons/hi';
import {TiHome} from 'react-icons/ti';
import {BiHeart,BiSearch,BiLibrary,BiSkipPrevious,BiSkipNext,BiRepeat,BiShuffle} from 'react-icons/bi';
import {BsFillPlusSquareFill,BsBookmarkFill,BsPlayCircleFill} from 'react-icons/bs';
import{AiOutlineHeart} from 'react-icons/ai';
import {styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import {RiUserAddLine,RiUser3Fill} from 'react-icons/ri';
import {IoMdClose} from 'react-icons/io';
import {FaHeart} from 'react-icons/fa';



const TinyText = styled(Typography)({
    fontSize: '0.75rem',
    opacity: 0.38,
    fontWeight: 500,
    letterSpacing: 0.2,
  });

const MusicPlayer = () => {
    const theme = useTheme();
    const duration = 200; // seconds
    const [position, setPosition] = React.useState(32);
    function formatDuration(value) {
        const minute = Math.floor(value / 60);
        const secondLeft = value - minute * 60;
        return `${minute}:${secondLeft < 9 ? `0${secondLeft}` : secondLeft}`;
      }
  return (
    <div>
        <div className='grid grid-cols-12'>
            <div className='col-span-2 pl-6 bg-black'>
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
            <div className='col-span-8 bg-gradient-to-r from-purple-400 to-gray-500' >
                <div className='grid grid-cols-12 mb-5'>
                  <div className='col-span-8'>
                  <h1 className='font-bold text-white'>Good morning</h1>
                  </div>
                  <div className='col-span-2'>
                    <button className='font-bold'>Upgrade</button>
                  </div>
                  <div className='col-span-2'>
                    <div>
                      <button>Kim</button>
                    </div>
                  </div>
                </div>
                <div className='grid grid-cols-2'>
                  <div className='flex flex-row'>
                    <div className='mr-4'>
                      <FaHeart size='20px' color='white'/>
                      </div>
                    <h1>Liked Songs</h1>
                  </div>
                  <div className='flex flex-row'>
                    <div className='mr-4 h-8 w-8'>
                      <img src='https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cG9kY2FzdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt='Podcast'/>
                    </div>
                    <h1>Podcasts</h1>
                  </div>
                  <div className='flex flex-row'>
                    <div className='mr-4 h-8 w-8'>
                      <img src='https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cG9kY2FzdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt='Podcast'/>
                    </div>
                    <h1>Happy Mix</h1>
                  </div>
                  <div className='flex flex-row'>
                    <div className='mr-4 h-8 w-8'>
                      <img src='https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cG9kY2FzdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt='Podcast'/>
                    </div>
                    <h1>On Repeat</h1>
                  </div>
                </div>
                <div className='mt-6 font-bold text-white'>
                  <h1>Continue Listening</h1>
                </div>

            </div>
            <div className='col-span-2 bg-black text-white'>
              <div className='flex flex-row ml-2'>
                <h1>Friend Activity</h1>
                <div className='flex flex-row ml-12 mt-1 gap-2 justify-center'>
                <RiUserAddLine size='20px'/>
                <IoMdClose size='20px'/>
                </div>
              </div>
              <div className='mt-5 ml-2'>
                  <h2 className='text-sm'>Let friends and followers on Spotify <br/> see what you're listening to.</h2>
                </div>
                <div className='mt-3 mb-3 ml-2'>
                  <RiUser3Fill size='20px'/>
                  <RiUser3Fill size='20px'/>
                  <RiUser3Fill size='20px'/>
                </div>
                <div className='ml-2'>
                  <h2 className='text-sm'>Go to settings &#62; Social and enable <br/> 'Share my listening activity on Spotify'. <br/>You can turn this off at any time.</h2>
                </div>
                <div className='mt-2 ml-6 mb-6'>
                  <button className='bg-white hover:bg-gray-500 text-black rounded-full px-8 py-1 font-semibold'>SETTINGS</button>
                </div>
            </div>
            
        </div>
        <div className=' grid grid-cols-3 bg-gray-400'>
          <div className='flex flex-row ml-5 mt-2'>
            <div className='cursor-pointer h-14 w-14'>
              <img alt ='playing song'src='https://images.unsplash.com/photo-1512706150310-80ce897c3294?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHJlZ2dhZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'/>
            </div>
            <div className='ml-3'>
              <h3 className='cursor-pointer hover:underline'>Wajakoyah the Fifth</h3>
              <span className='cursor-pointer hover:underline'>Prof George</span>
            </div>
            <div className='mt-3 ml-2'>
              <BiHeart  className='cursor-pointer' size='25px' color='gray'/>
            </div>
          </div>
                <div className='w-96'>
                  <div className='flex flex-row gap-3 ml-24 align-items-center'>
                    <BiShuffle size='20px'/>
                    <BiSkipPrevious size='25px'/>
                    <BsPlayCircleFill size='25px'/>
                    <BiSkipNext size='25px'/>
                    <BiRepeat size='20px'/>
                  </div>
                <Slider
                aria-label="time-indicator"
                size="small"
                value={position}
                min={0}
                step={1}
                max={duration}
                onChange={(_, value) => setPosition(value)}
                sx={{
                  color: theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
                  height: 4,
                  '& .MuiSlider-thumb': {
                    width: 8,
                    height: 8,
                    transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
                    '&:before': {
                      boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
                    },
                    '&:hover, &.Mui-focusVisible': {
                      boxShadow: `0px 0px 0px 8px ${
                        theme.palette.mode === 'dark'
                          ? 'rgb(255 255 255 / 16%)'
                          : 'rgb(0 0 0 / 16%)'
                      }`,
                    },
                    '&.Mui-active': {
                      width: 20,
                      height: 20,
                    },
                  },
                  '& .MuiSlider-rail': {
                    opacity: 0.28,
                  },
                }}/>
                <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            mt: -2,
          }}
        >
          <TinyText>{formatDuration(position)}</TinyText>
          <TinyText>-{formatDuration(duration - position)}</TinyText>
        </Box>
                </div>
            </div>
        
    </div>
  )
}

export default MusicPlayer