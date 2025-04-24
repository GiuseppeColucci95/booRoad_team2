export default function TripCard({ trip }) {

  //template
  return (
    <div className="col h-100">
      <div className="card h-100">
        <img className="card-img-top h-100" src={`/images/${trip.image}`} alt={`${trip.destination} image`} />
        <div className="card-body">
          <h5>{trip.destination}</h5>
          <h6>{trip.date}</h6>
        </div>
      </div>
    </div>
  );
}