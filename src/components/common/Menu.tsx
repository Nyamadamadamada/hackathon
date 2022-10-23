import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import BeginnerSVG from "../../assets/menu/beginner.svg";
import HistorySVG from "../../assets/menu/favorite.svg";
import MainSVG from "../../assets/menu/main.svg";
import CalenderSVG from "../../assets/menu/calender.svg";

interface Props {
  opened: boolean;
}

const Menu = ({ opened }: Props) => {
  return (
    <div
      className={`${
        opened ? "fadeOpen" : "fadeClose"
      } border-t-2 border-gray-100 w-full fixed bottom-0 h-14 items-center`}
    >
      <div className="flex h-full">
        <Link
          to="/info"
          className="py-2 inline-flex items-center justify-center text-center w-1/4"
        >
          <div className="">
            <img src={BeginnerSVG} className={"h-5 m-auto"} />
            <p className="text-gray-800 text-xs mt-1">使い方</p>
          </div>
        </Link>
        <Link
          to="/"
          className="py-2 inline-flex items-center justify-center text-center w-1/4"
        >
          <div className="">
            <img src={MainSVG} className={"h-5 m-auto"} />
            <p className="text-gray-800 text-xs mt-1">TOP</p>
          </div>
        </Link>
        <Link
          to="/history"
          className="py-2 inline-flex items-center justify-center text-center w-1/4"
        >
          <div className="">
            <img src={CalenderSVG} className={"h-5 m-auto"} />
            <p className="text-gray-800 text-xs mt-1">今週の改善</p>
          </div>
        </Link>
        <Link
          to="/history"
          className="py-2 inline-flex items-center justify-center text-center w-1/4"
        >
          <div className="">
            <img src={HistorySVG} className={"h-5 m-auto"} />
            <p className="text-gray-800 text-xs mt-1">履歴</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
