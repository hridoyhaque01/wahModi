import React from 'react'
import Messages from './Messages'
import Form from './Form'

export default function Chatbox() {
  return (
    <section className='w-10/12 mx-auto mt-14 h-[600px] bg-slate-200'>
        <div className=' flex flex-col justify-end h-full '>
            <Messages />
            <Form />
        </div>
    </section>
  )
}
