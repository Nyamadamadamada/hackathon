import { useEffect, useState } from "react";
import Modal from "../components/common/Modal";
import tagIcon from "../assets/tag.svg";
import UserForm from "../components/UserForm";
import SearchUserForm from "../components/SearchUserForm";
import CreateUserForm from "../components/CreateUserForm";
import UserListItem from "../components/UserListItem";
import { Link } from "react-router-dom";

function UserList() {
  // 演習1-1-1 usersのstateを作成
  const [userId, setUserId] = useState<string>("");
  const [isShow, setIsShow] = useState<boolean>(false);
  const handleOpenModal = (id: string) => {
    setUserId(id);
    setIsShow(true);
  };
  // useEffectは初回読み込み時に通るHook
  useEffect(() => {
    // 演習1-1-1 Firebaseからデータを呼び出す
    // 演習1-1-1 firestoreからのデータをusersへ格納
  }, []);

  return (
    <div className="UserList">
      <main>
        <div className="container my-3">
          <h1 className="h2 my-2">
            ※このページをReactとFirebaseをつかって動的なサイトにします
          </h1>
          <h3 className="fw-bold">参加者一覧</h3>
          <div className="row d-flex flex-column-reverse flex-xl-row">
            <div className="col-12 col-xl-8">
              <div className="content-info">
                <div className="content-info-item">
                  {/* 演習1-1 */}
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
                {/* 演習1-1-2 ここから */}
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src="/img/dummy1.png" className="w-100" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      {/* 演習1-1 */}
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
                          {/* 演習1-1 */}
                          <li>フロント,</li>
                          <li>AI</li>
                        </ul>
                      </div>
                      <div className="">
                        <button
                          type="button"
                          className="btn btn-primary fw-bold fs-6 me-2"
                          onClick={() => handleOpenModal("<user.idをいれてね>")}
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
                {/* 演習1-1-2 ここまでがUserListItemへ移せる */}
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src="/img/dummy2.png" className="w-100" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">なまえ２</h5>
                      <p className="card-text">短いコメント。自己紹介など</p>

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
                          onClick={() => handleOpenModal("<user.idをいれてね>")}
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
            <div className="col-12 col-xl-4 d-xl-block my-5">
              <h4 className="fw-bold">絞り込み</h4>
              <div className="card search-user">
                <div className="card-body">
                  <SearchUserForm />
                </div>
              </div>
              <div className="mt-4">
                <h4 className="fw-bold">新規追加</h4>
                <div className="card search-user">
                  <div className="card-body">
                    <CreateUserForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="py-5 mt-5 text-muted border-top">
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
