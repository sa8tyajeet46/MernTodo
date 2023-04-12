import axios from "./../axios";
const deleteEvent = (id) => async (dispatch) => {
  try {
    dispatch({ type: "deleteRequest" });

    await axios.delete(`/bk/todo/del/${id}`);

    dispatch({ type: "deleteSucess" });
  } catch (error) {
    console.log(error);
    dispatch({ type: "deleteFail", payload: error });
  }
};
export default deleteEvent;
