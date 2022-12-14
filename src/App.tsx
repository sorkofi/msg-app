import { useMemo, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import reactLogo from './assets/react.svg';
import './styles/global.css';

function User(props: any) {
  return (
    <div className="w-full h-full flex flex-col-reverse">
      <input type="text" placeholder={props.name} className="" />
      <button onClick={() => console.log("Hello")} className='bg-slate-600 rounded'>hello</button>
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
  },
  {
    route: "/lol",
    username: "lol",
  },


]

function App() {
  
  return(
    <div className='flex flex-row h-screen'>
      {/* Sidebar container */}
      <div className='w-[16rem] bg-slate-500 '>
        {
          routes.map((route) => {
            return <Link to={route.route}>
              <ul>
                <li>{route.username}</li>
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
