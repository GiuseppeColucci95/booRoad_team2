export default function TripCard({ trip }) {
  //template
  return (
    <div className="col h-100 trip-card">
      <div className="card trips-list h-100">
        <img
          className="card-img-top h-100"
          src={!(trip.image.length > 30) ? `/images/${trip.image}` : trip.image}
          alt={`${trip.destination} image`}
        />
        <div className="card-body">
          <h5>{trip.destination}</h5>
          <h6>{trip.date}</h6>
        </div>
      </div>
    </div>
  );
}
