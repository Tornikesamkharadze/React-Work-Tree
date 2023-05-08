import React, { useEffect, useState } from "react";
import "./index.css";
import { getSessionStorage } from "../../Utils/getsessionStorage";

const initialValues = { firstName: "", email: "", age: "" };

const MultipleInput = () => {
  const [person, setPerson] = useState(initialValues);
  const [people, setPeople] = useState(getSessionStorage("User", []));
  const { firstName, email, age } = person;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPerson({ ...person, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && email && age) {
      const newPerson = { ...person, id: Date.now() };
      setPeople([...people, newPerson]);
      setPerson(initialValues);
    }
  };
  useEffect(() => {
    sessionStorage.setItem("User", JSON.stringify(people));
  }, [people]);

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
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="age">Age : </label>
            <input
              type="text"
              name="age"
              id="age"
              value={age}
              onChange={handleChange}
            />
          </div>
          <button type="submit">add person</button>
        </form>
        {people.map((person) => {
          const { id, firstName, email, age } = person;
          return (
            <div className="item" key={id}>
              <h4>{firstName}</h4>
              <p>{age}</p>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default MultipleInput;
