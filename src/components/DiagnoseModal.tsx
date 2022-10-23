import { useEffect, useRef, useState, UIEvent, ChangeEvent } from "react";
import { findDOMNode } from "react-dom";
import { Link } from "react-router-dom";

import {
  ITEM,
  ItemKeyType,
  GENDER,
  Range,
  isSelecableGender,
  SelecableGender,
  RiskLevel,
} from "../config";
import { getRiskLevel } from "../util/getRiskLevel";

interface Props {
  itemKey: ItemKeyType;
  handleCloseDiagnoseModal: () => void;
}

const DiagnoseModal = ({ itemKey, handleCloseDiagnoseModal }: Props) => {
  const scrollBottomRef = useRef<HTMLDivElement>(null);
  const [selectedRange, setSelectedRange] = useState<Range | undefined>();
  const [selectedGender, setSelectedGender] = useState<
    SelecableGender | undefined
  >();
  const [diagnoseResult, setDiagnoseResult] = useState<RiskLevel | undefined>();

  const handleScroll = (event: UIEvent<HTMLElement>) => {
    if (event.currentTarget.scrollTop === 0) handleCloseDiagnoseModal();
  };
  const handleChangeRange = (range: Range) => {
    setSelectedRange(range);
    setDiagnoseResult(getRiskLevel(range.status));
  };
  const handleChangeGender = (event: ChangeEvent<HTMLInputElement>) => {
    if (!isSelecableGender(event.target.value)) return;
    setSelectedGender(event.target.value);
  };
  const rangeRadio = () => {
    if (!isSelecableGender(selectedGender)) return <div></div>;
    return (
      <div className="inline-radio">
        {ITEM[itemKey].range[selectedGender]?.map((range, index) => (
          <div key={index} className="fadeIn radio-wrap">
            <input
              type="radio"
              name="range"
              onChange={() => handleChangeRange(range)}
            />
            <label htmlFor="range" className="text-gray-500">
              {range.min}~{range.max}
              <span>{ITEM[itemKey].unit}</span>
            </label>
          </div>
        ))}
      </div>
    );
  };

  useEffect(() => {
    // 滑らかにモーダルが開く
    scrollBottomRef?.current?.scrollBy({
      top: 1, // ＋の値ならなんでもOK
      left: 0,
      behavior: "smooth",
    });
    if (typeof ITEM[itemKey].range.both !== "undefined") {
      setSelectedGender("both");
    }
  }, []);
  return (
    <div
      className="diagnoseModal container"
      ref={scrollBottomRef}
      onScroll={handleScroll}
    >
      <section className="diagnoseModal-area opacity-0"></section>
      <section className="diagnoseModal-area">
        <div className="block pb-6 px-6 bg-white rounded-t-2xl border border-gray-200 shadow-md w-full h-full">
          <hr className="border-2 border-gray-300 w-1/3 my-3 mx-auto" />
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {ITEM[itemKey].name}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {ITEM[itemKey].description}
          </p>
          <div className="mt-4">
            <p className="text-base my-2">健康診断の結果を選択</p>
            {/* 基準範囲が男女別にある場合のみ表示 */}
            {selectedGender !== "both" && (
              <div className="inline-radio my-4">
                {GENDER.map((item) => (
                  <div key={item.id} className="radio-wrap">
                    <input
                      type="radio"
                      name="gender"
                      onChange={handleChangeGender}
                      value={item.id}
                    />
                    <label className="text-gray-500">{item.name}</label>
                  </div>
                ))}
              </div>
            )}
            {rangeRadio()}
          </div>
          {selectedRange && (
            <div className="mt-4">
              <p className="text-base">
                <span className="">あなたの健康リスク...</span>
                <span className="fadeIn delay-3 text-4xl font-bold">
                  {diagnoseResult}
                </span>
              </p>
              <div className="text-center mt-3 fadeInSmall delay-4">
                <Link
                  to="/detail/nyosan"
                  className="transition-all p-2 inline-block bg-emerald-600 text-white border-b-4 border-emerald-800 shadow-xl hover:mt-[3px] hover:bg-emerald-500 hover:border-b-0"
                >
                  改善アドバイスをもらう
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default DiagnoseModal;
