import React, { useState } from "react";
import Modal from "./modal";

const MinUseReducer = () => {
  const [name, setName] = useState("");
  const [people, setPeople] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      setPeople([...people, { id: Date.now(), name }]);
      setName("");
      setShowModal(true);
    } else {
      setShowModal(true);
    }
  };

  return (
    <>
      {showModal && <Modal />}
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
      {people.map((person) => {
        return <div key={person.id}>{person.name}</div>;
      })}
    </>
  );
};

export default MinUseReducer;
