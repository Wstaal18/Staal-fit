import React from 'react'
import Button from './Button'

export default function Hero() {
  return (
    <div className='min-h-screen flex flex-col gap-10 
    items-center justify-center text center max-w-[800px]
    w-full mx-auto p-4'>
      <div className='flex flex-col gap-4'>
      <p> BECOME STRONGER THAN</p>
      <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>ST <span className='text-blue-400'>AA</span>L</h1>
      </div>
        <p className='text-sm md:text-base font-light'> I hereby acknowledge that I may become 
        <span className='text-blue-400 font-medium'> unbelievably Swole</span>, even more than Ben Swolo,
        and accept all risks of becoming the <span className='text-blue-400 font-medium'>local mass montrosity</span>, 
        with buns stronger than patrick after his day long workouts, 
        and inability to fit through doors. </p>

        <Button func={() => {
          window.location.href ='#generate'
        }}text={"Accept & Begin"}></Button>
    </div>
  )
}
