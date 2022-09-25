import { useEffect, useState } from "react";
import { getUserIconPath, getUsers } from "../service/serviceUser";
import { UserStruct } from "../types/firestore";

type Props = {
  id: string;
  name: string;
  file: string;
};

const UserInfo = ({ id, name, file }: Props) => {
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
        <div className="col-4">
          <img src={path} className="" />
        </div>
        <div className="col-8">
          <p>{name}</p>
        </div>
      </div>
    </li>
  );
};

const UsersCard = () => {
  const [users, setUsers] = useState<UserStruct[]>([]);

  useEffect(() => {
    getUsers().then((users) => {
      setUsers(users);
    });
  }, []);
  return (
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
                file={user.file}
              />
            )
          );
        })}
      </ul>
    </div>
  );
};

export default UsersCard;
