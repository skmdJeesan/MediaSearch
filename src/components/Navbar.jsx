import React from 'react'
import { FiHome } from 'react-icons/fi'
import { HiOutlineCollection } from 'react-icons/hi'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='w-[6%] z-10 h-full flex flex-col gap-6 items-center py-5 bg-zinc-900 fixed'>
      <Link to='/' className='font-bold text-2xl text-blue-400'>
        <img 
          className='h-10 w-10 object-cover rounded-full'
          src="https://i.pinimg.com/736x/bd/69/06/bd6906a5f1c2f16229ef1881a6ddf79e.jpg" alt="" />
      </Link>
      <div className='flex flex-col gap-3 items-center'>
        <Link className='text-white text-xl hover:bg-zinc-800 p-2 rounded-full' to='/'><FiHome /></Link>
        <Link className='text-white text-xl hover:bg-zinc-800 p-2 rounded-full' to='/collection'><HiOutlineCollection /></Link>
      </div>
    </div>
  )
}

export default Navbar
