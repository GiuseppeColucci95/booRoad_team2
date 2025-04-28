import { useParams } from "react-router-dom";
import { useTrips } from "../contexts/globalContext";
import { useState } from "react";
import { useEffect } from "react";
import SearchBar from "../components/SearchBar";
import TravelerInfo from "../components/Traveler";

export default function Trip() {

  //datas
  const [filteredTravelers, setFilteredTravelers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [openOverlay, setOpenOverlay] = useState(false);
  const [selectedTraveler, setSelectedTraveler] = useState('');
  const { id } = useParams();
  const tripsData = useTrips();
  const trip = tripsData[id - 1];
  const travelers = trip.travelers;


  useEffect(() => {

    const filtered = travelers.filter(traveler => {
      const name = traveler.firstName + " " + traveler.lastName;
      return name.toLowerCase().includes(searchQuery.toLowerCase());
    });

    setFilteredTravelers(filtered);
  }, [searchQuery]);

  console.log(searchQuery);

  function clickHandler(traveler) {
    setSelectedTraveler(traveler)
    setOpenOverlay(true)
    console.log(selectedTraveler, openOverlay)
  }


  return (
    <>
      <section id="jumbotron" className="mb-5">
        <h1 className="text-center text-white py-3">{trip.destination.toUpperCase()}</h1>
        <img className="w-100" src={`/images/${trip.image}`} alt={`${trip.title} image`} />
      </section>

      <section id="travelers" className="mb-5">
        {openOverlay && (
          <TravelerInfo selectedTraveler={selectedTraveler} setOpenOverlay={setOpenOverlay} />
        )
        }
        <div className="container">

          <SearchBar setSearchQuery={setSearchQuery}></SearchBar>

          <div className="card traveler-card">

            <ul className="list-group text-left ">
              {
                filteredTravelers.map((traveler, index) => (
                  <li className="list-group-item travelers border-0 border-bottom rounded-0 d-flex justify-content-between" key={index}>
                    <div>{`${index + 1}. ${traveler.firstName + ' ' + traveler.lastName}`}</div>
                    <div className="d-flex gap-2">
                      <div>
                        <i className="bi bi-trash"></i>
                      </div>
                      <div onClick={() => { clickHandler(traveler) }}>
                        <i class="bi bi-info-circle"></i>
                      </div>
                    </div>
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