"use client";

import React, { useCallback, useState } from 'react';
import Avatar from './Avatar';
import MenuItem from './MenuItem';

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = useCallback(()=> {
    setIsOpen((value)=> !value)
  },[])

  return (
    <div className="relative">
        <div className="flex flex-row items-center gap-3">
            <div
                // onClick={()=>{}}
                className="hidden md:block text-sm font-semibold px-4 py-3 rounded-full hover:bg-neutral-100 transition cursor-pointer">
                Airbnb your home
            </div>

            <div onClick={toggleMenu} className="p-4 md:py-1 md:px-2 border border-neutral-200 flex items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition">
                =

                <div className="hidden md:block">
                    <Avatar />
                </div>
            </div>
        </div>

        {isOpen && (
          <div className='absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden top-12 right-0 text-sm'>
            <div className="flex flex-col cursor-pointer">
              <MenuItem onClick={()=> null} label='Sign In' />
              <MenuItem onClick={()=> null} label='Sign Up' />
            </div>
          </div>
        )}
    </div>
  )
}

export default UserMenu;