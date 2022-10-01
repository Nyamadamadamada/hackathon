import { useEffect, useState } from "react";
import { getUserIconPath } from "../service/serviceUser";
import { UserStruct } from "../types/firestore";
import commentIcon from "../assets/comment.svg";

type UserInfoProps = {
  id: string;
  name: string;
  comment: string;
  file: string;
};

const UserInfo = ({ id, name, comment, file }: UserInfoProps) => {
  const [path, setPath] = useState<string>("/img/dummy.png");
  useEffect(() => {
    if (file) {
      getUserIconPath(id, file).then((url) => {
        setPath(url);
      });
    }
  }, []);
  return (
    <li className="pt-2">
      <div className="row">
        <div className="col-3">
          <img src={path} />
        </div>
        <div className="col-9 d-flex">
          <div className="user-name">
            <span>{name}</span>
            {comment && (
              <div className="comment-icon-wrap">
                <img src={commentIcon} alt="icon" className="comment-icon" />
                <div className="balloon-wrap">
                  <p className="balloon">{comment}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </li>
  );
};

type Props = {
  users: UserStruct[];
};
const UsersCard = ({ users }: Props) => {
  return (
    <div className="mt-4 card user-info">
      <div className="card-body text-center">
        <h5 className="card-title fw-bold">参加予定の方々</h5>
        <h6 className="card-subtitle mb-2 text-muted">敬称略</h6>
        <hr className="mb-4" />
        <ul>
          {users.map((user, index) => {
            return (
              user.id && (
                <UserInfo
                  key={index}
                  id={user.id}
                  name={user.name}
                  comment={user.comment}
                  file={user.file}
                />
              )
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default UsersCard;
