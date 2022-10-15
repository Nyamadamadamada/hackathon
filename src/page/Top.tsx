import { Link } from "react-router-dom";

import DemoSVG from "../assets/top/demo.svg";

function Top() {
  return (
    <div className="Top h-screen">
      <main className="h-full flex justify-center items-center">
        <div className="flex flex-col text-center">
          <div className="">
            <div className="d-flex flex-column">
              <p className="fadeIn text-3xl font-bold underline">
                キャッチーなサイトの言葉
                <br />
                画像にしてください
              </p>
            </div>
          </div>
          <div className="fadeIn delay-1">
            <img src={DemoSVG} />
          </div>
          <div className="w-full">
            <Link to="info">
              <div className="text-center w-full h-1/6 inline-flex justify-center items-end pb-8">
                <div className="w-5/6 bg-green-700 text-white px-5 py-3">
                  はじめてみましょう
                </div>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Top;
