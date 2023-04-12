import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import loginAction from "../action/loginaction";
import { useAlert } from "react-alert";
import register from "../action/register";
import { useNavigate } from "react-router-dom";
function Register() {
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { err, sucess } = useSelector((state) => state.sign);
  useEffect(() => {
    if (sucess) {
      alert.success("user created successfully");
      navigate("/login");
    }
    if (err) {
      alert.error(err);
      dispatch({ type: "clearError" });
    }
  }, [dispatch, err, sucess]);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(formData.name, formData.email, formData.password));
  };
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          value={formData.name}
          placeholder="userName"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        ></input>
        <input
          type="email"
          value={formData.email}
          placeholder="Email"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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

export default Register;
