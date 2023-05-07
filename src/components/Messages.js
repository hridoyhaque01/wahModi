import React from 'react'
import Message from './Message'
import db from "../data/db.json"

export default function Messages() {
  const {modiMessages} = db || {}
  return (
    <div className='w-full h-full bg-ash flex flex-col-reverse items-end py-6 overflow-hidden' style={{justifyContent:'end'}}>
        <div className='flex w-full flex-col overflow-auto px-4 sm:px-8 md:px-12 gap-y-6'>
          {
            modiMessages?.map((Modimessage)=> (
              <Message user={Modimessage?.user} message={Modimessage?.message} key={Modimessage.id} />
            ))
          }

        </div>
    </div>
  )
}
// d-flex flex-col-reverse justify-content-end overflow-hidden