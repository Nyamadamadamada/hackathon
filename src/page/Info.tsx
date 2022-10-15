import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import DemoSVG from "../assets/top/demo.svg";
import Menu from "../components/common/Menu";
import "swiper/css/bundle";

function Info() {
  return (
    <div className="Info h-screen">
      <main className="h-[calc(100vh_-_4rem)]">
        <div className="h-full w-full ">
          <Swiper
            pagination={true}
            modules={[Pagination, Navigation]}
            observeParents={true}
            observer={true}
            className="h-5/6 w-full"
          >
            <SwiperSlide className="flex flex-col justify-center items-center">
              <div className="mt-4">
                <img src={DemoSVG} />
              </div>
              <div className="px-4 mt-8">
                <p className="text-3xl text-center font-bold my-3">
                  いいかんじに説明タイトル
                </p>
                <p className="text-lg">
                  説明用のテキスト説明用のテキスト説明用のテキスト説明用のテキスト
                  説明用のテキスト説明用のテキスト説明用のテキスト説明用のテキスト説明用のテキスト,
                  説明用のテキスト
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className=" flex flex-col justify-center items-center">
              <div className="mt-4">
                <img src={DemoSVG} />
              </div>
              <div className="px-4 mt-8">
                <p className="text-3xl text-center font-bold my-3">
                  それっぽいタイトル
                </p>
                <p className="text-lg">
                  説明用のテキスト説明用のテキスト説明用のテキスト説明用のテキスト
                  説明用のテキスト説明用のテキスト説明用のテキスト説明用のテキスト説明用のテキスト
                  説明用のテキスト
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="mx-auto h-1/6 w-5/6 pb-8 flex justify-center items-end">
            <Link to="/" className="w-full">
              <div className="w-full bg-green-700 text-white px-5 py-3 text-center h-full whitespace-nowrap">
                さぁ、健康になりましょう
              </div>
            </Link>
          </div>
        </div>
      </main>
      <Menu />
    </div>
  );
}

export default Info;
