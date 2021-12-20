import { DELETE_DATA, FETCH_DATA, UPDATE_DATA } from "./types";

export const getData = (setError) => (dispatch) => {
  const data = JSON.parse(localStorage.getItem("data"));

  if (data && data.length !== 0) {
    const data = JSON.parse(localStorage.getItem("data"));

    console.log(data);
    dispatch({
      type: FETCH_DATA,
      data: data,
    });
  } else {
    fetch("https://reqres.in/api/users?page=1/")
      .then((res) => {
        return res.json();
      })

      .then((data) => {
        localStorage.setItem("data", JSON.stringify(data?.data));
        const datas = JSON.parse(localStorage.getItem("data"));
        dispatch({
          type: FETCH_DATA,
          data: datas,
        });
      })
      .catch((err) => {
        setError(err);
      });
  }
};

export const delete_data = (data, id, setMessage) => (dispatch) => {
  localStorage.setItem(
    "data",
    JSON.stringify(data.filter((el) => el.id !== id))
  );
  const datas = JSON.parse(localStorage.getItem("data"));
  if (datas.length === 0) {
    setMessage("Please Reload the page");
  }
  dispatch({
    type: DELETE_DATA,
    data: datas,
  });
};

export const update_data = (update) => (dispatch) => {
  localStorage.setItem("data", JSON.stringify(update));
  const datas = JSON.parse(localStorage.getItem("data"));
  dispatch({
    type: UPDATE_DATA,
    data: datas,
  });
};
