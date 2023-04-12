import axios from "./../axios";
const mark = (id) => async (dispatch) => {
  try {
    console.log(id);
    dispatch({ type: "markRequest" });

    const { data } = await axios.get(`/bk/todo/mark/${id}`);

    dispatch({ type: "markSucess" });
  } catch (error) {
    console.log(error);
    dispatch({ type: "markFail", payload: error });
  }
};
export default mark;
