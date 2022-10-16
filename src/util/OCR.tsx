// モジュールのインストールが必要
//npm install --save tesseract.js

import { useContext, useState } from "react";
import { createWorker } from "tesseract.js";
import { UserData } from "../App";
import ResultOcr from "../components/common/ResultOcr";
// 抽出対象の検査項目(めちゃくちゃハードコーディング)
const elements = [
  {
    en: "HDL-cholesterol",
    ja: "HDLコレステロール",
    unit: "mg/dl",
    standard: "40以上",
  },
  {
    en: "LDL-cholesteroll",
    ja: "LDLコレステロール",
    unit: "mg/dl",
    standard: "70〜139",
  },
  {
    en: "Neutral-fat",
    ja: "中性脂肪",
    unit: "mg/dl",
    standard: "50〜150",
  },

  {
    en: "GOT",
    ja: "アスパラギン酸アミノ基転移酵素",
    unit: "IU/L",
    standard: "8〜38",
  },
  {
    en: "GPT",
    ja: "アラニンアミノ基転移酵素",
    unit: "IU/L",
    standard: "4〜44",
  },
  {
    en: "y-GTP",
    ja: "γ-グルタミルトランスフェラーゼ",
    unit: "IU/L",
    standard: "16〜73",
  },
  {
    en: "Blood-glucose-level",
    ja: "血糖値",
    unit: "mg/dl",
    standard: "70〜110",
  },
  {
    en: "HbA1c",
    ja: "グリコヘモグロビン",
    unit: "%",
    standard: "4.2〜6.2",
  },
  {
    en: "Red-blood-cell",
    ja: "赤血球",
    unit: "X10^4/mm3",
    standard: "420〜530",
  },
  {
    en: "Mcv",
    ja: "平均赤血球容積",
    unit: "μ3",
    standard: "86〜96",
  },
  {
    en: "MCH",
    ja: "平均赤血球ヘモグロビン量",
    unit: "pg",
    standard: "28〜34",
  },
  {
    en: "MCHC",
    ja: "平均赤血球ヘモグロビン濃度",
    unit: "%",
    standard: "31〜36",
  },
  {
    en: "White-blood-cells",
    ja: "白血球",
    unit: "/μl",
    standard: "4000〜8500",
  },
  {
    en: "Uric-acid-level",
    ja: "尿酸",
    unit: "mg/dL",
    standard: "3〜7",
  },
];

const Reading = () => {
  return (
    <div role="status">
      <svg
        className="inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-green-800"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export interface Item {
  name: string;
  value: string;
  unit: string;
  standard: string;
  isRed: boolean;
}

const OCR = () => {
  console.log("this is ocr");
  const { item, setItem } = useContext(UserData);

  const [file, setFile] = useState<any>();
  // const [data, setData] = useState<Item[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const worker = createWorker({
    logger: (m) => console.log(m),
  });

  const tryOcr = async () => {
    await worker.load();
    await worker.loadLanguage("eng");
    await worker.initialize("eng");
    const {
      data: { text },
    } = await worker.recognize(file);
    await worker.terminate();

    // OCR結果の解析、必要データ抽出
    const lines = text.split(/\n/);

    const tmpData: Item[] = [];

    lines.forEach((line) => {
      const words = line.split(" ");
      const matchWord = elements.find((item) => {
        return item.en === words[0];
      });
      if (typeof matchWord !== "undefined") {
        console.log(words[0] + " ： " + words[1]);
        tmpData.push({
          name: matchWord.ja,
          value: words[1],
          unit: matchWord.unit,
          standard: matchWord.standard,
          isRed: matchWord.ja === "尿酸",
        });
      }
    });
    console.log(tmpData);
    setItem(tmpData);
    setIsLoading(false);
  };

  // fileData 取得
  const handleChange = (e: any) => {
    console.log("file data 取得");
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
  };

  const handleClick = async () => {
    console.log("handleClick here!"); // deb
    if (!file) return;
    setIsLoading(true);
    await tryOcr();
  };

  return (
    <div className="App">
      <input type="file" onChange={handleChange} />
      <br />
      <div className="mx-auto w-5/6 pb-8 flex justify-center items-end my-3">
        <button
          onClick={handleClick}
          disabled={isLoading}
          className={
            isLoading
              ? "w-full bg-gray-700 text-gray-500 px-5 py-3 text-center h-full whitespace-nowrap font-bold"
              : "w-full bg-green-700 text-white px-5 py-3 text-center h-full whitespace-nowrap font-bold"
          }
        >
          アドバイスをもらう
        </button>
      </div>
      {isLoading && <Reading />}
      {item.length > 0 && !isLoading && <ResultOcr />}
    </div>
  );
};

export default OCR;
