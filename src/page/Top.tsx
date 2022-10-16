import { Link } from "react-router-dom";

import Menu from "../components/common/Menu";
import OCR from "../util/OCR";

function Top() {
  return (
    <div className="Top">
      <div>
        <div className="font-bold p-2 text-xl">
          <span className="block leading-4">健診</span>
          <span>その後くん</span>
        </div>
      </div>
      <main className="h-full flex justify-center pb-28">
        <div className="flex flex-col text-center">
          <div className="fadeIn">
            <div className="d-flex flex-column mx-2 mt-5">
              <p className="text-3xl font-bold">
                健康診断を
                <br />
                診断だけで終わらせない
              </p>
              <p className="text-base my-2">
                健診その後くんは健康診断結果を撮影するだけで、健康になるための行動を提案してくれる「健康促進サービス」です
              </p>
            </div>
          </div>
          <div className="flex px-8 my-4">
            <img className="w-1/2 fadeIn delay-1" src="/img/top/main.png" />
            <div className="w-1/2">
              <img className="fadeIn delay-2" src="/img/top/comment1.png" />
              <img
                className="mt-2 fadeIn delay-3"
                src="/img/top/comment2.png"
              />
            </div>
          </div>
          <div className="w-full">
            <OCR />
          </div>
        </div>
      </main>
      <Menu />
    </div>
  );
}

export default Top;
