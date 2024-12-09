import React from "react";
import Image from "next/image";
import foodCategory_1 from "../../public/foodCategory_1.jpeg";
import foodCategory_2 from "../../public/foodCategory_2.jpeg";
import foodCategory_3 from "../../public/foodCategory_3.jpeg";
import foodCategory_4 from "../../public/foodCategory_4.jpeg";

export default function foodCategory() {
  return (
    <div className="py-[120px] px-[70px] bg-black">
      <h1 className="text-customYellow text-4xl text-center font-normal mb-2">Food Category</h1>
      <h1 className="font-bold text-5xl text-center mb-12">
        <span className="text-customYellow" >Ch</span>oose Food Item
      </h1>

      <div className="flex items-center gap-12">
        <div className="h-[250px] w-[230px] relative">
          <Image
            src="/foodCategory_1.jpeg"
            alt="img-1"
            layout="fill" 
            objectFit="cover"
            objectPosition="center"
            className="rounded-md cursor-zoom-in transition duration-300 ease-linear transform hover:scale-105"
          />
        </div>
        <div className="h-[250px] w-[230px] relative">
          <Image
            src="/foodCategory_2.jpeg"
            alt="img-1"
            layout="fill" // Ensures the image fills the container
            objectFit="cover" // Crops to fit the container without stretching
            objectPosition="center"
            className="rounded-md cursor-zoom-in transition duration-300 ease-linear transform hover:scale-105"
          />
        </div>
        <div className="h-[250px] w-[230px] relative">
          <Image
            src="/foodCategory_3.jpeg"
            alt="img-1"
            layout="fill" // Ensures the image fills the container
            objectFit="cover" // Crops to fit the container without stretching
            objectPosition="center"
            className="rounded-md cursor-zoom-in transition duration-300 ease-linear transform hover:scale-105"
          />
        </div>
        <div className="h-[250px] w-[230px] relative">
          <Image
            src="/foodCategory_4.jpeg"
            alt="img-1"
            layout="fill" // Ensures the image fills the container
            objectFit="cover" // Crops to fit the container without stretching
            objectPosition="center"
            className="rounded-md cursor-zoom-in transition duration-300 ease-linear transform hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
}
