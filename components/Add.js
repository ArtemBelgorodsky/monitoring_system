import {useState} from "react";
import axios from "axios";

export default function Add ({onChange}) {

    function PostPerson ()  {
        axios.post(
            'https://json-server-swart-rho.vercel.app/persons',
            {
                avatar: avatar,
                name: name,
                age: age,
                TVL: tvl,
                VLL: vll,
                Saturation: saturation
            },
        ).then(() => onChange());
    }

    const [avatar, setAvatar] = useState()
    const [name, setName] = useState()
    const [age, setAge] = useState()
    const [tvl, setTvl] = useState()
    const [vll, setVll] = useState()
    const [saturation, setSaturation] = useState()

    return(
        <>
            <div className='text-2xl' >Добавить пациента</div>
            <input type="text" className="rounded-md w-1/2 p-3 " placeholder="Аватар" value={avatar} onChange={(e) => setAvatar(e.target.value)}>

            </input>
            <input type="text" className="rounded-md w-1/2 p-3 " placeholder="ФИО" value={name} onChange={(e) => setName(e.target.value)}>

            </input>
            <input type="text" className="rounded-md w-1/2 p-3 " placeholder="Возраст" value={age} onChange={(e) => setAge(e.target.value)}>

            </input>
            <input type="text" className="rounded-md w-1/2 p-3 " placeholder="Жизненная емкость легких (ЖЕЛ) л." value={tvl} onChange={(e) => setTvl(e.target.value)}>

            </input>
            <input type="text" className="rounded-md w-1/2 p-3 " placeholder="Общая емкость легких (ОЕЛ) л." value={vll} onChange={(e) => setVll(e.target.value)}>

            </input>
            <input type="text" className="rounded-md w-1/2 p-3 " placeholder="Сатурация %." value={saturation} onChange={(e) => setSaturation(e.target.value)}>

            </input>
            <button
                className="px-4 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg"
            onClick={() => PostPerson()}>
                Добавить пациента
            </button>
        </>
    )
}