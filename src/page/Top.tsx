import { Link } from "react-router-dom";

import DemoSVG from "../assets/top/demo.svg";
import Menu from "../components/common/Menu";

function Top() {
  return (
    <div className="Top h-screen">
      <main className="h-full flex justify-center items-center">
        <div className="flex flex-col text-center">
          <div className="">
            <div className="d-flex flex-column">
              <p className="fadeIn text-3xl font-bold underline">
                TOP画面
                <br />
                健康診断書をアップしてください
              </p>
            </div>
          </div>
          <div className="fadeIn delay-1">
            <img src={DemoSVG} />
          </div>
          <div className="w-full">結果</div>
        </div>
      </main>
      <Menu />
    </div>
  );
}

export default Top;
