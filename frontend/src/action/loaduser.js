import axios from "./../axios";

const loaduser = () => async (dispatch) => {
  try {
    dispatch({ type: "LOADUSERREQUEST" });

    const { data } = await axios.get("bk/user/profile");
    dispatch({ type: "LOADUSERSUCESS", payload: data });
  } catch (error) {
    dispatch({ type: "LOADUSERFAIL" });
  }
};

export default loaduser;
