import axios from "./../axios";
const unmark = (id) => async (dispatch) => {
  try {
    console.log(id);
    dispatch({ type: "unmarkRequest" });

    const { data } = await axios.get(`/bk/todo/unmark/${id}`);

    dispatch({ type: "unmarkSucess" });
  } catch (error) {
    console.log(error);
    dispatch({ type: "unmarkFail", payload: error });
  }
};
export default unmark;
