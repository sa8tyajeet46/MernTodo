import axios from "./../axios";

const logout = () => async (dispatch) => {
  try {
    dispatch({ type: "LOGOUTREQUEST" });

    const { data } = await axios.post("bk/user/logout", {}, {});

    dispatch({ type: "LOGOUTSUCESS" });
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOGOUTFAIL" });
  }
};
export default logout;
