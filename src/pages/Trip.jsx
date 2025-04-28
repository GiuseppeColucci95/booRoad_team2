import { useParams } from "react-router-dom";
import { useTrips } from "../contexts/globalContext";

export default function Trip() {

  //datas
  const { id } = useParams();
  const tripsData = useTrips();
  const trip = tripsData[id - 1];
  const travelers = trip.travellers;
  console.log(trip);
  console.log(travelers);


  return (
    <>
      <section id="jumbotron" className="mb-5">
        <h1 className="text-center text-white py-3">{trip.destination.toUpperCase()}</h1>
        <img className="w-100" src={`/images/${trip.image}`} alt={`${trip.title} image`} />
      </section>

      <section id="travelers" className="mb-5">
        <div className="container">

          <div className="card traveler-card">

            <ul className="list-group text-left ">
              {
                travelers.map((traveler, index) => (
                  <li className="list-group-item travelers border-0 border-bottom rounded-0 d-flex justify-content-between" key={index}>
                    <div>{`${index + 1}. ${traveler}`}</div>
                    <div><i className="bi bi-trash"></i></div>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </section >
    </>
  );
}