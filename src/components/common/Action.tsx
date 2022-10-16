import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation"; // スタイルをインポート
import "swiper/css/pagination"; // スタイルをインポート

const Action = () => {
  return (
    <>
      <div className="block mx-auto mt-6 p-4 bg-white rounded-lg border border-gray-200">
        <p className="text-2xl text-center font-bold my-3">
          今週（2022年10月16日〜2022年10月22日）は、これを食べましょう！
        </p>

        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <div className="block mx-auto p-4 bg-white rounded-lg">
              <img src="/img/recipe/hourensou-ohitashi.jpeg" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="block mx-auto p-4 bg-white rounded-lg">
              <h2 class="text-2xl font-medium leading-tight text-gray-800">
                食材
              </h2>
              <ul class="list-disc">
                <li>ほうれん草</li>
                <li>塩</li>
                <li>〇〇</li>
                <li>〇〇</li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src="http://placehold.jp/700x400.png?text=3" alt="" />
          </SwiperSlide>
        </Swiper>

        <p className="text-base text-center text-gray-900">
          ほうれん草のおひたし
        </p>
      </div>
    </>
  );
};

export default Action;
