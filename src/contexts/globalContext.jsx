import { createContext, useState } from "react";

const TripContext = createContext();

function TripProvider({ children }) {

  const [trips, setTrips] = useState([]);

  return (
    <TripContext.Provider value>
      {children}
    </TripContext.Provider>
  );
}

