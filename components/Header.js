import {useState} from "react";

export default function Header ({useFilter}){

    const [filter, setFilter] = useState()

    function PostFilter(value) {
        useFilter(value)
    }


    return(
        <div className="relative h-[200px] bg-gradient-to-tr from-indigo-600 via-indigo-700 to-violet-800 mb-32">
            <div className="flex flex-col gap-4 justify-center items-center w-full h-full px-3 md:px-0">

                <h1 className="text-2xl text-white">
                    Система ведения информационной системы сбора данных о состоянии легких человека
                </h1>
                <div className="relative p-3 border border-gray-200 rounded-lg w-full max-w-lg flex">
                    <input type="text" className="rounded-md w-full p-3 " placeholder="Поиск пациента по ФИО" value={filter} onChange={(e) => PostFilter(e.target.value)}>

                    </input>
                    <button type="submit" className="absolute right-6 top-6" onClick={PostFilter}>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                             stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}