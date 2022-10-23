import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation"; // スタイルをインポート
import "swiper/css/pagination"; // スタイルをインポート

const Action = () => {
  const [ok, setOk] = useState<boolean>(false);
  const handleClick = () => {
    setOk(true);
  };
  return (
    <>
      <div className="relative block mx-auto mt-6 p-4 bg-white rounded-lg border border-gray-200">
        <p>次のアクション</p>
        <p className="text-xl text-center font-bold my-3">
          今週（〜2022年10月22日まで）
          <br />
          これを食べましょう！
        </p>
        <p className="text-base text-center text-gray-900 mb-3">
          ほうれん草のおひたし
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
            <div className="block my-auto bg-white rounded-lg mx-20">
              <h4 className="text-lg text-center text-gray-800">食材</h4>
              <ul className="list-disc">
                <li>ほうれん草：2束 </li>
                <li>塩：大匙1杯</li>
                <li>好みのだし汁や水：200ml</li>
                <li>醤油：小さじ5</li>
                <li>みりん：小さじ5</li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="block my-auto bg-white rounded-lg mx-20">
              <h4 className="mt-2 text-lg text-center text-gray-800">
                1.ほうれんそうを茹でる
              </h4>
              <p className="mt-4">
                まず、ほうれん草は根元に切り込みを入れて洗い、ティースプーン山盛り1杯の塩を加えた熱湯でゆでます
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
        {ok && (
          <img
            src="/img/ok.png"
            className="absolute top-20 left-0 z-30 zoomIn"
          />
        )}
        <div className="mx-auto w-5/6 pb-8 flex justify-center items-end my-3">
          <button
            onClick={handleClick}
            className={
              "w-full bg-green-700 text-white px-5 py-3 text-center h-full whitespace-nowrap font-bold"
            }
          >
            アクション完了
          </button>
        </div>
      </div>
    </>
  );
};

export default Action;
