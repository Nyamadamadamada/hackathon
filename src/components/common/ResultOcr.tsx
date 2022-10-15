import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import BeginnerSVG from "../../assets/menu/beginner.svg";
import HistorySVG from "../../assets/menu/favorite.svg";
import MainSVG from "../../assets/menu/main.svg";

type Props = {
  data: { name: string; value: string }[];
};

const ResultOcr = ({ data }: Props) => {
  return (
    <div className="m-3 p-6 bg-white rounded-lg border border-gray-200 shadow-md">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        診断結果
      </h5>
      <div className="flex">
        <div className="w-1/2">
          <p className="mb-3 font-normal text-gray-700 text-lg">
            <span className="font-bold">尿酸</span>に異常がみられます
          </p>
          <p className="mb-3 font-normal text-gray-700 text-base">
            アドバイスを見て、生活を見直しましょう
          </p>
        </div>
        <img className="w-1/2 p-3" src="/img/top/ng_doctor.png" />
      </div>
      <a
        href="#"
        className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        アドバイスを詳しく見る
      </a>
    </div>
  );
};

export default ResultOcr;
