import { useMemo, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import { Sidebar } from "./components/Sidebar";
import { User } from "./components/User";

import reactLogo from './assets/react.svg';
import './styles/global.css';

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
