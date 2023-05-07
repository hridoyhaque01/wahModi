import React from 'react'
import Message from './Message'

export default function Messages() {
  return (
    <div className='w-full h-full bg-slate-50 flex flex-col-reverse justify-end items-end py-6 overflow-hidden'>
        <div className='flex flex-col w-full overflow-auto px-4 sm:px-8 md:px-12 gap-y-6'>
            <Message user={true} message="test 1" />
            <Message user={false} message="test 2" />
            <Message user={true} message="test 3" />
            <Message user={false} message="test 4" />
            <Message user={true} message="test 5" />
            <Message user={false} message="test 6" />
            <Message user={true} message="test 7" />
            <Message user={false} message="test 8" />
            <Message user={true} message="test 9" />
            <Message user={false} message="test 10" />
            <Message user={true} message="test 11" />
            <Message user={false} message="test 12" />
            <Message user={true} message="test 13" />
            <Message user={false} message="test 14" />
            <Message user={true} message="test 15" />
            <Message user={false} message="test 16" />
            <Message user={true} message="test 17" />
            <Message user={false} message="test 18" />
        </div>
    </div>
  )
}
// d-flex flex-col-reverse justify-content-end overflow-hidden