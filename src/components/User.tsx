import axios from "axios";

export function User(props: any) {

   return (
      <div className="w-full h-full flex flex-col-reverse mx-5">
         
         <div>

            {
               
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