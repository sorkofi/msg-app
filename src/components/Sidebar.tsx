import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Sidebar(props: any) {
    return (
        <>
            <div className='w-16 h-full flex flex-col items-center bg-gray-900 text-gray-800 text-md'>
                
                {
                    props.userContent/*slice(0, 5)*/.map((user: any, index: number) => {
                        return (
                            <div className="flex" key={index}>
                                <Link to={index.toString() }>
                                    <button 
                                        onClick={() => console.log(user.name)}
                                        className="rounded-[24px] transition-all hover:rounded-[15px] hover:bg-slate-400 bg-gray-400 text-center w-12 h-12 mx-4 my-2">
                                            {user.name}
                                        </button>
                                </Link>
                            </div>
                        );
                    })
                }
            </div>
        </>
    );
}