import axios from "axios";
import { useEffect, useState } from "react";

interface Data {
   comments: []
}

export function User(props: any) {
   const [dt, setDt] = useState([])

   // let data = axios.get("https://dummyjson.com/comments").then(async (res) => await res)

   useEffect(() => {
      let data = axios.get("localhost:3000/api/users/getAll").then(
         (response) => useData(response.data)
      ).catch((err) => console.log(err.code))
   }, [])

   async function useData(args: any) {
      // setDt(args.comments);
      console.log(args.code)
   }

   return (
      <div className="w-full h-full flex flex-col-reverse mx-5">
         
         <div>


            {
               // dt.map((e) => {
               //    return <h1>{e.user.username}</h1>
               // })
            }

            <input 
               type="text" 
               className="relative m-2 rounded px-2 py-2" 
            />

            <button 
               onClick={() => console.log("send clicked")}
               className='rounded w-28 h-10 bg-gray-500 transition-colors active:bg-cyan-800'>
               Send
            </button>
         </div>
      </div>
   );
 }