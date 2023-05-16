import React, { useReducer, useState } from "react";
import Modal from "./modal";

const reducer = (state, action) => {};

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
    } else {
    }
  };

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
