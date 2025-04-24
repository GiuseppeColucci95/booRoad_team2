//custom contexts imports
import { useTrips } from "../contexts/globalContext";
import TripCard from "../components/TripCard";

export default function TripsList() {
  const tripsData = useTrips();
  console.log(tripsData);


  //template
  return (
    <>
      {
        tripsData && (
          <div className="container">
            <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-3 my-5">
              {
                tripsData.map(trip => (
                  <TripCard key={trip.id} trip={trip}></TripCard>
                ))
              }
            </div>
          </div>
        )
      }


    </>
  );
}