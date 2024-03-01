import Image from 'next/image'
import React from 'react'
import loginPic from '@/public/assets/images/login/login.svg'
import ImgHoverZoom from '../components/imgHoverZoom/imgHoverZoom'
export default function Login() {
  return (
    <section className="my-24 flex flex-col-reverse sm:flex-row ">
    <div className="my-8 h-auto w-full lg:w-1/2">
      <ImgHoverZoom
        src={loginPic}
        alt="Phone image"
        className='h-full'
      />
    </div>
    <div className="w-full h-40 lg:w-1/2 mx-auto text-center">
      <h2 className="font-bold text-center my-4">Log in</h2>
      {/* <GoogleLoginComp /> */}
      google
    </div>
  </section>

  )
}
