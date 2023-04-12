import axios from "./../axios";

const updateEvent = (id, event) => async (dispatch) => {
  try {
    dispatch({ type: "updateRequest" });

    await axios.post(
      `/bk/todo/update/${id}`,
      { event },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch({ type: "updateSucess" });
  } catch (error) {
    console.log(error);
    dispatch({ type: "updateFail", payload: error });
  }
};

export default updateEvent;
