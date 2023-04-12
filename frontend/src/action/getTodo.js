import axios from "./../axios";

const getTodo = (sorting) => async (dispatch) => {
  try {
    dispatch({ type: "todoRequest" });
    let link;
    if (sorting) link = `/bk/todo/show?sort=${sorting}`;
    else link = "/bk/todo/show";
    const { data } = await axios.get(link);

    dispatch({ type: "todoSucess", payload: data.todos });
  } catch (error) {
    dispatch({ type: "todoFail", payload: error });
  }
};

export default getTodo;
