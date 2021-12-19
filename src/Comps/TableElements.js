import React, { useState, useEffect } from "react";
import ListElement from "./ListElement";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../Actions/postActions";
function TableElements() {
  const [error, setError] = useState("");
  const data = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData(setError));
  }, []);

  return (
    <div className="flex">
      {error && <div className={`"${error}"`}>{error}</div>}
      {data.data &&
        data.data.map((user) => (
          <ListElement key={user.id} data={data.data} user={user} />
        ))}
    </div>
  );
}

export default TableElements;
