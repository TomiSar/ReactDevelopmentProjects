import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

// SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";
function App() {
  const [loading, setLoading] = useState(true); //loading
  const [jobs, setJobs] = useState([]);         //jobs
  const [value, setValue] = useState(0);        //index of data from url

  //fetchData from url
  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  //Loading is active
  if (loading) {
    return (
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    );
  }

  //Destructuring jobs from properties AFTER loading (because undefined cause jobs[value] set before Loading) 
  const { company, dates, duties, title } = jobs[value];

  return (
    <section className="section">
      <div className="title">
        <h2>Experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container">
        { jobs.map((item, index) => {
          return <button key={item.id} onClick={() => setValue(index)} 
          className={`job-btn ${index === value && 'active-btn'}`}
          >{item.company}</button>
        })}
        </div>
        {/* job info */}
        <div className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {/* map duties because duties[] */}
          { duties.map((duty, index) => {
            return ( <div key={index} className="job-desc">
              <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
              <p>{duty}</p>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default App;