"use client"
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import React, { useRef } from 'react'

const Header = () => {
    const inputRef = useRef<HTMLInputElement | null>(null); 

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => { 
      e.preventDefault();
      const input = inputRef.current?.value;
      if (!input) return;
    if(!input)return;

    if(inputRef.current?.value
        ){
            inputRef.current.value =""
        }

  }
    return (
    <header>
        <form className='flex items-center space-x-2 justify-center rounded-full py-4 px-4 bg-indigo-100 max-w-md
         mx-auto' onSubmit={handleSearch} >
            <input type="text"
            placeholder='search'
            className='flex-1 outline-none bg-transparent text-indigo-400' 
            ref={inputRef}
           />
            <button hidden >Search</button>
            <MagnifyingGlassIcon className='h-6 w-6 text-indigo-300'/>
        </form>
    </header>
  )
}

export default Header