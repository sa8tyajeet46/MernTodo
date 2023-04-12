import axios from "./../axios";

const loginAction = (username, password) => async (dispatch) => {
  try {
    // console.log(password);
    dispatch({ type: "LOGINREQUEST" });

    const { data } = await axios.post(
      "/bk/user/login",
      { username, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch({ type: "LOGINSUCESS", payload: data.user });
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOGINFAIL", payload: "invalid Credentials" });
  }
};
export default loginAction;
