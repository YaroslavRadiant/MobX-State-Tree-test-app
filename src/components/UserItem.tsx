import React, { ChangeEvent, useState } from "react";
import { observer } from "mobx-react-lite";

interface Props {
  user: {
    name: string;
    id: number;
    remove: () => void;
    changeName: (newName: string) => void;
  };
}

const UserItem: React.FC<Props> = observer(({ user }) => {
  const [name, setName] = useState(user.name);
  const [isEditable, setIsEditable] = useState(true);

  const [isEditMode, setIsEditMode] = useState(false);

  function handleChange() {
    setIsEditable(!isEditable);
  }

  function handleChangeName(e: ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  function handleChangeMode() {
    setIsEditMode(!isEditMode);
  }
  function SaveNewName() {
    user.changeName(name);
    setIsEditMode(!isEditMode);
  }

  function renderEditButtons() {
    if (isEditable)
      return (
        <>
          <button onClick={user.remove}>Delete</button>
          {isEditMode ? (
            <button onClick={SaveNewName}>Save</button>
          ) : (
            <button onClick={handleChangeMode}>Edit name</button>
          )}
        </>
      );
    return;
  }
  return (
    <div className="UserItem">
      <input type="checkbox" checked={isEditable} onChange={handleChange} />
      {isEditMode ? (
        <input value={name} onChange={handleChangeName} />
      ) : (
        <div className="UserItem-name">{user.name}</div>
      )}
      {renderEditButtons()}
    </div>
  );
});

export default UserItem;
