import { useMemo, useState } from 'react';
import reactLogo from './assets/react.svg'
import './styles/global.css'

let users = [
  {
    id: 0,
    name: "fulano"
  },
  {
    id: 1,
    name: "sicrano"
  },
  {
    id: 2,
    name: "pinco"
  },
  {
    id: 3,
    name: "palino"
  }
]

function App() {
  
  return(
    <div className='flex flex-row'>
      {/* Sidebar container */}
      <div className='flex flex-col w-[16rem] bg-slate-500 '>
        <ol className='flex flex-col'>{users.map((e) =>
          <li key={e.id}>
            <button className='w-4/5 bg-red-400 p-2 mx-5 my-1 rounded'>{e.name}</button>
          </li>)}
        </ol>
      </div>

      {/* Content container */}
      <div className='flex-auto h-screen z-[-1] bg-slate-300'>
        
      </div>
    </div>
  );
}

export default App

