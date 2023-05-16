import React, { useEffect, useReducer, useState } from "react";
import Modal from "./modal";

const reducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    /* const newPeople = [...state.people, action.payload]; */
    return {
      ...state,
      people: [...state.people, action.payload],
      isModalOpen: true,
      modalContent: "item added",
    };
  }
  if (action.type === "NO_VALUE") {
    return { ...state, isModalOpen: true, modalContent: "please enter text" };
  }
  if (action.type === "CLOSE_MODAL") {
    return { ...state, isModalOpen: false };
  }
  return state;
};

const initialValues = {
  people: [],
  isModalOpen: false,
  modalContent: "",
};

const MinUseReducer = () => {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, initialValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newItem = { id: Date.now(), name };
      dispatch({ type: "ADD_ITEM", payload: newItem });
      setName("");
    } else {
      dispatch({ type: "NO_VALUE" });
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch({ type: "CLOSE_MODAL" });
    }, 2000);
    return () => clearInterval(intervalId);
  }, [state]);

  return (
    <>
      {state.isModalOpen && <Modal modalContent={state.modalContent} />}
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit">add</button>
      </form>
      {state.people.map((person) => {
        return <div key={person.id}>{person.name}</div>;
      })}
    </>
  );
};

export default MinUseReducer;
