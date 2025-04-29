import { useState } from "react";

export default function TripForm({ trips, setTrips }) {
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  const [image, setImage] = useState(null);
  const [add, setAdd] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ destination, date, returnDate, image });
    const newTrip = {
      id: trips.length + 1,
      destination: destination,
      date: date,
      returnDate: returnDate,
      image: image,
      travelers: [],
    };
    if (newTrip.image) {
      setTrips([...trips, newTrip]);
    }

    setDestination(""), setDate(""), setReturnDate(""), setImage(null);
    console.log("trip added", newTrip);
    setAdd(false);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="container">
      {!add ? (
        <button
          id="btn-add-form"
          onClick={() => {
            setAdd(true);
          }}
          className="mx-auto"
        >
          Add a new Trip
        </button>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Destination</label>
            <input
              type="text"
              className="form-control"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              required
            />
          </div>

          <div className="d-flex gap-3">
            <div className="mb-3 w-50">
              <label className="form-label">Departure Date</label>
              <input
                type="date"
                className="form-control"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>

            <div className="mb-3 w-50">
              <label className="form-label">Return Date</label>
              <input
                type="date"
                className="form-control"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Upload Image</label>
            <input
              type="file"
              className="form-control"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>

          <button type="submit" id="btn-add-form" className="mx-auto">
            Create Travel Card
          </button>
        </form>
      )}
    </div>
  );
}
