import { useContext } from "react";
import { UserData } from "../App";
import Menu from "../components/common/Menu";
import { nyosan } from "../config/common";

function Detail() {
  const { item } = useContext(UserData);
  const n = item.find((value) => {
    return value.isRed;
  });

  return (
    <div className="Detail">
      <main className="h-full pb-28">
        <div className="p-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">診断結果の詳細</h1>
        </div>
        <div className="w-[94%] mx-auto">
          <div className="block mx-auto mt-6 p-4 bg-white rounded-lg border border-gray-200">
            <p className="text-lg">
              あなたの{n?.name} : {n?.value} ({n?.unit})
            </p>
            <ul className="divide-y divide-gray-200 my-4">
              <li className="py-3">
                <p className="w-4/5 text-base text-gray-900">
                  正常値を超えています。
                </p>
                <p className="w-4/5 text-base text-gray-900">放置すると.....</p>
                <p className="mt-5">
                  <span className="text-5xl text-red-500">
                    「{nyosan.ill[0].name}」
                  </span>
                  になります。
                </p>
              </li>
              <li className="p-3 flex">
                <p className="w-[94%] text-base text-gray-900 mx-auto">
                  {nyosan.ill[0].description}
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-[94%] mx-auto">
          <div className="block mx-auto mt-6 p-4 bg-white rounded-lg border border-gray-200">
            <p className="text-3xl mb-3">警告</p>
            <div>
              <img src={nyosan.ill[0].caution.level.image} alt="説明画像" />
            </div>
            <p className="mt-5">{nyosan.ill[0].caution.description}</p>
            <p className="mt-5 text-xl">
              {nyosan.ill[0].caution.level.name}レベル
            </p>
            <div className="w-[94%] m-auto">
              <div className="my-4 flex">
                <ul className="flex">
                  {[1, 2, 3, 4, 5].map((i) => {
                    if (i <= nyosan.ill[0].caution.level.star) {
                      return (
                        <li className="p-2" key={i}>
                          <img src={"/img/star_icon.png"} alt="星の画像" />
                        </li>
                      );
                    }
                    return (
                      <li className="p-2" key={i}>
                        <img src={"/img/star_clear_icon.png"} alt="星の画像" />
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div className="block mx-auto mt-6 p-4 bg-white rounded-lg border border-gray-200">
            <div className="flex text">
              <p className="text-2xl mr-3">改善案</p>
              <p className="font-bold text-white text-xl bg-green-600/50 rounded-full w-10 h-10 text-center pt-1">
                {nyosan.nextStep.category}
              </p>
            </div>
            <p className="mt-3">{nyosan.nextStep.description}</p>
            <div className="w-[94%] m-auto mt-3">
              <img src={nyosan.nextStep.img[0]} alt="グッドフード画像" />
            </div>
            <div className="w-[94%] m-auto mt-3">
              <img src={nyosan.nextStep.img[1]} alt="バッドフード画像" />
            </div>
          </div>
        </div>
      </main>
      <Menu />
    </div>
  );
}

export default Detail;
