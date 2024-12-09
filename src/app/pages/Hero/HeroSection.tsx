import React from 'react'
import { FaPinterestP } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";

export default function HeroSection() {
  return (
   <section className='pt-14 h-[100vh] flex gap-14 '>

    {/* Vertical Social Var */}
    <div className='flex gap-3 items-start'>
     <div className='flex flex-col gap-4 pl-5 items-center'>
      <div className='h-[130px] w-1 border-2 border-white bg-white'></div>
      <div className='flex flex-col items-center gap-5'>
      <FaFacebookF />
      <FaPinterestP className='text-customYellow'/>
      <FaTwitter />
      </div>
      <div className='h-[130px] w-1 border-2 border-white bg-white'></div>
     </div>
    </div>

    {/* Hero Details */}
    <div>
      <h1 className='text-customYellow font-[greatVibes] text-3xl font-normal mb-6 mt-7 font whitespace-nowrap'>It's Quick & Amusing!</h1>

      <h2 className='text-white font-[poppins] text-[60px] leading-[60px] font-bold mb-5'> <span className='text-customYellow'>Th</span>e Art of Speed <br /> Food Quality</h2>

      <p className='text-[16px] font-normal mb-7'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> Incidunt provident mollitia amet deleniti ex accusantium!</p>

      <button className='bg-customYellow font-[inter] text-customGray text-[16px] py-3 px-6 rounded-[30px] cursor-pointer'>See Menu</button>
    </div>

    {/* Image Section */}
    <div className='relative'>
      <img src="https://s3-alpha-sig.figma.com/img/c057/0cdb/15aa0f4f312fd5f483e60b93f68c90ba?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KekfcZ1FIgdsuduvG3FEaZPDcd~cuC4U5xL0MrMaLnZLM8ysmXhkakM3Wi16kBm6z0lF7hJCk9jSn1MOH0QFdEhcLvzL8SA1jAPlckxHiUJ17gn9zzjRKJzeV-mP51r80~TphLYJubdk3EhEue7Ldy0ychNDXLN5YY8E-fyne3JrQx3juJzYCGUfyYS77GVZfDLbYFhQuzRVlHUqT~eOKheB~nu6Co0-HYJOisDUPT9TWnrCVGWOVJbNu7E4PnYFbGJoBoQw5Alswn1pPKy8ea4ylBQ37PJ9wAZ160Av0DHiGgcdmKPV0C2pbPkG37csFCOGi1TLjtvXspbqQYCyrg__" alt="" className='h-[800px] relative bottom-[270px]'/>
    </div>
   </section>
  )
}
