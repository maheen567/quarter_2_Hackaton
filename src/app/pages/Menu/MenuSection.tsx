import React from "react";
import Image from "next/image";
import menuImg from "../../public/menuImg.png";
import menu_1 from "../../public/menu_1.jpeg";
import menu_2 from "../../public/menu_2.jpeg";
import menu_3 from "../../public/menu_3.jpeg";
import menu_4 from "../../public/menu_4.jpeg";
import menu_5 from "../../public/menu_5.jpeg";
import menu_6 from "../../public/menu_6.jpeg";
import menu_7 from "../../public/menu_7.jpeg";
import menu_8 from "../../public/menu_8.jpeg";

export default function MenuSection() {
  return (
    <section className="py-[120px] px-[40px] bg-customBlack">
      <div>
        <h1 className="font-[cursive] text-2xl font-normal text-customYellow text-center mb-2">
          Choose & Pick
        </h1>
        <h2 className="font-[poppins] text-4xl font-bold text-center mb-8">
          <span className="text-customYellow">Fr</span>
          om Our Menu
        </h2>
      </div>

      <ul className="flex max-lg:flex-col max-lg:space-y-4 bg-transparent">
        <li className="tab text-white  font-bold text-[20px] py-3.5 px-7 mr-8 cursor-pointer hover:text-customYellow">
          Breakfast
        </li>

        <li className="tab text-white  font-bold text-[20px] py-3.5 px-7 mr-8 cursor-pointer hover:text-customYellow">
          Lunch
        </li>

        <li className="tab text-white  font-bold text-[20px] py-3.5 px-7 mr-8 cursor-pointer hover:text-customYellow">
          Dinner
        </li>

        <li className="tab text-white  font-bold text-[20px] py-3.5 px-7 mr-8 cursor-pointer hover:text-customYellow">
          Dessert
        </li>

        <li className="tab text-white  font-bold text-[20px] py-3.5 px-7 mr-8 cursor-pointer hover:text-customYellow">
          Drink
        </li>

        <li className="tab text-white  font-bold text-[20px] py-3.5 px-7 mr-8 cursor-pointer hover:text-customYellow">
          Snacks
        </li>

        <li className="tab text-white  font-bold text-[20px] py-3.5 px-7 mr-8 cursor-pointer hover:text-customYellow">
          Soup
        </li>
      </ul>

      <div className="flex gap-14">
        {/* For menu Image Section */}
        <div className="h-[400px] w-[385px] relative">
          <Image
            src="/menuImg.png"
            alt="img-1"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>

        {/* First Columns of menu */}
        <div className="flex flex-col gap-3 mt-12">
          {/* Div image-1 */}
          <div className="flex gap-2">
            <div className=" h-[70px] w-[70px] relative">
              <Image
                src="/menu_1.jpeg"
                alt="img-1"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                className="rounded-[6px]"
              />
            </div>
            <div>
              <h1 className="font-[inter] text-xl font-bold">Lettuce leaf</h1>
              <p className="font-[inter] text-sm font-normal">
                Lorem ipsum dolor sit amet.
              </p>
              <p className="text-customYellow font-[inter] text-lg font-bold">
                12.5$
              </p>
            </div>
          </div>

          {/* Div image-2 */}
          <div className="flex gap-2">
            <div className=" h-[70px] w-[70px] relative">
              <Image
                src="/menu_2.jpeg"
                alt="BreakFast"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                className="rounded-[6px]"
              />
            </div>
            <div>
              <h1 className="font-[inter] text-xl font-bold">Fresh Breakfast</h1>
              <p className="font-[inter] text-sm font-normal">
                Lorem ipsum dolor sit amet.
              </p>
              <p className="text-customYellow font-[inter] text-lg font-bold">
                14.5$
              </p>
            </div>
          </div>

          {/* Div image-3 */}
          <div className="flex gap-2">
            <div className=" h-[70px] w-[70px] relative">
              <Image
                src="/menu_3.jpeg"
                alt="Butter"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                className="rounded-[6px]"
              />
            </div>
            <div>
              <h1 className="font-[inter] text-xl font-bold">Mild Butter</h1>
              <p className="font-[inter] text-sm font-normal">
                Lorem ipsum dolor sit amet.
              </p>
              <p className="text-customYellow font-[inter] text-lg font-bold">
                12.5$
              </p>
            </div>
          </div>

          {/* Div image-4 */}
          <div className="flex gap-2">
            <div className=" h-[70px] w-[70px] relative">
              <Image
                src="/menu_4.jpeg"
                alt="Bread"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                className="rounded-[6px]"
              />
            </div>
            <div>
              <h1 className="font-[inter] text-xl font-bold">Fresh Bread</h1>
              <p className="font-[inter] text-sm font-normal">
                Lorem ipsum dolor sit amet.
              </p>
              <p className="text-customYellow font-[inter] text-lg font-bold">
                12.5$
              </p>
            </div>
          </div>
        </div>


        {/* Second Columns of menu */}
        <div className="flex flex-col gap-3 mt-12">
          {/* Div image-1 */}
          <div className="flex gap-2">
            <div className=" h-[70px] w-[70px] relative">
              <Image
                src="/menu_1.jpeg"
                alt="Cheese"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                className="rounded-[6px]"
              />
            </div>
            <div>
              <h1 className="font-[inter] text-xl font-bold">Glow Cheese</h1>
              <p className="font-[inter] text-sm font-normal">
                Lorem ipsum dolor sit amet.
              </p>
              <p className="text-customYellow font-[inter] text-lg font-bold">
                12.5$
              </p>
            </div>
          </div>

          {/* Div image-2 */}
          <div className="flex gap-2">
            <div className=" h-[70px] w-[70px] relative">
              <Image
                src="/menu_2.jpeg"
                alt="Pizza"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                className="rounded-[6px]"
              />
            </div>
            <div>
              <h1 className="font-[inter] text-xl font-bold">Italian Pizza</h1>
              <p className="font-[inter] text-sm font-normal">
                Lorem ipsum dolor sit amet.
              </p>
              <p className="text-customYellow font-[inter] text-lg font-bold">
                14.5$
              </p>
            </div>
          </div>

          {/* Div image-3 */}
          <div className="flex gap-2">
            <div className=" h-[70px] w-[70px] relative">
              <Image
                src="/menu_3.jpeg"
                alt="Slice Beef"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                className="rounded-[6px]"
              />
            </div>
            <div>
              <h1 className="font-[inter] text-xl font-bold">Slice Beef</h1>
              <p className="font-[inter] text-sm font-normal">
                Lorem ipsum dolor sit amet.
              </p>
              <p className="text-customYellow font-[inter] text-lg font-bold">
                12.5$
              </p>
            </div>
          </div>

          {/* Div image-4 */}
          <div className="flex gap-2">
            <div className=" h-[70px] w-[70px] relative">
              <Image
                src="/menu_4.jpeg"
                alt="img-1"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                className="rounded-[6px]"
              />
            </div>
            <div>
              <h1 className="font-[inter] text-xl font-bold">Mushaom Pizza</h1>
              <p className="font-[inter] text-sm font-normal">
                Lorem ipsum dolor sit amet.
              </p>
              <p className="text-customYellow font-[inter] text-lg font-bold">
                12.5$
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
