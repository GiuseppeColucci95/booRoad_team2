//react imports
import { createContext, useContext, useState } from "react";

//data imports
const tripsData = [
  {
    id: 1,
    destination: "Paris, France",
    date: "2023-11-15",
    image: "paris.jpeg",
    travellers: [
      "John Smith", "Jane Doe", "Alex Johnson", "Emily Brown", "Chris Davis",
      "Sarah Miller", "Michael Garcia", "Laura Martinez", "David Hernandez", "Sophia Williams",
      "Daniel Jones", "Emma Wilson", "Oliver Taylor", "Isabella Moore", "Liam Anderson"
    ],
  },
  {
    id: 2,
    destination: "Tokyo, Japan",
    date: "2024-01-10",
    image: "tokyo.jpg",
    travellers: [
      "Ethan Thomas", "Mia White", "James Harris", "Charlotte Martin", "Benjamin Thompson",
      "Amelia Clark", "Lucas Lewis", "Ava Walker", "Henry Hall", "Ella Allen",
      "Jack Young", "Grace King", "William Wright", "Lily Scott", "Noah Green"
    ],
  },
  {
    id: 3,
    destination: "New York, USA",
    date: "2023-12-05",
    image: "new_york.jpg",
    travellers: [
      "Samuel Adams", "Hannah Baker", "Jacob Carter", "Victoria Evans", "Elijah Turner",
      "Zoe Mitchell", "Matthew Perez", "Chloe Roberts", "Alexander Phillips", "Harper Campbell",
      "Sebastian Parker", "Layla Edwards", "Nathan Collins", "Aria Stewart", "Owen Morris"
    ],
  },
  {
    id: 4,
    destination: "Sydney, Australia",
    date: "2024-02-20",
    image: "sydney.jpg",
    travellers: [
      "Levi Rogers", "Scarlett Cook", "Mason Bailey", "Luna Rivera", "Logan Cooper",
      "Ellie Richardson", "Jackson Cox", "Sofia Howard", "Aiden Ward", "Penelope Hughes",
      "Caleb Peterson", "Riley Gray", "Gabriel Ramirez", "Nora James", "Carter Watson"
    ],
  },
  {
    id: 5,
    destination: "Rome, Italy",
    date: "2024-03-15",
    image: "roma.jpg",
    travellers: [
      "Julian Brooks", "Aurora Kelly", "Wyatt Sanders", "Savannah Price", "Isaac Bennett",
      "Stella Wood", "Eli Barnes", "Violet Ross", "Hunter Henderson", "Hazel Coleman",
      "Ezra Jenkins", "Lillian Perry", "Thomas Powell", "Addison Long", "Aaron Patterson"
    ],
  },
  {
    id: 6,
    destination: "Cape Town, South Africa",
    date: "2024-04-10",
    image: "cape_town.jpeg",
    travellers: [
      "Dominic Hughes", "Madison Foster", "Miles Simmons", "Paisley Bryant", "Evan Alexander",
      "Lucy Griffin", "Adam Hayes", "Aubrey Russell", "Connor Myers", "Maya Ford",
      "Ian Hamilton", "Anna Graham", "Colton Sullivan", "Lydia Wallace", "Asher West"
    ],
  },
  {
    id: 7,
    destination: "Rio de Janeiro, Brazil",
    date: "2024-05-05",
    image: "rio_de_janeiro.jpeg",
    travellers: [
      "Easton Butler", "Naomi Bell", "Carson Murphy", "Elena Torres", "Roman Fisher",
      "Clara Nguyen", "Axel Flores", "Isla Reed", "Parker Ward", "Sadie Bennett",
      "Jason Carter", "Ariana Bailey", "Ezekiel Cooper", "Ruby Jenkins", "Micah Powell"
    ],
  },
  {
    id: 8,
    destination: "Bangkok, Thailand",
    date: "2024-06-20",
    image: "bangkok.jpg",
    travellers: [
      "Jonah Patterson", "Alice Brooks", "Leo Sanders", "Eva Price", "Nathaniel Bennett",
      "Samantha Wood", "Grayson Barnes", "Lila Ross", "Elliot Henderson", "Mila Coleman",
      "Theodore Jenkins", "Ivy Perry", "Calvin Powell", "Willow Long", "Declan Patterson"
    ],
  },
  {
    id: 9,
    destination: "Dubai, UAE",
    date: "2024-07-15",
    image: "dubai.jpeg",
    travellers: [
      "Finn Hughes", "Bella Foster", "Ryder Simmons", "Autumn Bryant", "Xavier Alexander",
      "Piper Griffin", "Max Hayes", "Elliana Russell", "Bentley Myers", "Alyssa Ford",
      "Zachary Hamilton", "Delilah Graham", "Jayce Sullivan", "Adeline Wallace", "Beau West"
    ],
  },
  {
    id: 10,
    destination: "Istanbul, Turkey",
    date: "2024-08-10",
    image: "istanbul.jpg",
    travellers: [
      "Gavin Butler", "Leah Bell", "Sawyer Murphy", "Camila Torres", "Brayden Fisher",
      "Luna Nguyen", "Kaiden Flores", "Emery Reed", "Bryce Ward", "Vivian Bennett",
      "Jace Carter", "Eliana Bailey", "Kingston Cooper", "Arianna Jenkins", "Malachi Powell"
    ],
  },
  {
    id: 11,
    destination: "Berlin, Germany",
    date: "2024-09-05",
    image: "berlin.png",
    travellers: [
      "Tyler Patterson", "Molly Brooks", "Wesley Sanders", "Jasmine Price", "Elliott Bennett",
      "Natalie Wood", "Rowan Barnes", "Amara Ross", "Kaden Henderson", "Lola Coleman",
      "Emmett Jenkins", "Isabel Perry", "Jasper Powell", "Vivienne Long", "Ronan Patterson"
    ],
  },
  {
    id: 12,
    destination: "Athens, Greece",
    date: "2024-10-10",
    image: "athens.png",
    travellers: [
      "Cameron Hughes", "Melody Foster", "Brody Simmons", "Juliette Bryant", "Zane Alexander",
      "Daisy Griffin", "Elias Hayes", "Genevieve Russell", "Tristan Myers", "Adelaide Ford",
      "Silas Hamilton", "Rosalie Graham", "Holden Sullivan", "Evangeline Wallace", "Rhett West"
    ],
  },
  {
    id: 13,
    destination: "Lisbon, Portugal",
    date: "2024-11-15",
    image: "lisbon.png",
    travellers: [
      "Grant Butler", "Lena Bell", "Tucker Murphy", "Cecilia Torres", "Jude Fisher",
      "Mabel Nguyen", "Reid Flores", "Alina Reed", "Griffin Ward", "Margot Bennett",
      "Simon Carter", "Anastasia Bailey", "Walker Cooper", "Felicity Jenkins", "Cruz Powell"
    ],
  },
  {
    id: 14,
    destination: "Moscow, Russia",
    date: "2024-12-20",
    image: "moscow.png",
    travellers: [
      "Derek Patterson", "Elise Brooks", "Spencer Sanders", "Bianca Price", "Tate Bennett",
      "Cora Wood", "Jett Barnes", "Lilliana Ross", "Kieran Henderson", "Mae Coleman",
      "Anderson Jenkins", "Serena Perry", "Knox Powell", "Daphne Long", "Porter Patterson"
    ],
  },
  {
    id: 15,
    destination: "Seoul, South Korea",
    date: "2025-01-05",
    image: "seoul.png",
    travellers: [
      "Chase Hughes", "Iris Foster", "Rylan Simmons", "Phoebe Bryant", "Troy Alexander",
      "June Griffin", "Caden Hayes", "Esme Russell", "Corbin Myers", "Wren Ford",
      "Dawson Hamilton", "Liana Graham", "Kobe Sullivan", "Mira Wallace", "Sage West"
    ],
  },
];

//define the context
const TripContext = createContext();

//function to wrap the app
function TripProvider({ children }) {

  const [trips, setTrips] = useState([]);
  setTrips(tripsData);

  //template
  return (
    <TripContext.Provider value={trips}>
      {children}
    </TripContext.Provider>
  );
}

//function to use the custom context
function useTrips() {

  return useContext(TripContext);
}

//exports
export { TripProvider, useTrips };

