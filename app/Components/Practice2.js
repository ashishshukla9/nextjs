import React, { useState } from 'react'

const Practice2 = () => {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")

    const [datashow, setDataShow] = useState([])

    const formHandle = (e) => {
        e.preventDefault()
        setDataShow([...datashow, { title, desc }]);
        setTitle("");
        setDesc("");
        console.log(datashow)
    }

    let renderingData = <h2>Data Not Show</h2>
    if (datashow.length > 0) {
        renderingData=datashow.map((elem, i) => {
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
            <form onSubmit={formHandle} className='flex justify-between'>
                <input className='px-2 py-2 border-2 border-red-300 ' value={title} onChange={(e) => { setTitle(e.target.value) }} type="text" placeholder='Enter Your Task' />
                <input className='px-2 py-2 border-2 border-red-300' value={desc} onChange={(e) => { setDesc(e.target.value) }} type="text" placeholder="Enter Your Description" />
                <button className='px-5 py-5 bg-red-700 rounded text-white'>Submit Data</button>
            </form>
            <div className='bg-gray-400 text-center px-5 py-5 text-white rounded mt-10'>{renderingData}</div>
        </div>

    )
}

export default Practice2
