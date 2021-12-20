import React, { useState, useEffect } from "react";
import ListElement from "./ListElement";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../Actions/postActions";
function TableElements() {
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const data = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData(setError));
  }, []);

  return (
    <div className="flex">
      {error && <div className={`"${error}"`}>{error}</div>}
      {message === "" ? (
        <>
          {" "}
          {data.data ? (
            data.data.map((user) => (
              <ListElement
                setMessage={setMessage}
                key={user.id}
                data={data.data}
                user={user}
              />
            ))
          ) : (
            <div className="center">
              <h1>Please Reload the page</h1>
              <span>
                <i className="fas fa-times"></i>
              </span>
            </div>
          )}
        </>
      ) : (
        <h1>{message}</h1>
      )}
    </div>
  );
}

export default TableElements;
