'use client'
import axios from 'axios'
import React, { useState } from 'react'
// import ToList from './Components/ToList'
import Practice from './Components/Practice'

const page = () => {
  const [Images, setImages] = useState([])
  const getImage = async () => {
    // console.log('Image Is Found')

    try {
      const resp = await axios.get('https://picsum.photos/v2/list')
      const data = resp.data
      setImages(data)
      // console.log(Images)
    } catch (error) {
      console.error('Images Not Found')
    }
  }
  return (
    <div className='px-5 py-5'>
      {/* <ToList /> */}
      <Practice />
      <button onClick={getImage} className='px-5 py-5 bg-red-700 text-white rounded'>Get API</button>

      <div className='px-5 py-4'>
        {
          Images.map((item, i) => {
            return <div key={i} className='px-5 py-5'>
              <img src={item.download_url} />
            </div>
          })
        }
      </div>
    </div>
  )
}

export default page
