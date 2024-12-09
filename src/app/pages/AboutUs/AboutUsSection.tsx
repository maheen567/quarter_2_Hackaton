import React from 'react';
import Image from 'next/image';
import about from '../../public/about.png';

export default function AboutUsSection() {
  return (
    <section className='py-[120px] px-[70px] bg-customBlack flex gap-10'>
        {/* For About Details */}
      <div className=''>
        <h1 className='text-[32px] font-[greatvibes] text-customYellow '>About Us</h1>
        <h1 className='font-bold text-4xl mb-4 leading-[1.2]'>
          <span className='text-customYellow'>We </span>
           create the best
            <br />
             Foody Product</h1>
        <p className='font-[inter] font-normal text-[16px] mb-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          <br />
           pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit <br />
           augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis 
           <br />
           sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in
           <br />
            consequat.</p>
        <p className='font-[inter] font-normal text-sm mb-3'> &#10003; Lorem ipsum dolor sit amet.</p>
        <p className='font-[inter] font-normal text-sm mb-3'> &#10003; Ratione veritatis accusantium earum maxime</p>
        <p className='font-[inter] font-normal text-sm mb-5'> &#10003; Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button className='bg-customYellow font-[inter] text-customGray text-[16px] py-3 px-6 rounded-[30px]'>Read More</button>
      </div>


      {/* For About Image */}
      <div>
        <Image src='/about.png' alt='about img' height={500} width={500} className='border-2 border-solid border-customYellow rounded-lg cursor-pointer transition-transform' />
      </div>
    </section>
  )
}
