import React, { useEffect, useState } from "react";

import Loading from "./Components/Loading";
import Tours from "./Components/Tours";

import axios from "axios";
import "./Components/index.css";

const url = "https://course-api.com/react-tours-project";
const MainTours = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const filterTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const getData = async () => {
    try {
      const { data } = await axios(url);
      setLoading(false);
      setTours(data);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn" onClick={getData}>
            Refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} filterTour={filterTour} />
    </main>
  );
};

export default MainTours;
