import React, { useState, ChangeEvent } from "react";
import { observer } from "mobx-react-lite";
import { useMst } from "../models/Root";
import UserItem from "./UserItem";

const UsersList: React.FC = observer(() => {
  const { users } = useMst();
  const [name, setName] = useState("");

  function handleChangename(e: ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  return (
    <div className="UsersList">
      <div>
        <input value={name} onChange={handleChangename} />
        <button
          onClick={() => {
            users.addUser({
              name,
              id: Math.floor(Math.random() * 100000) + 1,
            });
          }}
        >
          Add user
        </button>
      </div>

      <div>
        {users.items.map((el) => (
          <UserItem user={el} key={el.id} />
        ))}
      </div>
    </div>
  );
});

export default UsersList;
