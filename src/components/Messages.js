import React, { useContext } from 'react'
import Message from './Message'
import db from "../data/db.json"
import { AiContext } from '../contexts/AiContext';
import MessageLoader from '../assets/animations/MessageLoader';

export default function Messages() {
  const {modiMessages, isProccesing} = useContext(AiContext);
  return (
    <div className='w-full h-full bg-ash flex flex-col-reverse items-end py-6 overflow-hidden' style={{justifyContent:'end'}}>
        <div className='flex w-full flex-col overflow-auto px-4 sm:px-8 md:px-12 gap-y-6'>
          {
            modiMessages?.map((Modimessage,i)=> (
              <Message user={Modimessage?.user} message={Modimessage?.message} key={i} />
            ))
          }

          {
            isProccesing && <MessageLoader></MessageLoader>
          }

        </div>
    </div>
  )
}
