import { Link } from "react-router-dom";

interface MyRouteType {
    route: string,
    username: string,
}

export function Sidebar(props: any) {
    return (
        <div className='absolute w-[5.5rem] h-full rounded-full flex flex-col items-center bg-gray-900 '>
        {
          props.props.map((route: any, index: number) => {
            return (
                <Link to={index.toString()}>
                <ul>
                    <button className='bg-gray-400 transition hover:shadow-gray-800 hover:shadow-inner w-[4rem] h-[4rem] rounded-full my-2'>{route.username}</button>
                </ul>
                </Link>
            );
          })
        }
      </div>
    );
}