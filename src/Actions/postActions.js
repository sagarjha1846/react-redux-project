import { DELETE_DATA, FETCH_DATA, UPDATE_DATA } from "./types";

export const getData = (setError) => (dispatch) => {
  const data = localStorage.getItem("data");
  const post = JSON.parse(localStorage.getItem("data"));
  if (data && post.lenght !== 0) {
    const data = JSON.parse(localStorage.getItem("data"));

    console.log(data);
    console.log("data was fetch from locat storage");
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

export const delete_data = (data, id) => (dispatch) => {
  localStorage.setItem(
    "data",
    JSON.stringify(data.filter((el) => el.id !== id))
  );
  const datas = JSON.parse(localStorage.getItem("data"));
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
