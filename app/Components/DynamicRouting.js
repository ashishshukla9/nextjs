"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const DynamicRouting = () => {

    const [users, setusers] = useState([])
    const getData = async () => {

        const resp = await axios.get('https://jsonplaceholder.typicode.com/users')
        const data = resp.data
        setusers(data)
        // console.log(users)

    }
    useEffect(() => {
        getData();
    }, [])
    return (
        <div>
            <button onClick={getData} className='bg-red-600 px-5 py-5 rounded text-white'>View Data
            </button>
            <div className='bg-gray-200 px-4 py-4 rounded '>
                {
                    users.map((elem) => {
                        return (
                            <ul>
                                <li>{elem.username} -- <a href={`/${elem.id}`}> See More</a></li>
                            </ul>
                        )
                    })
                }</div>
        </div>
    )
}

export default DynamicRouting
