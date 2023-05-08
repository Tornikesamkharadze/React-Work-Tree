import React, { useState } from "react";
import "./index.css";

const ControlledInput = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmali] = useState("");
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && email) {
      const user = { id: Date.now(), firstName, email };
      setPeople((people) => {
        return [...people, user];
      });
      setFirstName("");
      setEmali("");
    }
  };

  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name : </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmali(e.target.value)}
            />
          </div>
          <button type="submit">add person</button>
        </form>
        {people.map((person) => {
          const { id, firstName, email } = person;
          return (
            <div className="item" key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInput;
