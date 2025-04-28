import { useState } from "react";

export default function TripForm({ trips, setTrips }) {
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ destination, date, image });
    const newTrip = {
      id: trips.length + 1,
      destination: destination,
      date: date,
      image: image,
      travelers: [],
    };
    if (newTrip.image) {
      setTrips([...trips, newTrip]);
    }

    setDestination(""), setDate(""), setImage(null);
    console.log("trip added", newTrip);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };
  return (
    <div className="container">
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

        <div className="mb-3">
          <label className="form-label">Date</label>
          <input
            type="date"
            className="form-control"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
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

        <button type="submit" id="btn-add">
          Create Travel Card
        </button>
      </form>
    </div>
  );
}
