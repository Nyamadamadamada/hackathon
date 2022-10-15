import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import BeginnerSVG from "../../assets/menu/beginner.svg";
import HistorySVG from "../../assets/menu/favorite.svg";
import MainSVG from "../../assets/menu/main.svg";

const Menu = () => {
  const [path, setPath] = useState<string>("");
  const { pathname } = useLocation();
  const isInfo = () => {
    return path === "/info";
  };
  const isMain = () => {
    return path === "/";
  };
  const isHistory = () => {
    return path === "/history";
  };

  useEffect(() => {
    setPath(pathname);
  }, [pathname]);
  return (
    <div className="bg-green-700 w-full fixed bottom-0 h-16 items-center">
      <div className="flex h-full divide-x-4 divide-gray-200/50">
        <Link
          to="/info"
          className="py-2 inline-flex items-center justify-center text-center w-1/3"
        >
          <div className="">
            <img
              src={BeginnerSVG}
              className={isInfo() ? "h-7 m-auto" : "h-5 m-auto"}
            />
            <p className="text-white font-bold text-xs">使い方</p>
          </div>
        </Link>
        <Link
          to="/"
          className="py-2 inline-flex items-center justify-center text-center w-1/3"
        >
          <div className="">
            <img
              src={MainSVG}
              className={isMain() ? "h-7 m-auto" : "h-5 m-auto"}
            />
            <p className="text-white font-bold text-xs mt-1">TOP</p>
          </div>
        </Link>
        <Link
          to="/history"
          className="py-2 inline-flex items-center justify-center text-center w-1/3"
        >
          <div className="">
            <img
              src={HistorySVG}
              className={isHistory() ? "h-7 m-auto" : "h-5 m-auto"}
            />
            <p className="text-white font-bold text-xs">履歴</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
