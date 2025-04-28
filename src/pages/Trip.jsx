import { useParams } from "react-router-dom";
import { useTrips } from "../contexts/globalContext";
import { useState } from "react";
import { useEffect } from "react";
import SearchBar from "../components/SearchBar";
import TravelerInfo from "../components/Traveler";

export default function Trip() {

  //dataS
  const [filteredTravelers, setFilteredTravelers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [openOverlay, setOpenOverlay] = useState(false);
  const [selectedTraveler, setSelectedTraveler] = useState('');
  const { id } = useParams();
  const tripsData = useTrips();
  const trip = tripsData[id - 1];
  const [travelers, setTravelers] = useState(trip.travelers);
  const [newTraveler, setNewTraveler] = useState({});
  const [add, setAdd] = useState(false);

  //useEffect
  useEffect(() => {
    const filtered = travelers.filter(traveler => {
      const name = traveler.firstName + " " + traveler.lastName;
      return name.toLowerCase().includes(searchQuery.toLowerCase());
    });

    setFilteredTravelers(filtered);
  }, [searchQuery, travelers]);

  //function to add a traveler
  function handleAdd(e) {
    e.preventDefault();
    console.log(newTraveler);

    const array = filteredTravelers;

    array.push(newTraveler)

    setTravelers(array);
    setAdd(false);
  }

  //function to delete a traveler
  function handleDelete(index) {

    console.log(index);

    const array = filteredTravelers;
    const nameToDelete = array[index];

    array.splice(array.indexOf(nameToDelete), 1);

    setTravelers(array);
  }

  function handleAddState(e) {
    setAdd(true);
  }

  function handleNewTraveler(e) {
    console.log(e.target.value);
    console.log();


    setNewTraveler({ ...newTraveler, [e.target.name]: e.target.value });
  }

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
        <div className="container  position-relative">
          {openOverlay && (
            <TravelerInfo selectedTraveler={selectedTraveler} setOpenOverlay={setOpenOverlay} />
          )
          }
          <SearchBar setSearchQuery={setSearchQuery}></SearchBar>

          <div className="card traveler-card">

            <ul className="list-group text-left ">
              {
                filteredTravelers.map((traveler, index) => (
                  <li className="list-group-item travelers border-0 border-bottom rounded-0 d-flex justify-content-between" key={index}>
                    <div onClick={() => clickHandler(traveler)}>{`${index + 1}. ${traveler.firstName + ' ' + traveler.lastName}`}</div>
                    <div className="d-flex gap-2">
                      <div onClick={() => clickHandler(traveler)}>
                        <i className="bi bi-info-circle"></i>

                      </div>
                      <div onClick={() => { handleDelete(index) }}>
                        <i className="bi bi-trash"></i>
                      </div>
                    </div>
                  </li>
                ))
              }
            </ul>
          </div>

          {
            !add ?
              (
                <button onClick={handleAddState} className="my-3 fs-1 mx-auto" id="btn-add">+</button>
              )
              :
              (
                <form className="w-50 mx-auto mt-3" onSubmit={handleAdd} action="">
                  <div className="d-flex flex-column align-items-center justify-content-center gap-2">

                    <div className="d-flex gap-3 w-100">
                      <input
                        type="text"
                        className="form-control"
                        name="firstName"
                        id="firstName"
                        aria-describedby="firstNameId"
                        placeholder="First Name"
                        onChange={(e) => handleNewTraveler(e)}
                      />
                      <input
                        type="text"
                        className="form-control"
                        name="lastName"
                        id="lastName"
                        aria-describedby="lastNameId"
                        placeholder="Last name"
                        onChange={(e) => handleNewTraveler(e)}
                      />
                      <input
                        type="number"
                        className="form-control"
                        name="phone"
                        id="phone"
                        aria-describedby="phoneId"
                        placeholder="Phone"
                        onChange={(e) => handleNewTraveler(e)}
                      />
                    </div>
                    <div className="d-flex gap-3 w-100">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        aria-describedby="emailId"
                        placeholder="e-mail"
                        onChange={(e) => handleNewTraveler(e)}
                      />
                      <input
                        type="text"
                        className="form-control"
                        name="fiscalCode"
                        id="fiscalCode"
                        aria-describedby="fiscalCodeId"
                        placeholder="Fiscal Code"
                        onChange={(e) => handleNewTraveler(e)}
                      />
                    </div>

                    <button className="new mt-1" id="btn-add">ADD NEW TRAVELER</button>
                  </div>
                </form>
              )
          }



        </div>
      </section >
    </>
  );
}