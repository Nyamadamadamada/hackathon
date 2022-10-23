import { useContext } from "react";
import { UserData } from "../App";
import Menu from "../components/common/Menu";
import { nyosan } from "../config/nyosan";

function Detail() {
  window.scrollTo(0, 0);

  const { item } = useContext(UserData);
  const n = item.find((value) => {
    return value.isRed;
  });

  return (
    <div className="Detail">
      <main className="h-full pb-28">
        <div className="p-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">診断結果の詳細</h1>
        </div>
        <div className="w-[94%] mx-auto">
          <div className="block mx-auto mt-6 p-4 bg-white rounded-lg border border-gray-200">
            <p className="text-xl font-bold">
              あなたの{n?.name} : {n?.value} ({n?.unit})
            </p>
            <ul className="divide-y divide-gray-200 my-4">
              <li className="py-3">
                <p className="w-4/5 text-base text-gray-900">
                  正常値を超えています。
                </p>
                <p className="w-4/5 text-base text-gray-900">放置すると.....</p>
                <p className="mt-5">
                  <span className="text-5xl text-red-500">
                    「{nyosan.ill[0].name}」
                  </span>
                  になります。
                </p>
              </li>
              <li className="p-3 flex">
                <p className="w-[94%] text-base text-gray-900 mx-auto">
                  {nyosan.ill[0].description}
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-[94%] mx-auto">
          <div className="block mx-auto mt-6 p-4 bg-white rounded-lg border border-gray-200">
            <p className="text-3xl mb-5  bg-red-700 rounded-full text-white text-center">
              警告
            </p>
            <div>
              <img src={nyosan.ill[0].caution.level.image} alt="説明画像" />
            </div>
            <p className="mt-5 text-lg">{nyosan.ill[0].caution.description}</p>
            <p className="mt-5 text-xl">{nyosan.ill[0].caution.level.name}</p>
            <div className="w-[94%] m-auto">
              <div className="my-4 flex">
                <ul className="flex">
                  {[1, 2, 3, 4, 5].map((i) => {
                    if (i <= nyosan.ill[0].caution.level.star) {
                      return (
                        <li className="p-2" key={i}>
                          <img src={"/img/star_icon.png"} alt="星の画像" />
                        </li>
                      );
                    }
                    return (
                      <li className="p-2" key={i}>
                        <img src={"/img/star_clear_icon.png"} alt="星の画像" />
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div className="block mx-auto mt-6 p-4 bg-white rounded-lg border border-gray-200">
            <div className="flex text">
              <p className="text-2xl mr-3">改善案</p>
              <p className="font-bold text-white text-xl bg-green-600/50 rounded-full w-10 h-10 text-center pt-1">
                {nyosan.nextStep.category}
              </p>
            </div>
            <p className="mt-3">{nyosan.nextStep.description}</p>
            <div className="w-[94%] m-auto mt-3">
              <img src={nyosan.nextStep.img[0]} alt="グッドフード画像" />
            </div>
            <div className="w-[94%] m-auto mt-3">
              <img src={nyosan.nextStep.img[1]} alt="バッドフード画像" />
            </div>
          </div>
        </div>
        <div
          className="mt-7"
          dangerouslySetInnerHTML={{
            __html: `<table border="0" cellpadding="0" cellspacing="0"><tr><td><div style="border:1px solid #95a5a6;border-radius:.75rem;background-color:#FFFFFF;width:94%;margin:3%;padding:5px;text-align:center;overflow:hidden;"><table><tr><td style="width:240px"><a href="https://hb.afl.rakuten.co.jp/ichiba/2c4cacdc.af65d733.2c4cacdd.f1159045/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fafc%2F01116x03%2F&link_type=picttext&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0dGV4dCIsInNpemUiOiIyNDB4MjQwIiwibmFtIjoxLCJuYW1wIjoicmlnaHQiLCJjb20iOjEsImNvbXAiOiJkb3duIiwicHJpY2UiOjEsImJvciI6MSwiY29sIjoxLCJiYnRuIjoxLCJwcm9kIjowLCJhbXAiOmZhbHNlfQ%3D%3D" target="_blank" rel="nofollow sponsored noopener" style="word-wrap:break-word;"  ><img src="https://hbb.afl.rakuten.co.jp/hgb/2c4cacdc.af65d733.2c4cacdd.f1159045/?me_id=1199881&item_id=10033084&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Fafc%2Fcabinet%2Fitemimg_supple%2Fimgrc0089741471.jpg%3F_ex%3D240x240&s=240x240&t=picttext" border="0" style="margin:2px" alt="[商品価格に関しましては、リンクが作成された時点と現時点で情報が変更されている場合がございます。]" title="[商品価格に関しましては、リンクが作成された時点と現時点で情報が変更されている場合がございます。]"></a></td><td style="vertical-align:top;width:248px;"><p style="font-size:12px;line-height:1.4em;text-align:left;margin:0px;padding:2px 6px;word-wrap:break-word"><a href="https://hb.afl.rakuten.co.jp/ichiba/2c4cacdc.af65d733.2c4cacdd.f1159045/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fafc%2F01116x03%2F&link_type=picttext&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0dGV4dCIsInNpemUiOiIyNDB4MjQwIiwibmFtIjoxLCJuYW1wIjoicmlnaHQiLCJjb20iOjEsImNvbXAiOiJkb3duIiwicHJpY2UiOjEsImJvciI6MSwiY29sIjoxLCJiYnRuIjoxLCJwcm9kIjowLCJhbXAiOmZhbHNlfQ%3D%3D" target="_blank" rel="nofollow sponsored noopener" style="word-wrap:break-word;"  >高めの尿酸値を下げる AFC ルテオリンGOLD 30日分 3個セット【機能性表示食品】【1世帯様4セットまで】</a><br><span >価格：4536円（税込、送料無料)</span> <span style="color:#BBB">(2022/10/16時点)</span></p><div style="margin:10px;"><a href="https://hb.afl.rakuten.co.jp/ichiba/2c4cacdc.af65d733.2c4cacdd.f1159045/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fafc%2F01116x03%2F&link_type=picttext&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0dGV4dCIsInNpemUiOiIyNDB4MjQwIiwibmFtIjoxLCJuYW1wIjoicmlnaHQiLCJjb20iOjEsImNvbXAiOiJkb3duIiwicHJpY2UiOjEsImJvciI6MSwiY29sIjoxLCJiYnRuIjoxLCJwcm9kIjowLCJhbXAiOmZhbHNlfQ%3D%3D" target="_blank" rel="nofollow sponsored noopener" style="word-wrap:break-word;"  ><img src="https://static.affiliate.rakuten.co.jp/makelink/rl.svg" style="float:left;max-height:27px;width:auto;margin-top:0"></a><a href="https://hb.afl.rakuten.co.jp/ichiba/2c4cacdc.af65d733.2c4cacdd.f1159045/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fafc%2F01116x03%2F%3Fscid%3Daf_pc_bbtn&link_type=picttext&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0dGV4dCIsInNpemUiOiIyNDB4MjQwIiwibmFtIjoxLCJuYW1wIjoicmlnaHQiLCJjb20iOjEsImNvbXAiOiJkb3duIiwicHJpY2UiOjEsImJvciI6MSwiY29sIjoxLCJiYnRuIjoxLCJwcm9kIjowLCJhbXAiOmZhbHNlfQ==" target="_blank" rel="nofollow sponsored noopener" style="word-wrap:break-word;"  ><div style="float:right;width:41%;height:27px;background-color:#bf0000;color:#fff!important;font-size:12px;font-weight:500;line-height:27px;margin-left:1px;padding: 0 12px;border-radius:16px;cursor:pointer;text-align:center;">楽天で購入</div></a></div></td></tr></table></div><br><p style="color:#000000;font-size:12px;line-height:1.4em;margin:5px;word-wrap:break-word"></p></td></tr></table>
            <table border="0" cellpadding="0" cellspacing="0"><tr><td><div style="border:1px solid #95a5a6;border-radius:.75rem;background-color:#FFFFFF;width:94%;margin:3%;padding:5px;text-align:center;overflow:hidden;"><table><tr><td style="width:240px"><a href="https://hb.afl.rakuten.co.jp/ichiba/2ae12351.5d0c72f6.2ae12352.776c1d5a/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Frakutenkobo-ebooks%2F7c848890c7763b13a1fc8d08bc9a9fb2%2F&link_type=picttext&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0dGV4dCIsInNpemUiOiIyNDB4MjQwIiwibmFtIjoxLCJuYW1wIjoicmlnaHQiLCJjb20iOjEsImNvbXAiOiJkb3duIiwicHJpY2UiOjEsImJvciI6MSwiY29sIjoxLCJiYnRuIjoxLCJwcm9kIjowLCJhbXAiOmZhbHNlfQ%3D%3D" target="_blank" rel="nofollow sponsored noopener" style="word-wrap:break-word;"  ><img src="https://hbb.afl.rakuten.co.jp/hgb/2ae12351.5d0c72f6.2ae12352.776c1d5a/?me_id=1278256&item_id=20327283&pc=https%3A%2F%2Fthumbnail.image.rakuten.co.jp%2F%400_mall%2Frakutenkobo-ebooks%2Fcabinet%2F2644%2F2000010062644.jpg%3F_ex%3D240x240&s=240x240&t=picttext" border="0" style="margin:2px" alt="[商品価格に関しましては、リンクが作成された時点と現時点で情報が変更されている場合がございます。]" title="[商品価格に関しましては、リンクが作成された時点と現時点で情報が変更されている場合がございます。]"></a></td><td style="vertical-align:top;width:248px;"><p style="font-size:12px;line-height:1.4em;text-align:left;margin:0px;padding:2px 6px;word-wrap:break-word"><a href="https://hb.afl.rakuten.co.jp/ichiba/2ae12351.5d0c72f6.2ae12352.776c1d5a/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Frakutenkobo-ebooks%2F7c848890c7763b13a1fc8d08bc9a9fb2%2F&link_type=picttext&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0dGV4dCIsInNpemUiOiIyNDB4MjQwIiwibmFtIjoxLCJuYW1wIjoicmlnaHQiLCJjb20iOjEsImNvbXAiOiJkb3duIiwicHJpY2UiOjEsImJvciI6MSwiY29sIjoxLCJiYnRuIjoxLCJwcm9kIjowLCJhbXAiOmZhbHNlfQ%3D%3D" target="_blank" rel="nofollow sponsored noopener" style="word-wrap:break-word;"  >薬に頼らず痛風発作が防げる！尿酸値リセット【電子書籍】[ 細谷龍男 ]</a><br><span >価格：1485円</span> <span style="color:#BBB">(2022/10/16時点)</span></p><div style="margin:10px;"><a href="https://hb.afl.rakuten.co.jp/ichiba/2ae12351.5d0c72f6.2ae12352.776c1d5a/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Frakutenkobo-ebooks%2F7c848890c7763b13a1fc8d08bc9a9fb2%2F&link_type=picttext&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0dGV4dCIsInNpemUiOiIyNDB4MjQwIiwibmFtIjoxLCJuYW1wIjoicmlnaHQiLCJjb20iOjEsImNvbXAiOiJkb3duIiwicHJpY2UiOjEsImJvciI6MSwiY29sIjoxLCJiYnRuIjoxLCJwcm9kIjowLCJhbXAiOmZhbHNlfQ%3D%3D" target="_blank" rel="nofollow sponsored noopener" style="word-wrap:break-word;"  ><img src="https://static.affiliate.rakuten.co.jp/makelink/rl.svg" style="float:left;max-height:27px;width:auto;margin-top:0"></a><a href="https://hb.afl.rakuten.co.jp/ichiba/2ae12351.5d0c72f6.2ae12352.776c1d5a/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Frakutenkobo-ebooks%2F7c848890c7763b13a1fc8d08bc9a9fb2%2F%3Fscid%3Daf_pc_bbtn&link_type=picttext&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJwaWN0dGV4dCIsInNpemUiOiIyNDB4MjQwIiwibmFtIjoxLCJuYW1wIjoicmlnaHQiLCJjb20iOjEsImNvbXAiOiJkb3duIiwicHJpY2UiOjEsImJvciI6MSwiY29sIjoxLCJiYnRuIjoxLCJwcm9kIjowLCJhbXAiOmZhbHNlfQ==" target="_blank" rel="nofollow sponsored noopener" style="word-wrap:break-word;"  ><div style="float:right;width:41%;height:27px;background-color:#bf0000;color:#fff!important;font-size:12px;font-weight:500;line-height:27px;margin-left:1px;padding: 0 12px;border-radius:16px;cursor:pointer;text-align:center;">楽天で購入</div></a></div></td></tr></table></div><br><p style="color:#000000;font-size:12px;line-height:1.4em;margin:5px;word-wrap:break-word"></p></td></tr></table>`,
          }}
        ></div>
      </main>
      <Menu />
    </div>
  );
}
export default Detail;
