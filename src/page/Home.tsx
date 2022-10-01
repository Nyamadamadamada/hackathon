import { useEffect, useState } from "react";

import Modal from "../components/common/Modal";
import remoteDesktopIcon from "../assets/remote_desktop_icon.svg";
import { Link } from "react-router-dom";
import UserForm from "../components/UserForm";
import UsersCard from "../components/UsersCard";
import MainContents from "../components/MainContents";
import ScheduleContents from "../components/ScheduleContents";
import { getUsers } from "../service/serviceUser";
import { UserStruct } from "../types/firestore";

function Home() {
  const [isShow, setIsShow] = useState<boolean>(false);
  const [users, setUsers] = useState<UserStruct[]>([]);

  const handleOpenModal = () => {
    setIsShow(true);
  };

  useEffect(() => {
    getUsers().then((users) => {
      setUsers(users);
    });
  }, [isShow]);

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
              <MainContents handleOpenModal={handleOpenModal} />
            </div>
            <div className="col-12 col-lg-4">
              <ScheduleContents handleOpenModal={handleOpenModal} />
              <UsersCard users={users} />
            </div>
          </div>
          <footer className="py-5 mt-5 text-muted border-top">
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

export default Home;
