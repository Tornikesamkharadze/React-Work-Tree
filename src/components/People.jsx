import React, { useState } from "react";
import data from "../Data/people.json";

const People = () => {
  const [people, setPeople] = useState(data);

  const removeUserHandler = (id) => {
    const filteredUsers = people.filter((peopleId) => {
      return peopleId.id !== id;
    });
    setPeople(filteredUsers);
  };
  console.log(typeof [people]);
  return (
    <React.Fragment>
      {people.map((people) => {
        return (
          <div key={people.id}>
            <h1>{people.name}</h1>
            <button onClick={() => removeUserHandler(people.id)}>
              Remove User
            </button>
          </div>
        );
      })}
      <h1>{people.name}</h1>
      {people.length > 0 && (
        <button onClick={() => setPeople([])}>Remove All User</button>
      )}
    </React.Fragment>
  );
};

export default People;
