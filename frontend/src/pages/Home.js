import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import logout from "../action/logout";
import { useAlert } from "react-alert";
import getTodo from "../action/getTodo";
import Loader from "./Loader";
import { useState } from "react";
import newEvent from "../action/newTodo";
import mark from "../action/mark";
import unmark from "../action/unmark";
import deleteEvent from "../action/delete";
import updateEvent from "../action/updateEvent";

function Home() {
  const [add, setAdd] = useState(false);
  const [event, setEvent] = useState("");
  const [uadd, setUadd] = useState(false);
  const [uevent, setUevent] = useState("");
  const [uid, setUid] = useState("");
  const [sortOrder, setSortorder] = useState("");
  const alert = useAlert();
  const dispatch = useDispatch();
  const {
    sucess,
    message,
    error: newError,
  } = useSelector((state) => state.todoo);
  const { todo, loading, error } = useSelector((state) => state.todo);
  useEffect(() => {
    dispatch(getTodo(sortOrder));

    if (error) {
      alert.error(error);
      dispatch({ type: "clearError" });
    }
    if (newError) {
      alert.error(newError);
      dispatch({ type: "clearError" });
    }
    if (message) {
      alert.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [dispatch, newError, error, message, sucess, sortOrder]);
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    alert.success("logged out successfully");
  };
  const handleMark = async (e, id) => {
    e.preventDefault();
    // console.log(id);
    await dispatch(mark(id));
  };
  const handleunmark = async (e, id) => {
    e.preventDefault();
    // console.log(id);
    await dispatch(unmark(id));
  };
  const handleAdd = async (e) => {
    e.preventDefault();
    await dispatch(newEvent(event));
    // await dispatch(getTodo());
    setAdd(false);
  };
  const handleDelete = async (e, id) => {
    e.preventDefault();
    await dispatch(deleteEvent(id));
  };
  const handleUpdate = async (e, id) => {
    e.preventDefault();
    setUadd(true);
    setUid(id);
  };
  const handleUp = async (e) => {
    e.preventDefault();
    dispatch(updateEvent(uid, uevent));
    setUadd(false);
  };
  return (
    <>
      {loading ? (
        <Loader></Loader>
      ) : (
        <div>
          Home
          <select onChange={(e) => setSortorder(e.target.value)}>
            <option value={""}>sort</option>
            <option value={"alphabet"}>A-Z</option>
            <option value={"marked"}>marked</option>
          </select>
          {add && (
            <form onSubmit={(e) => handleAdd(e)}>
              <input
                type="text"
                value={event}
                onChange={(e) => setEvent(e.target.value)}
              ></input>
              <button type="submit">Add</button>
            </form>
          )}
          {uadd && (
            <form onSubmit={(e) => handleUp(e)}>
              <input
                type="text"
                value={uevent}
                onChange={(e) => setUevent(e.target.value)}
              ></input>
              <button type="submit">Update</button>
            </form>
          )}
          <button onClick={(e) => handleLogout(e)}>Logout</button>
          <button onClick={(e) => setAdd(true)}>add</button>
          {todo &&
            todo.map((t, i) => {
              return (
                <div key={i}>
                  {t.event}
                  {t.completed ? (
                    <button onClick={(e) => handleunmark(e, t._id)}>
                      unmark
                    </button>
                  ) : (
                    <button onClick={(e) => handleMark(e, t._id)}>
                      mark as complete
                    </button>
                  )}
                  <button onClick={(e) => handleDelete(e, t._id)}>
                    Delete
                  </button>
                  <button onClick={(e) => handleUpdate(e, t._id)}>
                    Update
                  </button>
                </div>
              );
            })}
        </div>
      )}
    </>
  );
}

export default Home;
