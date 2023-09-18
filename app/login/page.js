"use client"

import { signIn, signOut, useSession } from "next-auth/react"
import { useRouter } from "next/navigation";

export default function Login(){
  const router = useRouter;
  const session = useSession();
  if(session.status==="authenticated"){
     return     <button onClick={()=>signOut("google")} className="py-2 px-3 shadow-md bg-red-500">logOut</button>
  }
  console.log(session)
  return(
    <div className=" flex w-full h-[450px] mt-2 justify-center items-center">
      <div className=""> 
         <button onClick={()=>signIn("google")} className="py-2 px-3 shadow-md bg-red-500">login with google</button>
         
         </div>
    
    </div>
  )

}




