import axios from "axios";
import React, { useEffect, useState } from "react";

const url = "https://course-api.com/react-tabs-project";
const MainTabs = () => {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const { data } = await axios(url);
    setJobs(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);
  console.log(jobs);
  if (loading) {
    return (
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    );
  }

  return <div>MainTabs</div>;
};

export default MainTabs;
