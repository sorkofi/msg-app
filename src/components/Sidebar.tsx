import { Link } from "react-router-dom";

export function Sidebar(props: any) {
    return (
        <div className='w-16 h-full flex flex-col items-center bg-gray-900 text-gray-800 text-md'>
            {
            props.props.map((route: any, index: number) => {
                return (
                    <Link to={index.toString()}>
                    <ul>
                        <button className='bg-gray-400 transition hover:shadow-gray-800 hover:shadow-inner w-12 h-12 mx-4 rounded-xl my-2'>{route.username}</button>
                    </ul>
                    </Link>
                );
            })
            }
        </div>
    );
}