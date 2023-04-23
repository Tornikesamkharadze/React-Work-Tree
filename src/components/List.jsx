import React from "react";

const List = ({ people }) => {
  return (
    <>
      {people.map((people) => {
        return (
          <article className="person" key={people.id}>
            <img src={people.image} alt={people.name} />
            <div>
              <h4>{people.name}</h4>
              <span>{people.age} years</span>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
