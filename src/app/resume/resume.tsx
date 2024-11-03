"use client"
import Image from 'next/image'
import React from 'react'

function Resume() {
  return (
    <div> <a href="/images/HuzairCV.pdf" download className="hover:scale-105 transition" onClick={()=>{alert("Downloading Resume")}}>
    <div className="flex justify-center items-center">
      <h2 >My</h2>
      <Image
        src="/images/resume.gif"
        alt="resume"
        width={120}
        height={120}
        className="w-[5rem] lg:w-[7.5rem]"
      ></Image>
    </div>
    <h2>Resume</h2>
    </a></div>
  )
}

export default Resume