import axios from "axios";
import { useState } from "react";
import { Message } from "./Message";


export function Channel(props: any) {
   const [messages, setMessages] = useState([
      "Hello! How are you?",
      "Hi! I'm good."
   ]);

   return (
      <div className="w-full h-full flex flex-col-reverse mx-5">
         
         <div>
            <Message channel={props.chan} data={messages} />
            <input 
               type="text" 
               className="relative m-2 rounded px-2 py-2" 
            />

            <button 
               onClick={() => console.log(props.chan)}
               className='rounded w-28 h-10 bg-gray-500 transition-colors active:bg-cyan-800'>
               Send
            </button>
         </div>
      </div>
   );
 }