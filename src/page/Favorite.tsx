import Menu from "../components/common/Menu";
import DemoSVG from "../assets/top/demo.svg";

function Favorite() {
  return (
    <div className="Favorite h-screen">
      <main className="h-[calc(100vh_-_4rem)]">
        <div className="py-8 text-center">
          <h1 className="text-lg font-bold text-gray-900">
            ゲストさんのお気に入り
          </h1>
        </div>
        <div className="w-[94%] mx-auto">
          <ul className="flex mx-auto text-sm font-bold text-center bg-gray-100 text-gray-500 rounded-lg overflow-hidden divide-x divide-gray-200 shadow">
            <li className="w-1/3 bg-white">
              <a
                href="#"
                className="inline-block p-4 w-full text-gray-900 "
                aria-current="page"
              >
                お薬
              </a>
            </li>
            <li className="w-1/3">
              <a href="#" className="inline-block p-4 w-full">
                体調
              </a>
            </li>
            <li className="w-1/3">
              <a href="#" className="inline-block p-4 w-full">
                記録
              </a>
            </li>
          </ul>
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

export default Favorite;
