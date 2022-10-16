import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { UserData } from "../../App";

interface Item {
  name: string;
  value: string;
  unit: string;
  standard: string;
  isRed: boolean;
}

const ResultOcr = () => {
  const { item } = useContext(UserData);

  return (
    <div className="">
      <div className="m-3 p-6 bg-white rounded-lg border border-gray-200 shadow-md">
        <div className="mb-4">
          <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            診断結果
          </h3>
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
          <Link
            to="detail/nyosan"
            className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            アドバイスを詳しく見る
          </Link>
        </div>
        <div className="mt-10 p-2 bg-gray-300/20 rounded-lg">
          <h4 className="text-lg ftracking-tight text-gray-900 dark:text-white">
            あなたの数値
          </h4>
          <div className="px-2">
            <ul className="divide-y divide-gray-200 my-4">
              {item.map((data, index) => {
                return (
                  <li className="my-2" key={index}>
                    <p
                      className={
                        data.isRed
                          ? "text-red-600 text-left text-base"
                          : "text-gray-900 text-left text-base"
                      }
                    >
                      {data.name}
                    </p>
                    <table className="w-full my-1">
                      <tr>
                        <th className="w-1/2">あなたの数値</th>
                        <th className="w-1/2">基準値</th>
                      </tr>
                      <tr>
                        <td
                          className={
                            data.isRed ? "text-red-600" : "text-gray-900"
                          }
                        >
                          {data.value}
                          <span className="text-sm">{data.unit}</span>
                        </td>
                        <td>{data.standard}</td>
                      </tr>
                    </table>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultOcr;
