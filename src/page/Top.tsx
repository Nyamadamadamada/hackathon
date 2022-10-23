import { Link } from "react-router-dom";

import Menu from "../components/common/Menu";
import Header from "../components/common/Header";
import DiagnoseModal from "../components/DiagnoseModal";
import { useState } from "react";
import { ItemKeyType } from "../config";

function Top() {
  const [openedDiagnoseModal, setOpenedDiagnoseModal] =
    useState<boolean>(false);
  const [itemKey, setItemKey] = useState<ItemKeyType>("DEFAULT");
  const [opened, setOpened] = useState<boolean>(true);

  const handleClickItem = (key: ItemKeyType) => {
    setItemKey(key);
    setOpened(false);
    setOpenedDiagnoseModal(true);
  };

  const handleCloseDiagnoseModal = () => {
    setOpenedDiagnoseModal(false);
    setOpened(true);
  };

  return (
    <div className="Top text-gray-800">
      <Header />
      <main className="h-full flex justify-center pb-28">
        <div className="flex flex-col text-center">
          <div className="relative">
            <img className="" src="/img/top/banner.png" />
            <a
              href="#attention"
              className="absolute bottom-3 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-orange-700 focus:ring-4 focus:outline-none"
            >
              自己診断はこちら
            </a>
          </div>
          <div className="d-flex flex-column mx-2 mt-5">
            <p className="text-base my-2">
              健康診断書を見るだけで終わらせていませんか？
              <br />
              診断された数値をみて生活改善に活かしましょう。
            </p>
          </div>
          <div className="w-full my-4">
            <h2 className="font-bold text-xl mt-4">要注意項目</h2>
            <p id="attention">気になる項目をクリックしてください。</p>
            <div className="flex flex-wrap justify-center">
              <div
                onClick={() => handleClickItem("HDL_CHOLESTEROL")}
                className="mx-6 mb-6 p-2"
              >
                <img
                  className="w-10 h-10 m-auto"
                  src="/img/top/HDL-cholesterol.png"
                />
                <p className="text-emerald-600 font-bold text-base underline">
                  HDLコレステロール
                </p>
              </div>
              <a href="#" className="mx-6 mb-6 p-2">
                <img
                  className="w-10 h-10 m-auto"
                  src="/img/top/LDL-cholesteroll.png"
                />
                <p className="text-emerald-600 font-bold text-base underline">
                  LDLコレステロール
                </p>
              </a>
              <a href="#" className="mx-6 mb-6 p-2">
                <img
                  className="w-10 h-10 m-auto"
                  src="/img/top/Neutral-fat.png"
                />
                <p className="text-emerald-600 font-bold text-base underline">
                  中性脂肪
                </p>
              </a>
              <a href="#" className="mx-6 mb-6 p-2">
                <img
                  className="w-10 h-10 m-auto"
                  src="/img/top/Blood-glucose-level.png"
                />
                <p className="text-emerald-600 font-bold text-base underline">
                  血糖値
                </p>
              </a>
              <a href="#" className="mx-6 mb-6 p-2">
                <img
                  className="w-10 h-10 m-auto"
                  src="/img/top/Uric-acid-level.png"
                />
                <p className="text-emerald-600 font-bold text-base underline">
                  尿酸
                </p>
              </a>
            </div>
          </div>
        </div>
      </main>
      {openedDiagnoseModal && (
        <DiagnoseModal
          itemKey={itemKey}
          handleCloseDiagnoseModal={handleCloseDiagnoseModal}
        />
      )}

      <Menu opened={opened} />
    </div>
  );
}

export default Top;
