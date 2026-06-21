import React, { useRef, useState } from "react";
import Input from "../../components/ui/Input/Input";
import { TextAlignJustify } from "lucide-react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../../App.css";
import FeedUserCard from "../../components/FeedUserCard/FeedUserCard";

function Feed() {
  return (
    <section>
      <div className="max-w-[400px] mx-auto px-5 py-5 h-dvh flex items-center">
        <div className="relative w-full h-full bg-[#101010] rounded-xl">
          <div className="absolute pointer-events-none z-10 w-full h-full flex flex-col justify-between">
            <div className="pt-5 px-5 flex justify-between">
              <Input
                placeholder="aa"
                className="pointer-events-auto mr-3 text-white w-full placeholder:text-white h-8.5 font-light text-base"
              />
              <div className="w-[34px] h-[34px] shrink-0">
                <button className="pointer-events-auto w-full h-full flex items-center justify-center bg-white/20 rounded-full shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[5px] border border-white/30">
                  <TextAlignJustify color="white" size={16} />
                </button>
              </div>
            </div>
          </div>
          <Swiper
            direction={"vertical"}
            modules={[Pagination]}
            className="mySwiper h-full"
          >
            <SwiperSlide className="relative " style={{ backgroundImage: "url('../../../public/img.jpg')" }}
>
              <div className="h-full">
                <div className="absolute bottom-0 left-0 w-full">
                  <FeedUserCard />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="relative " style={{ backgroundImage: "url('../../../public/img.jpg')" }}
>
              <div className="h-full">
                <div className="absolute bottom-0 left-0 w-full">
                  <FeedUserCard />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Feed;
