//custom react and contexts imports
import { useTrips } from "../contexts/globalContext";
import { Link } from "react-router-dom";

//components imports
import TripCard from "../components/TripCard";

export default function TripsList() {
  const tripsData = useTrips();

  //template
  return (
    <>
      {
        tripsData && (
          <div className="container">
            <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-3 my-5">
              {
                tripsData.map(trip => (
                  <Link key={trip.id} className="text-decoration-none" to={`/trips/${trip.id}`}><TripCard trip={trip}></TripCard></Link>
                ))
              }
            </div>
          </div>
        )
      }
    </>
  );
}