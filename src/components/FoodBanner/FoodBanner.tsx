import React from "react";
import Image from "next/image";
import bannerImage from "../../public/bannerImage.jpeg";
import { MdSlowMotionVideo } from "react-icons/md";

export default function FoodBanner() {
  return (
    <section className="bg-[url('/bannerImage.jpeg')] bg-cover bg-center h-[400px] py-20 px-12">
      <div className="text-right">
        <h1 className="font-[cursive] text-customYellow text-2xl mb-2">Restaurant Active Process</h1>
        <h1 className="font-[poppins] text-4xl font-bold mb-4 leading-snug">
         <span>We</span> Document Every Food <br />
          Bean Process untile it is saved
        </h1>
        <p className="font-[inter] font-normal text-sm mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque <br />
           bibendum non dui volutpat fringilla bibendum. Urna, elit
          augue urna.
        </p>

        <div className=" flex justify-end gap-4 text-right">
          <button className="bg-transparent border-2 border-customYellow font-[inter] text-customGray text-[16px] py-2 px-7 rounded-[30px] transition duration-200 ease-linear hover:bg-customYellow">
            Read More
          </button>
          <div className="flex items-center gap-3 justify-end">
            <div className="flex items-center justify-center text-xl bg-customYellow h-10 w-10 rounded-full">
              <MdSlowMotionVideo />
            </div>
            <h1>Play Video</h1>
          </div>
        </div>
      </div>
    </section>
  );
}
