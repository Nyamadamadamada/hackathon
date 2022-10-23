import { useContext } from "react";
import { UserData } from "../App";
import Menu from "../components/common/Menu";
import { nyosan } from "../config/nyosan";

function SafeDetail() {
  window.scrollTo(0, 0);
  const { item } = useContext(UserData);
  const n = item.find((value) => {
    return !value.isRed;
  });

  return (
    <div className="Detail">
      <main className="h-full pb-28">
        <div className="p-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">診断結果の詳細</h1>
        </div>
        <div className="w-[94%] mx-auto">
          <div className="block mx-auto mt-6 p-4 bg-white rounded-lg border border-gray-200">
            <p className="text-lg">
              あなたの{n?.name} : {n?.value} ({n?.unit})
            </p>
            <ul className="divide-y divide-gray-200 my-4">
              <li className="py-3">
                <p className="w-4/5 text-base text-gray-900">正常値です</p>
                <p className="my-5 text-5xl text-blue-500">すばらしい！！</p>
                <p className="w-4/5 text-base text-gray-900">
                  この調子で生活しましょう
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-[94%] mx-auto">
          <div className="block mx-auto mt-6 p-4 bg-white rounded-lg border border-gray-200">
            <p className="text-xl mb-3">ワンポイントアドバイス</p>
            <div>
              <img
                src="https://img.freepik.com/free-photo/healthy-young-asian-runner-woman-warm-up-the-body-stretching-before-exercise-and-yoga_7861-1086.jpg?t=st=1665893702~exp=1665894302~hmac=469ca23e1af31e146e656de6d4cf28ea46df9486a061bd57b13275c7971d6823"
                alt="説明画像"
              />
            </div>
            <p className="mt-5">
              筋トレをすると、体内の脂肪が分解され血中のHDLコレステロールが増えます。
              増加に伴い、LDLコレステロールの回収率も良くなります。
            </p>
          </div>
        </div>
      </main>
      <Menu />
    </div>
  );
}

export default SafeDetail;
