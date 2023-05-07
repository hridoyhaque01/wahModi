import React from 'react'

export default function Form() {
  return (
    <form className='bg-offWhite py-8 px-2 sm:px-10'>
        <div className='flex items-center gap-x-1 sm:gap-x-4'>
            <input type='text' placeholder='ask me anything' className='flex-1 text-sm sm:text-xl font-secondary font-normal placeholder:text-slate-400 placeholder:capitalize  py-2 sm:py-3.5 xl:py-5 px-2 sm:px-6 border-2 border-ashDark outline-none ' />
            <button className='text-sm sm:text-xl text-black font-primary font-semibold py-2 sm:py-4 xl:py-5 px-2 sm:px-6 bg-secondary  capitalize' type='submit'>send</button>
        </div>
    </form>
  )
}
