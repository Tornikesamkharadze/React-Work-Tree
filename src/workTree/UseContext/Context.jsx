import React, { useContext, useState } from "react";

const data = [
  { id: 1, name: "tornike" },
  { id: 2, name: "salome" },
  { id: 3, name: "zura" },
  { id: 4, name: "nika" },
];

const PersonContext = React.createContext();
const ContextApi = () => {
  const [people, setPeople] = useState(data);

  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    <PersonContext.Provider value={{ removePerson }}>
      <h3>Prop Drilling</h3>
      <List people={people} />
    </PersonContext.Provider>
  );
};

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        return <SinglePerson key={person.id} {...person} />;
      })}
    </>
  );
};

const SinglePerson = ({ id, name }) => {
    const {removePerson } = useContext(PersonContext)
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={() => removePerson(id)}>Remove</button>
    </div>
  );
};

export default ContextApi;
