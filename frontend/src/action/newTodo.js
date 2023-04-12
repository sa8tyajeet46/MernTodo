import axios from "./../axios";

const newEvent = (event) => async (dispatch) => {
  try {
    // console.log(password);
    dispatch({ type: "todonewRequest" });

    const { data } = await axios.post(
      "/bk/todo/new",
      { event },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch({ type: "todonewSucess" });
  } catch (error) {
    // console.log(error);
    dispatch({ type: "todonewFail", payload: error });
  }
};
export default newEvent;
