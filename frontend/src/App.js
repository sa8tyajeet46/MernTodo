import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import loaduser from "./action/loaduser";
import Register from "./pages/Register";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loaduser());
  }, [dispatch]);
  const options = {
    // you can also just use 'bottom center'
    position: positions.BOTTOM_CENTER,
    timeout: 5000,
    offset: "30px",
    // you can also just use 'scale'
    transition: transitions.SCALE,
  };
  const { auth } = useSelector((state) => state.user);

  return (
    <AlertProvider template={AlertTemplate} {...options}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={auth ? <Home></Home> : <Login></Login>}
          ></Route>
          <Route
            path="/login"
            element={auth ? <Home></Home> : <Login></Login>}
          ></Route>
          <Route
            path="/register"
            element={auth ? <Home></Home> : <Register></Register>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </AlertProvider>
  );
}

export default App;
