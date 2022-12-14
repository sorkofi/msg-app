import { useMemo, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import reactLogo from './assets/react.svg';
import './styles/global.css';

function User(props: any) {
  return (
    <div className="w-full h-full flex flex-col-reverse bg-gray-400">
      <input type="text" className="m-2 rounded px-2 py-2" />
      <button onClick={() => console.log("Hello")} className='rounded'>{props.name}</button>
    </div>
  );
}

let routes = [
  {
    route: "/fulano",
    username: "fulano",
  },
  {
    route: "/sicrano",
    username: "sicrano",
  },
  {
    route: "/pinco",
    username: "pinco",
  },
  {
    route: "/palino",
    username: "palino",
  }
]

function App() {
  
  return(
    <div className='flex flex-row h-screen'>

      {/* Sidebar container */}
      <div className='w-[5.5rem] rounded-full flex flex-col items-center bg-gray-900 '>
        {
          routes.map((route, index) => {
            return <Link to={route.route}>
              <ul>
                <button className='bg-gray-400 transition hover:shadow-gray-800 hover:shadow-inner w-[4rem] h-[4rem] rounded-full my-2'>{route.username}</button>
              </ul>
            </Link>
          })
        }
      </div>

      {/* Content container */}
        <Routes>
          {
            routes.map((route, index) => {
              return <Route key={index} path={route.route} element={<User name={route.username} />} />
            })
          }
        </Routes>
    </div>
    
  );
}

export default App
