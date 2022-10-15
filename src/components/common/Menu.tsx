import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import BeginnerSVG from "../../assets/menu/beginner.svg";
import FavoriteSVG from "../../assets/menu/favorite.svg";

const Menu = () => {
  const [path, setPath] = useState<string>("");
  const { pathname } = useLocation();
  const isInfo = () => {
    // TODO: ルートが決まり次第名前を変更
    return path === "/info";
  };
  const isDummy = () => {
    // TODO: ルートが決まり次第名前を変更
    return path === "/";
  };
  const isFavorite = () => {
    // TODO: ルートが決まり次第名前を変更
    return path === "/favorite";
  };

  useEffect(() => {
    setPath(pathname);
  }, [pathname]);
  return (
    <div className="bg-green-700 w-full fixed bottom-0 h-16">
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
              src={BeginnerSVG}
              className={isDummy() ? "h-7 m-auto" : "h-5 m-auto"}
            />
            <p className="text-white font-bold text-xs">メインコンテンツ</p>
          </div>
        </Link>
        <Link
          to="/favorite"
          className="py-2 inline-flex items-center justify-center text-center w-1/3"
        >
          <div className="">
            <img
              src={FavoriteSVG}
              className={isFavorite() ? "h-7 m-auto" : "h-5 m-auto"}
            />
            <p className="text-white font-bold text-xs">お気に入り</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
