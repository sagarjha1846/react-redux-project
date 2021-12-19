import React, { useState } from "react";
import { update_data } from "../Actions/postActions";
import { useDispatch } from "react-redux";

function EditableItems({ user, data, setEditIsClicked }) {
  const [InputChange, setInputChange] = useState({
    id: "",
    first_name: "",
    last_name: "",
    email: "",
  });
  function HandleChange(e) {
    setInputChange({
      ...InputChange,
      id: user.id,
      [e.target.name]: e.target.value,
    });
  }

  const dispatch = useDispatch();
  function HandleSubmit() {
    const update = data.map((el) => {
      if (el.id === user.id) {
        el.first_name =
          InputChange.first_name !== ""
            ? InputChange.first_name
            : el.first_name;
        el.last_name =
          InputChange.last_name !== "" ? InputChange.last_name : el.last_name;
        el.email = InputChange.email !== "" ? InputChange.email : el.email;
      }
      return el;
    });
    dispatch(update_data(update));

    setEditIsClicked(false);
  }
  return (
    <div className="card-body">
      <h2 className="grey space">{`${user.first_name} ${user.last_name}`}</h2>
      <h3 className="space">
        <span className="grey">Email:</span>
        <input
          className="input"
          defaultValue={user.email}
          onChange={HandleChange}
          name="email"
          type="text"
        />
      </h3>
      <h3 className="space">
        <span className="grey">First Name:</span>{" "}
        <input
          className="input"
          defaultValue={user.first_name}
          onChange={HandleChange}
          name="first_name"
          type="text"
        />
      </h3>
      <h3 className="space">
        <span className="grey">Last Name:</span>{" "}
      </h3>
      <input
        className="input"
        defaultValue={user.last_name}
        onChange={HandleChange}
        name="last_name"
        type="text"
      />
      <div>
        <button className="btn" onClick={HandleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default EditableItems;
