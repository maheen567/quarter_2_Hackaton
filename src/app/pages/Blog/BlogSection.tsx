import React from "react";
import blog_1 from '../../public/blog_1.jpeg';
import blog_2 from '../../public/blog_2.jpeg';
import blog_3 from '../../public/blog_3.jpeg';
import { BiLike } from "react-icons/bi";
import { BiCommentDetail } from "react-icons/bi";
import { IoShareSocialSharp } from "react-icons/io5";




export default function BlogSection() {
  return (
    <section className="py-[120px] px-[60px] bg-black">
      <div className="container mx-auto">

      <h1 className="font-[cursive] text-2xl font-normal text-customYellow text-center mb-2">Blog Post</h1>
      <h1 className="font-[poppins] text-5xl font-semibold text-center mb-9"><span className="text-customYellow">La</span>test News & Blogs</h1>
        <div className="flex flex-wrap -m-4">

          {/* For 1 Image */}
          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-400 overflow-hidden">
              <img
                className="lg:h-48 md:h-36 w-full object-cover object-center h-[400px]"
                src="/blog_1.jpeg"
                alt="blog"
              />

              <div className="p-6">
                <h1 className="font-[inter] font-normal text-lg text-customYellow mb-2">
                  10 February 2022
                </h1>
                <p className="leading-relaxed mb-4 font-semibold text-xl">
                Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis
                </p>
                <div className="flex items-center gap-24">
                  <a className=" inline-flex items-center md:mb-2 lg:mb-0 text-gray-400">
                    Learn More
                  </a>

                  <div className="flex items-end gap-3">
                  <BiLike/>
                  <BiCommentDetail className="text-customYellow"/>
                  <IoShareSocialSharp />
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* For 2 Image */}
          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-400 overflow-hidden">
              <img
                className="lg:h-48 md:h-36 w-full object-cover object-center h-[400px]"
                src="/blog_2.jpeg"
                alt="blog"
              />

              <div className="p-6">
                <h1 className="font-[inter] font-normal text-lg text-customYellow mb-2">
                  10 February 2022
                </h1>
                <p className="leading-relaxed mb-4 font-semibold text-xl">
                Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A
                </p>
                <div className="flex items-center gap-24">
                  <a className=" inline-flex items-center md:mb-2 lg:mb-0 text-gray-400">
                    Learn More
                  </a>

                  <div className="flex items-end gap-3">
                  <BiLike/>
                  <BiCommentDetail className="text-customYellow"/>
                  <IoShareSocialSharp />
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* For 3 Image */}
          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-400 overflow-hidden">
              <img
                className="lg:h-48 md:h-36 w-full object-cover object-center h-[400px]"
                src="/blog_3.jpeg"
                alt="blog"
              />

              <div className="p-6">
                <h1 className="font-[inter] font-normal text-lg text-customYellow mb-2">
                  10 February 2022
                </h1>
                <p className="leading-relaxed mb-4 font-semibold text-xl">
                Curabitur rutrum velit ac congue malesuada
                </p>
                <div className="flex items-center gap-24">
                  <a className=" inline-flex items-center md:mb-2 lg:mb-0 text-gray-400">
                    Learn More
                  </a>

                  <div className="flex items-end gap-3">
                  <BiLike/>
                  <BiCommentDetail className="text-customYellow"/>
                  <IoShareSocialSharp />
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
