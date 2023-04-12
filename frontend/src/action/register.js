import axios from "./../axios";
const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({ type: "signRequest" });

    const { data } = await axios.post(
      "bk/user/register",
      { name, email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch({ type: "signSucess" });
  } catch (error) {
    dispatch({
      type: "signFail",
      payload: error.response.data.message
        ? error.response.data.message
        : "Internal server error",
    });
  }
};
export default register;
