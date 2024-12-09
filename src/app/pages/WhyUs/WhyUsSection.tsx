import React from "react";
import Image from "next/image";
import whyUs_1 from "../../public/whyUs_1.jpeg";
import whyUs_2 from "../../public/whyUs_2.jpeg";
import whyUs_3 from "../../public/whyUs_3.jpeg";
import whyUs_4 from "../../public/whyUs_4.jpeg";
import whyUs_5 from "../../public/whyUs_5.jpeg";
import whyUs_6 from "../../public/whyUs_6.jpeg";
import { PiHamburger } from "react-icons/pi";
import { MdOutlineCookie } from "react-icons/md";
import { PiWineFill } from "react-icons/pi";

export default function WhyUsSection() {
  return (
    <div className="py-[120px] px-[70px] bg-customBlack flex gap-20 items-start">
      {/* For image Portion */}
      <div className="flex flex-wrap gap-2 w-[440px]">
        <div className="h-[250px] w-[250px] relative">
          <Image
            src="/whyUs_1.jpeg"
            alt="img-1"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="rounded-[6px] cursor-pointer hover:border-2 border-solid border-customYellow"
          />
        </div>
        <div className="h-[160px] w-[180px] relative top-[90px]">
          <Image
            src="/whyUs_2.jpeg"
            alt="img-1"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="rounded-[6px] cursor-pointer hover:border-2 border-solid border-customYellow"
          />
        </div>
        <div className="h-[220px] w-[160px] relative">
          <Image
            src="/whyUs_3.jpeg"
            alt="img-1"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="rounded-[6px] cursor-pointer hover:border-2 border-solid border-customYellow"
          />
        </div>
        <div className="h-[160px] w-[170px] relative">
          <Image
            src="/whyUs_4.jpeg"
            alt="img-1"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="rounded-[6px] cursor-pointer hover:border-2 border-solid border-customYellow"
          />
        </div>

        <div className="flex flex-col gap-2 relative">
          <div className="relative h-[90px] w-[92px]">
            <Image
              src="/whyUs_5.jpeg"
              alt="img-1"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="rounded-[6px] cursor-pointer hover:border-2 border-solid border-customYellow"
            />
          </div>
          <div className="relative h-[100px] w-[92px]">
            <Image
              src="/whyUs_6.jpeg"
              alt="img-1"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="rounded-[6px] cursor-pointer hover:border-2 border-solid border-customYellow"
            />
          </div>
        </div>
      </div>

      {/* For Why Us Section Details */}
      <div>
        <h1 className="text-customYellow font-[cursive] text-xl font-normal mb-2">
          Why Choose Us
        </h1>
        <h1 className="font-[poppins] font-bold text-5xl mb-4 leading-[56px]">
          <span className="text-customYellow">Ex</span>tra ordinary taste <br />{" "}
          And Experience
        </h1>
        <p className="font-[inter] text-lg font-normal mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
          Modi asperiores ipsum voluptatum, architecto, dolor distinctio <br />
          dolorum ab deleniti et temporibus quibusdam minima explicabo <br />
          maiores quidem blanditiis consectetur voluptates rerum illo.
        </p>

        <div className="flex gap-6">
          <div className="flex flex-col items-center gap-1">
            <PiHamburger className="p-2 bg-customYellow text-white text-7xl rounded" />
            <span className="font-[inter] text-sm font-normal">Fast Food</span>
          </div>

          <div className="flex flex-col items-center gap-1">
            <MdOutlineCookie className="p-2 bg-customYellow text-white text-7xl rounded" />
            <span className="font-[inter] text-sm font-normal">Lunch</span>
          </div>

          <div className="flex flex-col items-center gap-1">
            <PiWineFill className="p-2 bg-customYellow text-white text-7xl rounded" />
            <span className="font-[inter] text-sm font-normal">Dinner</span>
          </div>
        </div>

        <div className="bg-white w-60 border border-solid border-customYellow flex items-center gap-4 rounded-md mt-4">
          <div className="border-4 boder-solid rounded-r-none border-customYellow h-14 rounded"></div>
          <h1 className="text-4xl font-bold text-customYellow">30+</h1>
          <h1 className="text-lg text-gray-500 font-medium">
            Years of <br /> Experience
          </h1>
        </div>
      </div>
    </div>
  );
}
