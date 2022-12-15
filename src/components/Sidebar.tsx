import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Sidebar(props: any) {
    const [expanded, setExpanded] = useState<boolean>(false);

    return (
        <>
            
            <div className='w-16 h-full flex flex-col items-center bg-gray-900 text-gray-800 text-md'>
                
                {
                props.props.map((route: any, index: number) => {
                    return (
                        <>
                            <button 
                                onClick={() => {
                                    if(expanded) {
                                        setExpanded(false);
                                        return;
                                    }
                                    setExpanded(true);
                                    }}
                                className='rounded-[24px] transition-all hover:rounded-[15px] hover:bg-slate-400 bg-gray-400 text-center w-12 h-12 mx-4 my-2'>
                                {route.username}
                            </button>
                        </>
                    );
                })
                }
            </div>
            { expanded && 
                <div className="w-80 h-screen bg-red-200">
                    {
                        props.props.map((e: any, index: number) => {
                            return <Link className="flex" to={index.toString()}>
                                <button>{e.username}</button>
                            </Link>;
                        })
                    }
                </div>
                
            }
        </>
    );
}