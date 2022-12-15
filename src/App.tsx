import { useMemo, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import { Sidebar } from "./components/Sidebar";

import reactLogo from './assets/react.svg';
import './styles/global.css';

function User(props: any) {
  return (
    <div className="w-full h-full flex flex-col-reverse mx-5">
      <div>
        <h1>{props.props}</h1>
        <input type="text" className="relative m-2 rounded px-2 py-2" />
        <button onClick={() => console.log("send clicked")} className='rounded w-28 h-10 bg-gray-500'>Send</button>
      </div>
    </div>
  );
}

let users = [
  {
    username: "fulano",
  },
  {
    username: "sicrano",
  },
  {
    username: "pinco",
  },
  {
    username: "palino",
  }
]

function App() {
  
  return(
    <div className='flex flex-row h-screen bg-gray-400'>

      <Sidebar props={users} />

      {/* Content container from sidebar items */}
        <Routes>
          {
            users.map((user, index) => {
              return <Route key={index} path={index.toString()} element={<User props={user.username} />} />
            })
          }
        </Routes>
    </div>
    
  );
}

export default App
