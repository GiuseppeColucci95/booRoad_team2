//react imports
import { createContext, useContext, useState } from "react";

//define the context
const TripContext = createContext();

//function to wrap the app
function TripProvider({ children }) {

  const [trips, setTrips] = useState([]);

  return (
    <TripContext.Provider value={trips}>
      {children}
    </TripContext.Provider>
  );
}

//function to use the custom context
function useTrips() {

  return useContext(TripContext);
}

