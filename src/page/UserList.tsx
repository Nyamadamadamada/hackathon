import { useState, useEffect, useRef } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import Modal from "../components/common/Modal";
import tagIcon from "../assets/tag.svg";
import UserForm from "../components/UserForm";
import { getUsers } from "../service/serviceUser";
import { UserStruct, TagStruct } from "../types/firestore";
import SearchForm from "../components/SearchForm";
import { Link } from "react-router-dom";

function UserList() {
  const [users, setUsers] = useState<UserStruct[]>([]);
  const [userId, setUserId] = useState<string>("");
  const [isShow, setIsShow] = useState<boolean>(false);
  const handleOpenModal = (id: string) => {
    setUserId(id);
    setIsShow(true);
  };

  useEffect(() => {
    getUsers().then((users) => {
      // ユーザー情報を入れる
    });
  }, []);

  return (
    <div className="UserList">
      <main>
        <div className="container my-3">
          <h1 className="h2 my-2">
            ※このページをReactとFirebaseをつかって動的なサイトにします
          </h1>
          <h3 className="fw-bold">参加者一覧</h3>
          <div className="row d-flex flex-column-reverse flex-lg-row">
            <div className="col-12 col-lg-8">
              <div className="content-info">
                <div className="content-info-item">
                  登録者人数の合計：１０人
                </div>
                <div className="content-sort">
                  <div>並び順：</div>
                  <div>
                    <a href="#">新着順</a>
                  </div>
                  <div>&nbsp;|&nbsp;</div>
                  <div>
                    <a href="#">50音順</a>
                  </div>
                </div>
              </div>
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src="/img/dummy1.png" className="w-100" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">なまえ</h5>
                      <p className="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>

                      <div className="card-text text-muted interest-tag">
                        <ul className="d-flex">
                          <li>
                            <img src={tagIcon} alt="icon" />
                          </li>
                          <li>フロント,</li>
                          <li>AI</li>
                        </ul>
                      </div>
                      <div className="">
                        <button
                          type="button"
                          className="btn btn-primary fw-bold fs-6 me-2"
                          onClick={() =>
                            handleOpenModal("IzjbQMxfs6rKo5kSsoir")
                          }
                        >
                          編集
                        </button>
                        <button
                          type="button"
                          className="btn btn-secondary fw-bold fs-6 me-2"
                        >
                          削除
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src="/img/dummy2.png" className="w-100" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">なまえ２</h5>
                      <p className="card-text">短いコメント</p>

                      <div className="card-text text-muted interest-tag">
                        <ul className="d-flex">
                          <li>
                            <img src={tagIcon} alt="icon" />
                          </li>
                          <li>フロント,</li>
                          <li>AI</li>
                        </ul>
                      </div>
                      <div className="">
                        <button
                          type="button"
                          className="btn btn-primary fw-bold fs-6 me-2"
                          onClick={() =>
                            handleOpenModal("IzjbQMxfs6rKo5kSsoir")
                          }
                        >
                          編集
                        </button>
                        <button
                          type="button"
                          className="btn btn-secondary fw-bold fs-6 me-2"
                        >
                          削除
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="h4">
                <Link to="/">トップページに戻る</Link>
              </p>
            </div>
            <div className="col-12 col-lg-4 d-lg-block my-5">
              <h4 className="fw-bold">絞り込み</h4>
              <div className="card search-user">
                <div className="card-body">
                  <SearchForm />
                </div>
              </div>
            </div>
          </div>
          <footer className="pt-5 my-5 text-muted border-top">
            Created by the Bootstrap and Hogehoge &middot; &copy; 2022
          </footer>
        </div>
      </main>

      {isShow && (
        <Modal title={"編集"} setIsShow={setIsShow}>
          <UserForm id={userId} setIsShow={setIsShow} />
        </Modal>
      )}
    </div>
  );
}

export default UserList;
