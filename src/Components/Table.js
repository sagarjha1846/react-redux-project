import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../Actions/Action";

import TableList from "./TableList";

function Table() {
  const [error, setError] = useState("");
  const data = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData(setError));
  }, []);
  console.log(data);

  return (
    <div className="flex">
      {error && <div className={`"${error}"`}>{error}</div>}

      {data.data &&
        data.data.map((user) => (
          <TableList key={user.id} data={data.data} user={user} />
        ))}
    </div>
  );
}

export default Table;
