import { useMemo, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import reactLogo from './assets/react.svg';
import './styles/global.css';

function User(props: any) {
  return <h1>{props.name}</h1>;
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

]

function App() {
  
  return(
    <div className='flex flex-row'>
      {/* Sidebar container */}
      <div className='w-[16rem] bg-slate-500 '>
        
      </div>

      {/* Content container */}
      <div className='flex-auto h-screen z-[-1] bg-slate-300'>
        <Routes>
          {
            routes.map((route, index) => {
              return <Route key={index} path={route.route} element={<User name={route.username} />} />
            })
          }
        </Routes>
        
      </div>
    </div>
  );
}

export default App
