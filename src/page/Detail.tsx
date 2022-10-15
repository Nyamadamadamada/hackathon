import Menu from "../components/common/Menu";
import DemoSVG from "../assets/top/demo.svg";

function History() {
  return (
    <div className="History h-screen">
      <main className="h-[calc(100vh_-_4rem)]">
        <div className="py-8 text-center">
          <h1 className="text-lg font-bold text-gray-900">診断結果の詳細</h1>
        </div>
        <div className="w-[94%] mx-auto">
          <div className="block mx-auto mt-6 p-4 bg-white rounded-lg border border-gray-200">
            <p className="text-lg">
              10<span className="ml-1 text-sm">件</span>
            </p>
            <ul className="divide-y divide-gray-200 my-4">
              <li className="py-3 flex">
                <div className="w-1/5 p-2">
                  <img src={DemoSVG} className="object-center w-full h-full" />
                </div>
                <p className="w-4/5 text-base text-gray-900">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </li>
              <li className="py-3 flex">
                <div className="w-1/5 p-2">
                  <img src={DemoSVG} className="object-center w-full h-full" />
                </div>
                <p className="w-4/5 text-base text-gray-900">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </li>
              <li className="py-3 flex">
                <div className="w-1/5 p-2">
                  <img src={DemoSVG} className="object-center w-full h-full" />
                </div>
                <p className="w-4/5 text-base text-gray-900">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </main>
      <Menu />
    </div>
  );
}

export default History;
