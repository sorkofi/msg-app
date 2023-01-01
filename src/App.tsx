import { useEffect, useMemo, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import { Sidebar } from "./components/Sidebar";
import { Channel } from "./components/Channel";

import reactLogo from './assets/react.svg';
import './styles/global.css';
import axios from 'axios';

function App() {
  const [channels, setChannels] = useState([
    "hi",
    "hello",
    "bye"
  ])

   // let data = axios.get("https://dummyjson.com/comments").then(async (res) => await res)

  //  useEffect(() => {
  //     let data = axios.get("http://192.168.42.9:3000/api/messages/getAll").then(
  //        (response) => useData(response.data)
  //     ).catch((err) => console.log(err.code))
  //  }, [])

  //  async function useData(args: any) {
  //     setChannels(args);
  //     console.log(args)
  //  }

  return(
    <div className='flex flex-row h-screen bg-gray-400'>

      <Sidebar channels={channels} />

      {/* Content container from sidebar items */}
        <Routes>
          {
            channels.map((chan: any, index) => {
              return <Route 
                key={index}
                path={index.toString()}
                element={
                  <Channel chan={chan} />
                } />
            })
          }
        </Routes>
    </div>
    
  );
}

export default App
