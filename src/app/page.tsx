import React from 'react'
import { DocumentMagnifyingGlassIcon } from '@heroicons/react/24/solid'
const Homepage = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <DocumentMagnifyingGlassIcon className='h-64 w-64 text-indigo-600/20'/>
      <h1 className='text-3xl text-center text-black font-bold mt-5'>Welcome to Amazon Webscraper</h1>
      <h2 className=' text-lg italic text-center text-black/50'>Web scraping is the practice of extracting large amounts of web data through the use of software</h2>
    </div>
  )
}

export default Homepage