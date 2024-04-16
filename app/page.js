"use client"
import Header from "@/components/Header";
import Add from "@/components/Add";
import axios from "axios";
import {useEffect, useState} from "react";




export default function Home() {

    const [change, setChange] = useState(true)

    function DeletePerson (id) {
        axios.delete(`https://json-server-swart-rho.vercel.app/persons/${id}`).then(() => setChange(!change));
    }

    useEffect(() => {
        axios.get('https://json-server-swart-rho.vercel.app/persons').then((response) => {
            setPerson(response.data);
        });
    }, [change]);

    const [person, setPerson] = useState()
    const [filtertext, setFilterText] = useState(String)

    const handleChange = () => {
        setChange(!change)
    }

    const handleFilter = (value) => {
        setFilterText(value)

    }


    const filterPerson = person?.filter(person => person.name.toLowerCase().includes(filtertext?.toLowerCase()))

    console.log(filterPerson)
    if (filtertext?.length == 0){
        console.log('da')
    }

    if (person?.length == 0) return <> <Header/>Пациентов нет</>;



  return (
     <div className="bg-white">
        <Header useFilter={handleFilter}/>
         <div className="flex flex-col justify-center items-center h-[100vh]">
             <div
                 className="relative flex max-w-[1000px] h-[430px] w-full flex-col rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none"
             >
                 <div
                     className="flex h-fit w-full items-center justify-between rounded-t-2xl bg-white px-4 pb-[20px] pt-4 shadow-2xl shadow-gray-100 dark:!bg-navy-700 dark:shadow-none"
                 >
                     <h4 className="text-lg font-bold text-navy-700 dark:text-white">
                         Показатели спирометрии у пациентов
                     </h4>
                     <button
                         className="linear rounded-[20px] bg-lightPrimary px-4 py-2 text-base font-medium text-brand-500 transition duration-200 hover:bg-gray-100 active:bg-gray-200 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:active:bg-white/20"
                     >
                         See all
                     </button>
                 </div>
                 <div className="w-full overflow-x-scroll px-4 md:overflow-x-hidden">
                     <table role="table" className="w-full min-w-[600px] overflow-x-scroll">
                         <thead>
                         <tr role="row">
                             <th
                                 colSpan="1"
                                 role="columnheader"
                                 title="Toggle SortBy"
                             >
                                 <div
                                     className="flex items-center justify-between pb-2 pt-4 text-start uppercase tracking-wide text-gray-600 sm:text-xs lg:text-xs"
                                 >
                                     ФИО
                                 </div>
                             </th>
                             <th
                                 colSpan="1"
                                 role="columnheader"
                                 title="Toggle SortBy"
                             >
                                 <div
                                     className="flex items-center justify-between pb-2 pt-4 text-start uppercase tracking-wide text-gray-600 sm:text-xs lg:text-xs"
                                 >
                                     Возраст
                                 </div>
                             </th>
                             <th
                                 colSpan="1"
                                 role="columnheader"
                                 title="Toggle SortBy"

                             >
                                 <div
                                     className="flex items-center justify-between pb-2 pt-4 text-start uppercase tracking-wide text-gray-600 sm:text-xs lg:text-xs"
                                 >
                                     Жизненная емкость легких (ЖЕЛ) л.
                                 </div>
                             </th>
                             <th
                                 colSpan="1"
                                 role="columnheader"
                                 title="Toggle SortBy"

                             >
                                 <div
                                     className="flex items-center justify-between pb-2 pt-4 text-start uppercase tracking-wide text-gray-600 sm:text-xs lg:text-xs"
                                 >
                                     Общая емкость легких (ОЕЛ) л.
                                 </div>
                             </th>
                             <th
                                 colSpan="1"
                                 role="columnheader"
                                 title="Toggle SortBy"

                             >
                                 <div
                                     className="flex items-center justify-between pb-2 pt-4 text-start uppercase tracking-wide text-gray-600 sm:text-xs lg:text-xs"
                                 >
                                     Сатурация %.
                                 </div>
                             </th>
                             <th
                                 colSpan="1"
                                 role="columnheader"
                                 title="Toggle SortBy"

                             >
                                 <div
                                     className="flex items-center justify-between pb-2 pt-4 text-start uppercase tracking-wide text-gray-600 sm:text-xs lg:text-xs"
                                 >
                                     Удалить
                                 </div>
                             </th>
                         </tr>
                         </thead>
                         <tbody role="rowgroup" className="px-4">
                         {filterPerson?.map(e => <tr role="row" key={e.id}>
                             <td className="py-3 text-sm" role="cell">
                                 <div className="flex items-center gap-2">
                                     <div className="h-[30px] w-[30px] rounded-full">
                                         <img
                                             src={e.avatar}
                                             className="h-full w-full rounded-full"
                                             alt=""
                                         />
                                     </div>
                                     <p
                                         className="text-sm font-medium text-navy-700 dark:text-white"
                                     >
                                         {e.name}
                                     </p>
                                 </div>
                             </td>
                             <td className="py-3 text-sm" role="cell">
                                 <p className="text-md font-medium text-gray-600 dark:text-white text-center">
                                     {e.age}
                                 </p>
                             </td>
                                 <td className="py-3 text-sm" role="cell">
                                     <p className="text-md font-medium text-gray-600 dark:text-white text-center">
                                         {e.TVL}
                                     </p>
                                 </td>
                                 <td className="py-3 text-sm" role="cell">
                                     <p className="text-md font-medium text-gray-600 dark:text-white text-center">
                                         {e.VLL}
                                     </p>
                                 </td>
                             <td className="py-3 text-sm" role="cell">
                                 <p className="text-md font-medium text-gray-600 dark:text-white text-center">
                                     {e.Saturation}
                                 </p>
                             </td>
                                 <td className="py-3 text-sm" role="cell">
                                     <p className="text-md font-medium text-gray-600 dark:text-white text-center text-red-700">
                                         <button onClick={() => DeletePerson(e.id)}>X</button>
                                     </p>
                                 </td>
                         </tr>
                         )}

                         </tbody>
                     </table>
                 </div>
             </div>
             <Add onChange={() => handleChange()}/>
         </div>
     </div>
  );
}
