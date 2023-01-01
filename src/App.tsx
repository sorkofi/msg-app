import { useEffect, useMemo, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import { Sidebar } from "./components/Sidebar";
import { Channel } from "./components/Channel";

import reactLogo from './assets/react.svg';
import './styles/global.css';
import axios from 'axios';

function App() {
  const [userContent, setUserContent] = useState([
    {
      id: 0,
      name: "mike",
      message: "hi"
    },
    {
      id: 0,
      name: "john",
      message: "welcome!"
    }
  ]);

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

      <Sidebar userContent={userContent} />

      {/* Content container from sidebar items */}
        <Routes>
          {
            userContent.map((user: any, index) => {
              return <Route 
                key={index}
                path={index.toString()}
                element={
                  <Channel />
                } />
            })
          }
        </Routes>
    </div>
    
  );
}

export default App
