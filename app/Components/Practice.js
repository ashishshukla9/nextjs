import React, { useState } from 'react'

const Practice = () => {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [datashow, setDataShow] = useState([])
    const formHandler = (e) => {
        e.preventDefault();
        setDataShow([...datashow, { title, desc }])
        setTitle("")
        setDesc("")
        console.log(datashow)
    }

    let rendingData = <h2>Data Not Show</h2>
    if (datashow.length > 0) {
        rendingData = datashow.map((elem, i) => {
            return (
                <div className='flex justify-between'>
                    <h2>{elem.title}</h2>
                    <h2>{elem.desc}</h2>
                </div>

            )
        })
    }
    return (
        <div>
            <form onSubmit={formHandler} className='flex justify-between'>
                <input type="text" className='border-2 border-red-50 border-zinc-900' value={title} onChange={(e) => { setTitle(e.target.value) }} placeholder='Enter Yout Task' />
                <input type="text" className='border-2 border-red-50 border-zinc-900' value={desc} onChange={(e) => { setDesc(e.target.value) }} placeholder='Enter Yout Task Description' />
                <button className='bg-red-600 text-white px-5 py-5 rounded '>Submit Now</button>
            </form>
            <br />
            <div className=' px-2 py-2 font-extrabold text-center bg-green-600 text-white'>
                {rendingData}
            </div>

        </div>
    )
}

export default Practice
