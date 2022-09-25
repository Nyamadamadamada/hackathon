import { useState, useEffect } from "react";

import Modal from "../components/common/Modal";
import calenderIcon from "../assets/calendar.svg";
import remoteDesktopIcon from "../assets/remote_desktop_icon.svg";
import { Link } from "react-router-dom";
import UserForm from "../components/UserForm";
import UsersCard from "../components/UsersCard";

function App() {
  const [isShow, setIsShow] = useState<boolean>(false);
  const handleOpenModal = () => {
    setIsShow(true);
  };

  return (
    <div className="App">
      <header className="navbar navbar-expand-md navbar-dark fixed-top bg-dark text-center p-0">
        <div className="container">
          <div className="nav m-auto justify-content-center">
            <span className="navbar-brand fs-6 m-0">
              workshop on 2022.10.02 11:00~15:00
            </span>
            <div className="navbar-brand fs-6 mx-2">
              <img src={remoteDesktopIcon} alt="icon" />
            </div>
            <span className="navbar-brand fs-6 fw-bold">You should come!</span>
          </div>
        </div>
      </header>
      <div className="mb-5 text-center hero">
        <div className="d-flex flex-column flex-lg-row hero-inner">
          <div className="ttl m-auto">
            <div className="ttl-inner text-center lg-text-start">
              <h1 className="fw-bold h2 fadeIn">
                <span className="mb-4">React × Firebase</span>
                <br />
                <span>勉強会</span>
              </h1>
              <p className="fadeIn delay-1 fw-bold">
                Firebaseで簡単に自分のサイトをつくってみよー
              </p>
            </div>
          </div>
          <div className="flex-swiper"></div>
        </div>
      </div>
      <main>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-8">
              <div className="d-flex flex-column flex-lg-row">
                <p className="h4">
                  当日作るもの→ <Link to="user-list">参加者一覧ページ</Link>
                </p>
              </div>
              <div className="card">
                <div className="card-header fw-bold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-stars"
                    viewBox="0 0 16 16"
                  >
                    <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z" />
                  </svg>
                  <span className="mx-1">イベント内容</span>
                </div>
                <div className="card-body">
                  <div className="mb-4">
                    <h2 className="h2-ttl">日時・場所</h2>
                    <p>2022年10月2日（日）11時〜15時</p>
                    <p>
                      Google Meet で実施します。
                      <br />
                      以下のURLから簡単に参加できます。
                    </p>
                    <p>
                      ビデオ通話のリンク:
                      <a
                        href="https://meet.google.com/ocq-qzsm-sat"
                        target="_blank"
                        rel="noreferrer"
                      >
                        https://meet.google.com/ocq-qzsm-sat
                      </a>
                    </p>
                    <p>※5分前から入室可能です。</p>
                  </div>
                  <div className="mb-4">
                    <h2 className="h2-ttl">概要</h2>
                    <p className="me-lg-5">
                      React・Firebase入門編として「CRUD機能」と「画像のアップロード」を実装し「WEBサイトを公開」することをゴールにハンズオン＋演習形式で学習を進めます。
                      <br />
                      紹介のみの開催なので、誰かしら知り合いがいると思います。お友達を誘ってもOKです！気軽にご参加ください♪
                    </p>
                  </div>
                  <div className="mb-4">
                    <h2 className="h2-ttl">タイムテーブル</h2>
                    <table className="timetable table">
                      <tbody>
                        <tr>
                          <th scope="row">11:00 - 11:15</th>
                          <td>
                            自己紹介。ご自身の情報を登録すると話が弾むかも！？
                          </td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-secondary p-1 mt-1 fw-bold"
                              onClick={handleOpenModal}
                            >
                              参加者の登録
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">11:15 - 11:45</th>
                          <td>ReactとFirebaseの説明</td>
                          <td></td>
                        </tr>
                        <tr>
                          <th scope="row">11:45 - 12:00</th>
                          <td>
                            一緒に環境構築（事前に準備していただいた方はそのままお昼休憩に入ってください）
                          </td>
                          <td></td>
                        </tr>
                        <tr>
                          <th scope="row"></th>
                          <td className="text-muted">〜お昼休憩〜</td>
                          <td></td>
                        </tr>
                        <tr>
                          <th scope="row">13:00 - 13:45</th>
                          <td>ハンズオン＋演習１</td>
                          <td></td>
                        </tr>
                        <tr>
                          <th scope="row"></th>
                          <td className="text-muted">〜小休憩〜</td>
                          <td></td>
                        </tr>
                        <tr>
                          <th scope="row">14:00 - 14:45</th>
                          <td>ハンズオン＋演習２</td>
                          <td></td>
                        </tr>
                        <tr>
                          <th scope="row">14:45 - 15:00</th>
                          <td>感想など、今後について</td>
                          <td></td>
                        </tr>
                      </tbody>
                    </table>
                    <ul className="fs-14">
                      <li>
                        途中、入退出していただいても問題ありません。午後の演習だけ参加でもOK
                      </li>
                      <li>
                        当日の状況によって順番や終了時間が多少変動する可能性もあります。
                      </li>
                    </ul>
                  </div>
                  <div className="mb-4 recomend">
                    <h2 className="h2-ttl">対象者・こんな人におすすめ</h2>
                    <p>
                      初学者の方及びベテランの方ご関係なく参加していただければと思います。
                      <br />
                      内容は初学者向けのため、ベテランの方は他参加者へのサポートをお願いできるととっても助かります。
                      お互いに教え合って楽しい会にしましょう！
                    </p>
                    <ul className="">
                      <li>React・Firebaseを触ってみたい</li>
                      <li>ハンズオン形式でみんなで学んでみたい</li>
                      <li>WEBサイトを簡単に無料で公開したい</li>
                    </ul>
                  </div>
                  <div className="mb-4 self-introduction">
                    <h2 className="h2-ttl">運営</h2>
                    <h3 className="h3-ttl">主催者の自己紹介</h3>
                    <ul className="">
                      <li>4年目のWEBエンジニア</li>
                      <li>東京でリモートワーク</li>
                      <li>
                        普段の業務内容：&nbsp;受注開発している企業でWEB開発してます。フロントとバックエンドが主。
                      </li>
                      <li>業務で使用する言語：&nbsp;PHP、C#、React、Vue</li>
                      <li>
                        趣味：&nbsp;スーパー銭湯でMacカタカタorカフェでMacカタカタして都会感を味わう
                      </li>
                    </ul>
                  </div>
                  <div className="mb-4">
                    <h3 className="h3-ttl">お問合せ</h3>
                    <p>
                      勉強会についてお問合せのある方は以下にメールかSlackでメンションしていただくか、ご紹介いただいた方に連絡をお願いします。
                      <br />
                      気になったことや質問でもお気軽にご連絡ください。
                    </p>
                    <p>山田：n.yamadamadamada@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="card d-none d-lg-block event-info">
                <div className="card-body text-center">
                  <h5 className="card-title fw-bold">2022/10/2&#40;日&#41;</h5>
                  <h6 className="card-subtitle mb-2 text-muted">11:00~15:00</h6>
                  <a
                    className="event-info-link"
                    target="_blank"
                    rel="noreferrer"
                    href="https://calendar.google.com/event?action=TEMPLATE&amp;tmeid=NmtvY3V2NTA0MXNqYWluNHJvcDhyY2ZlM2ggeWFtYWRhbWFkYW1hZGEuc3R1ZHlAbQ&amp;tmsrc=yamadamadamada.study%40gmail.com"
                  >
                    <img src={calenderIcon} alt="icon" />
                    Googleカレンダー
                  </a>
                  <hr className="mb-4" />
                  <dl className="event-info-item">
                    <dt>参加者</dt>
                    <dd>どなたでもOK。</dd>
                  </dl>
                  <hr className="mb-4" />
                  <dl className="event-info-item">
                    <dt>会場</dt>
                    <dd>リモート</dd>
                  </dl>
                  <hr className="mb-4" />

                  <button
                    type="button"
                    className="btn btn-secondary btn-lg fw-bold fs-6"
                    onClick={handleOpenModal}
                  >
                    参加者の登録
                  </button>
                  <p className="mt-2">
                    任意です。人数把握のために登録していただけると幸いです！
                  </p>
                </div>
              </div>
              <div className="mt-4 card user-info">
                <UsersCard />
              </div>
            </div>
          </div>
          <footer className="pt-5 my-5 text-muted border-top">
            Created by the Bootstrap and Hogehoge &middot; &copy; 2022
          </footer>
        </div>
      </main>
      {isShow && (
        <Modal title={"参加者の登録"} setIsShow={setIsShow}>
          <UserForm setIsShow={setIsShow} />
        </Modal>
      )}
    </div>
  );
}

export default App;
