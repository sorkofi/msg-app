import { useState } from "react";

interface Props {
   data: string
}

export function Message(props: Props) {
   const [message, setMessage] = useState([]);

   return (
      <h1>Message</h1>
   );
}