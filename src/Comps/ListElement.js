import React, { useState } from "react";
import EditableItems from "./EditableItems";
import ReadOnlytField from "./ReadOnlytField";
import { useDispatch } from "react-redux";
import { delete_data } from "../Actions/postActions";

function ListElement({ user, setdata, data }) {
  const dispatch = useDispatch();
  const [editIsClicked, setEditIsClicked] = useState(false);
  function HandleDelete() {
    console.log(user);
    dispatch(delete_data(data, user.id));
  }

  function HandleEdit() {
    setEditIsClicked(true);
  }

  function HandleClose() {
    setEditIsClicked(false);
  }

  return (
    <div key={user.id}>
      <div className="card">
        <img
          src={user.avatar}
          className="card-img-top"
          alt={user.first_name}
        ></img>
        {editIsClicked === false ? (
          <ReadOnlytField user={user} />
        ) : (
          <EditableItems
            user={user}
            data={data}
            setdata={setdata}
            setEditIsClicked={setEditIsClicked}
          />
        )}

        <div className="cardId">{user.id}</div>
        <div className="edit_delete">
          <button className="delete" onClick={HandleDelete}>
            <i className="far fa-trash-alt"></i>
          </button>

          {editIsClicked === false ? (
            <button className="edit" onClick={HandleEdit}>
              <i className="far fa-edit"></i>
            </button>
          ) : (
            <button className="edit" onClick={HandleClose}>
              <i className="fas fa-times"></i>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ListElement;
