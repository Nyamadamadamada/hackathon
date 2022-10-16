import { Outlet } from "react-router-dom";
import { Item } from "./util/OCR";
import { createContext, Dispatch, useState } from "react";

interface UserDataContext {
  item: Item[];
  setItem: Dispatch<React.SetStateAction<Item[]>>;
}

export const UserData = createContext<UserDataContext>({} as UserDataContext);
const App = () => {
  const [item, setItem] = useState<Item[]>([]);
  return (
    <UserData.Provider value={{ item, setItem }}>
      <Outlet />
    </UserData.Provider>
  );
};

export default App;
