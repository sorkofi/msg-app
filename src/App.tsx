import reactLogo from './assets/react.svg'
import './styles/global.css'

let contacts = [
  {
    username: "mary",
    avatar: ":D"
  },
  {
    username: "john",
    avatar: ":O"
  }
];

function App() {

  return(
    <div className='flex flex-row'>
      {/* Sidebar container */}
      <div className='w-[16rem] bg-slate-500 '>
        <ol>{contacts.map((e) => <li>{e.avatar+" "+e.username}</li>)}</ol>
      </div>

      {/* Content container */}
      <div className='flex-auto h-screen z-[-1] bg-slate-300'>
        
      </div>
    </div>
  );
}

export default App

