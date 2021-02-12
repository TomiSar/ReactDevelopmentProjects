import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

// ATTENTION!!!!!!!!!! --> SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

    //remove tour from Tours list
    //If id mathches what is passed to function remove passed tour.id to Tours list
    const removeTour = (id) => {
      const newTours = tours.filter((tour) => tour.id !== id);
      setTours(newTours);
    }
  
  const fetchTours = async () => {
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);

    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  //Just running once
  useEffect(() => {
    fetchTours();
  }, [])

  //Loading is true
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  //If no tours are left show text and Refresh button to start fetchTours again
  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No tours to show</h2>
          <button className="btn" onClick={fetchTours}>Refresh</button>
        </div>
      </main>
    )
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
