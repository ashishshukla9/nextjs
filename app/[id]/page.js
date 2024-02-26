"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const page = ({ params }) => {
    const { id } = params;
    const [users, setusers] = useState([])
    const getData = async () => {
        const resp = await axios.get('https://jsonplaceholder.typicode.com/users/' + id)
        const data = (resp.data);
        setusers(data)
    }
    useEffect(() => {
        getData()
    }, [id])
    return (
        <div>
            <ul>
                <li>Name : {users.name}</li>
                <li>Username: {users.username}</li>
                <li>Email: {users.email}</li>
                <li>Phone: {users.phone}</li>
                <li>Website: {users.website}</li>
            </ul>
        </div>
    )
}











export default page
