import React, { useState } from "react";

const data = [
  { id: 1, name: "tornike" },
  { id: 2, name: "salome" },
  { id: 3, name: "zura" },
  { id: 4, name: "nika" },
];

const ContextApi = () => {
  const [people, setPeople] = useState(data);

  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    <section>
      <h3>Prop Drilling</h3>
      <List people={people} removePerson={removePerson} />
    </section>
  );
};

const List = ({ people, removePerson }) => {
  return (
    <>
      {people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            {...person}
            removePerson={removePerson}
          />
        );
      })}
    </>
  );
};

const SinglePerson = ({ id, name, removePerson }) => {
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={() => removePerson(id)}>Remove</button>
    </div>
  );
};

export default ContextApi;
