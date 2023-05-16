import React, { useState } from "react";

const data = [
  { id: 1, name: "tornike" },
  { id: 2, name: "salome" },
  { id: 3, name: "zura" },
  { id: 4, name: "nika" },
];

const PropDrilling = () => {
  const [people, setPeople] = useState(data);

  return (
    <section>
      <h3>Prop Drilling</h3>
      <List people={people} />
    </section>
  );
};

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        return <SinglePerson key={person.id} name={person.name} />;
      })}
    </>
  );
};

const SinglePerson = ({ name }) => {
  return <h1>{name}</h1>;
};

export default PropDrilling;
