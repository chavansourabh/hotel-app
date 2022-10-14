import { useState, useEffect } from "react";

function App() {
  const [hotels, setHotels] = useState(null);

  const fetchData = async () => {
    const response = await fetch("/.netlify/functions/getHotels");
    const responseBody = await response.json();
    setHotels(responseBody);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(hotels);
  return (
    <div className="App">
      {hotels?.map((hotel) => (
        <div className="hotel">
          <h1>{hotel.name}</h1>
          <p>{hotel.rating}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
