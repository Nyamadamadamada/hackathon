import Action from "../components/common/Action";
import HistoryItem from "../components/common/HistoryItem";
import Menu from "../components/common/Menu";
import DemoSVG from "../assets/top/demo.svg";
import { useState } from "react";

function History() {
  const [selectedTab, setSelectedTab] = useState(1); // 選択されているタブ

  return (
    <div className="History h-screen">
      <main className="h-[calc(100vh_-_4rem)]">
        <div className="py-8 text-center">
          <h1 className="text-lg font-bold text-gray-900">診断結果の履歴</h1>
        </div>
        <div className="w-[94%] mx-auto">
          <ul className="flex mx-auto text-sm font-bold text-center bg-gray-100 text-gray-500 rounded-lg overflow-hidden divide-x divide-gray-200 shadow">
            <li className="w-1/2 bg-white">
              <a
                href="#"
                className="inline-block p-4 w-full text-gray-900 "
                aria-current="page"
                onClick={() => setSelectedTab(1)}
              >
                履歴
              </a>
            </li>
            <li className="w-1/2">
              <a
                href="#"
                className="inline-block p-4 w-full"
                onClick={() => setSelectedTab(2)}
              >
                アクション
              </a>
            </li>
          </ul>
          {selectedTab === 1 ? <HistoryItem /> : <Action />}
        </div>
      </main>
      <Menu />
    </div>
  );
}

export default History;
