import React from 'react'
import { useSelector } from 'react-redux'
import { auth } from '../../../config';

export default function Profile() {

    const userData = useSelector((state:any) => state?.auth?.userData)
console.log(userData);
const handleLogout = ()=>{
    auth.signOut()
}

  return (
    <div className="flex  flex-col items-center bg-zinc-900 text-white border border-gray-200 mt-4 w-3/6 py-6 px-4 rounded-lg">
              <div className="h-20 w-20 rounded-full border overflow-hidden">
                <img
                  src={userData?.avatar}
                  alt="Avatar"
                  className="h-full w-full"
                />
              </div>
              <div className="text-sm font-semibold mt-2">{userData?.username}</div>
              <div className="text-xs text-gray-500">{userData?.email}</div>
              <div className="flex flex-row items-center mt-3">
                <div className="flex flex-col justify-center h-4 w-8 bg-indigo-500 rounded-full">
                  <div className="h-3 w-3 bg-white rounded-full self-end mr-1"></div>
                </div>
                <div className="leading-none ml-1 text-xs">Active</div>
              </div>
              <button onClick={()=> handleLogout}>Logout</button>
            </div>
  )
}
