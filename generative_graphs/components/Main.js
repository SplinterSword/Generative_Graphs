'use client'
import React from 'react'
import Image from 'next/image'
import { useState,useRef } from 'react'

const Main = () => {
    const [file, setFile] = useState();
    const fileUploader = useRef();

    const handleClick = async (e) => {
        e.preventDefault(); // To prevent the page from reloading
        fileUploader.current.click();
    }

    const handleChange = async () => {
        const url = URL.createObjectURL(fileUploader.current.files[0]);
        setFile(url);
        console.log(url)
    }

  return (
    <div>
        <div className='bg-violet-950 pt-24 text-gray-100'>
            <div className='p-4 pb-2 font-bold text-xl flex justify-center items-center gap-2'>
                {/* <Image width={75} height={75} unoptimized src="/logo.gif" alt="" /> */}
                <h1 className='text-3xl'>GenGraphs:  Generate Your Own Forcast</h1>
            </div>
            <div className='flex items-center justify-center p-3'>
                <form>
                    <input type="file" ref={fileUploader} name="file" hidden onChange={handleChange}/>
                    <button type='submit' onClick={(e) => handleClick(e)}>
                        <Image width={100} height={100} unoptimized src="/upload.svg" alt="" />
                    </button>
                </form>
            </div>
            <p className='text-center text-xl pb-16'>Click here to Upload you file and get the Forcast</p>
        </div>
        
        <div className='p-20'>
            <p className='text-gray-500 text-xl text-center container mx-auto w-[80vh] pb-10'>Discover the pinnacle answer for effortless and effective forcasting of graphs from the web: our GenGraph Forcaster. This intuitive, no-cost utility streamlines the task of acquiring your predictions with just one simple click, guaranteeing a smooth and hassle-free journey!</p>
            <h2 className='text-center text-2xl text-gray-500 pb-8'>Supported Formats</h2>
            <div className='flex justify-center items-center gap-24'>
                <Image width={100} height={100} unoptimized src="/excel.png" alt="" />
                <Image width={100} height={100} unoptimized src="/csv.png" alt="" />
            </div>
        </div>
        <div className='min-h-[50vh] bg-violet-950 pt-16 text-gray-100'>
            <div className='pb-2 font-bold text-xl flex justify-center items-center gap-2'>
                <h2 className='text-3xl'>Get Your Forcast here</h2>
            </div>
            <div className='min-h-[30vh] font-bold flex justify-center items-center gap-2'>
                <h1 className='text-xl'>No Document Uploaded</h1>
            </div>
        </div>
    </div>


  )
}

export default Main
