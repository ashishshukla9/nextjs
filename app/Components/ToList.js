"use client"
import React, { useState } from 'react'

const ToList = () => {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [datashow, setDataShow] = useState([])
    const formHandler = (e) => {
        e.preventDefault()
        setDataShow([...datashow, { title, desc }]);
        setTitle("")
        setDesc("")
        console.log(datashow)
    }
    let rendertask = <h2>Data Not Found</h2>

    if (datashow.length > 0) {
        rendertask = datashow.map((elem, i) => {
            return (<div className='flex justify-between bg-gray-500'>
                <h5>{elem.title}</h5>
                <h5>{elem.desc}</h5>
            </div>
            );
        });
    }

    return (
        <>
            <br />
            <div className='bg-black rounded mb-5'>
                <h2 className='text-white px-5 py-5 text-center font-extrabold'>TO Way Binding List</h2>
            </div>
            <form onSubmit={formHandler} className='flex justify-around'>
                <input type="text" className='border-red-50 border-2 px-3 py-3 border-zinc-900' value={title} onChange={(e) => { setTitle(e.target.value) }} placeholder="Enter Your Task" />
                <input type="text" className='border-red-50 border-2 px-3 py-3 border-zinc-900' value={desc} onChange={(e) => { setDesc(e.target.value) }} placeholder="Enter Your Description" />
                <button className='bg-red-800 text-white px-5 py-4 rounded'>Submit Form</button>
            </form>
            <br />
            <div className='text-lg bg-gray-500 text-center text-white px-5 py-5 rounded'>{rendertask}</div>
        </>
    )
}

export default ToList
