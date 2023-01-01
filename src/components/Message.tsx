import { useState } from "react";

interface Props {
   data: string[],
   channel: [string]
}

export function Message(args: Props) {
   const [message, setMessage] = useState([]);

   return (
      <ul>
         {
            args.data.map((message) => {
               return <li>
                  {message}
               </li>
            })
         }
      </ul>
   );
}