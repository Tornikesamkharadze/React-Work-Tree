import React, { useState } from "react";

import data from "./Data/data";
import List from "./components/List";

function App() {
  const [people, setPeople] = useState(data);

  const clearAllHandler = () => {
    if (people.length > 0) {
      setPeople([]);
    } else if (people.length === 0) {
      setPeople(data);
    }
  };

  return (
    <main>
      <section className="container">
        {people.length > 0 ? (
          <h3>{people.length}Birthdays Today</h3>
        ) : (
          `${people.length} Birthdays Today`
        )}
        <List people={people} />
        <button onClick={clearAllHandler}>
          {people.length > 0 ? "Clear All" : "See Birthdays"}
        </button>
      </section>
    </main>
  );
}

export default App;
