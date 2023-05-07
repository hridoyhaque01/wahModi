import React, { useEffect, useRef } from 'react'
import { modiProfile ,userProfile} from '../assets/images/getImages'


export default function Message({user,message}) {
    const scrollRef = useRef();
    // on element increase it's autometically scroll down
    useEffect(() => {
      scrollRef.current.scrollIntoView({
        behavior: "smooth",
      });
    });
  return (
    <div className={`flex items-start gap-x-4 w-full ${user && 'flex-row-reverse ml-auto'}`} ref={scrollRef}>
            {/* img  */}
                <div className="shrink-0"> 
                    <img src={user? userProfile : modiProfile} alt="user-image" className="h-9 w-9 sm:w-full " />
                </div>
            {/* message  */}
            <div className={`p-2 sm:p-4  rounded-lg ${user ? 'bg-violet-100' : 'bg-teal-100'}`}>
                <p className='text-sm sm:text-lg'>
                    {message}
                </p>
            </div>
        </div>
  )
}
