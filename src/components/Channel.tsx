import axios from "axios";
import { useState } from "react";

export function Channel(props: any) {

   return (
      <div className="w-full h-full flex flex-col-reverse mx-5">
         
         <div>
            <input 
               
               
               type="text"
               className="relative m-2 rounded px-2 py-2" 
            />

            <button 
               className='rounded w-28 h-10 bg-gray-500 transition-colors active:bg-cyan-800'>
               Send
            </button>
         </div>
      </div>
   );
 }