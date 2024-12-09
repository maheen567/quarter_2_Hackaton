import React from 'react'
import Image from 'next/image';
import chefs_1 from '../../public/chefs_1.jpeg';
import chefs_2 from '../../public/chefs_2.jpeg';
import chefs_3 from '../../public/chefs_3.jpeg';
import chefs_4 from '../../public/chefs_4.jpeg';

export default function ChefsSection() {
  return (
    <section className="py-[120px] px-[70px] bg-black">
      <div className='text-center'>
        <h1 className='text-customYellow font-[cursive] font-normal text-2xl mb-2'>Chefs</h1>
        <h1 className='font-bold font-[poppins] text-5xl mb-10'> <span className='text-customYellow'>Me</span>et Our Chefs</h1>
      </div>

      <div className="flex gap-7">
        <div className='flex flex-col items-center gap-1'>
          <div className='h-[290px] w-[240px] relative' >
          <Image
            src="/chefs_1.jpeg"
            alt="img-1"
            layout='fill'
            objectFit="cover"
            objectPosition="center"
            className='rounded-[6px] cursor-zoom-in transition duration-300 ease-linear transform hover:scale-105'
          />
          </div>
            <div className='flex flex-col items-center '>
            <h1 className='font-bold text-lg'>D.Estwood</h1>
            <p className='font-normal text-sm text-customGray'>Chief Chef</p>
            </div>
        </div>

        <div className='flex flex-col items-center gap-1'>
          <div className='h-[290px] w-[240px] relative' >
          <Image
            src="/chefs_2.jpeg"
            alt="Chef"
            layout='fill'
            objectFit="cover"
            objectPosition="center"
            className='rounded-[6px] cursor-zoom-in transition duration-300 ease-linear transform hover:scale-105'
          />
          </div>
            <div className='flex flex-col items-center '>
            <h1 className='font-bold text-lg'>D.Scoriesh</h1>
            <p className='font-normal text-sm text-customGray'>Assistant Chef</p>
            </div>
        </div>

        <div className='flex flex-col items-center gap-1'>
          <div className='h-[290px] w-[240px] relative' >
          <Image
            src="/chefs_3.jpeg"
            alt="Chef"
            layout='fill'
            objectFit="cover"
            objectPosition="center"
            className='rounded-[6px] cursor-zoom-in transition duration-300 ease-linear transform hover:scale-105'
          />
          </div>
            <div className='flex flex-col items-center '>
            <h1 className='font-bold text-lg'>M. William</h1>
            <p className='font-normal text-sm text-customGray'>Advertising Chef</p>
            </div>
        </div>

        <div className='flex flex-col items-center gap-1'>
          <div className='h-[290px] w-[240px] relative' >
          <Image
            src="/chefs_4.jpeg"
            alt="Chef"
            layout='fill'
            objectFit="cover"
            objectPosition="center"
            className='rounded-[6px] cursor-zoom-in transition duration-300 ease-linear transform hover:scale-105'
          />
          </div>
            <div className='flex flex-col items-center '>
            <h1 className='font-bold text-lg'>W.Readfroad</h1>
            <p className='font-normal text-sm text-customGray'>Chef</p>
            </div>
        </div>
      </div>

      <div className='text-center mt-6'>
      <button className='bg-transparent border-2 border-customYellow font-[inter] text-customGray text-[14px] py-2 px-6 rounded-[25px] transition duration-200 ease-linear hover:bg-customYellow'>See More</button>
      </div>
    </section>
  );
}
