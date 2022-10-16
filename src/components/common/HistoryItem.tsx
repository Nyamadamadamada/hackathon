import { useContext, useState } from "react";
import { UserData } from "../../App";

const HistoryItem = () => {
  const { item } = useContext(UserData);

  return item.length ? (
    <div className="m-3 p-6 bg-white rounded-lg border border-gray-200 shadow-md">
      <section className="accordion">
        <input id="block-01" type="checkbox" className="toggle" />
        <label className="Label rounded-md" htmlFor="block-01">
          <p className="text-base text-gray-900">利用履歴：2022年10月16日</p>
          <p className="text-base text-red-600 mt-2">
            NG項目<span className="ml-2">尿酸</span>
          </p>
        </label>
        <div className="content">
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
      </section>
    </div>
  ) : (
    <div className="m-3 p-6 bg-white rounded-lg border border-gray-200 shadow-md">
      <section className="accordion">
        <p>まだ履歴がありません</p>
      </section>
    </div>
  );
};

export default HistoryItem;
