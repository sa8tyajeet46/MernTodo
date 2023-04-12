import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import loginAction from "../action/loginaction";
import { useAlert } from "react-alert";
function Login() {
  const dispatch = useDispatch();
  const alert = useAlert();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const { error } = useSelector((state) => state.user);
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch({ type: "clearError" });
    }
  }, [dispatch, error]);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginAction(formData.username, formData.password));
  };
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          value={formData.username}
          placeholder="userName"
          onChange={(e) =>
            setFormData({ ...formData, username: e.target.value })
          }
        ></input>
        <input
          type="password"
          value={formData.password}
          placeholder="password"
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        ></input>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default Login;
