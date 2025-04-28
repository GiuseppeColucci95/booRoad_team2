//custom react and contexts imports
import { useTrips } from "../contexts/globalContext";
import { Link } from "react-router-dom";
import { useState } from "react";
//components imports
import TripForm from "../components/TripForm";
import TripCard from "../components/TripCard";

export default function TripsList() {
  const tripsData = useTrips();
  const [trips, setTrips] = useState(tripsData);
  //template
  return (
    <>
      <TripForm trips={trips} setTrips={setTrips} />
      {tripsData && (
        <div className="container">
          <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-3 my-5">
            {trips.map((trip) => (
              <Link
                key={trip.id}
                className="text-decoration-none"
                to={`/trips/${trip.id}`}
              >
                <TripCard trip={trip}></TripCard>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
