//react imports
import { createContext, useContext, useState } from "react";



//define the context
const TripContext = createContext();

//function to wrap the app
function TripProvider({ children }) {

  //data imports
  const tripsData = [
    { // ID 1
      id: 1,
      destination: "Paris, France",
      date: "2023-11-15",
      image: "paris.jpeg",
      travelers: [
        {
          firstName: "John",
          lastName: "Smith",
          email: "john.smith@example.com",
          phone: "+1234567890",
          fiscalCode: "JHN123SMITH"
        },
        {
          firstName: "Jane",
          lastName: "Doe",
          email: "jane.doe@example.com",
          phone: "+1234567891",
          fiscalCode: "JNE456DOE"
        },
        {
          firstName: "Alex",
          lastName: "Johnson",
          email: "alex.johnson@example.com",
          phone: "+1234567892",
          fiscalCode: "ALX789JOHN"
        },
        {
          firstName: "Emily",
          lastName: "Brown",
          email: "emily.brown@example.com",
          phone: "+1234567893",
          fiscalCode: "EML123BROWN"
        },
        {
          firstName: "Chris",
          lastName: "Davis",
          email: "chris.davis@example.com",
          phone: "+1234567894",
          fiscalCode: "CHR456DAVIS"
        },
        {
          firstName: "Sarah",
          lastName: "Miller",
          email: "sarah.miller@example.com",
          phone: "+1234567895",
          fiscalCode: "SRH789MILL"
        },
        {
          firstName: "Michael",
          lastName: "Garcia",
          email: "michael.garcia@example.com",
          phone: "+1234567896",
          fiscalCode: "MCH123GARC"
        },
        {
          firstName: "Laura",
          lastName: "Martinez",
          email: "laura.martinez@example.com",
          phone: "+1234567897",
          fiscalCode: "LRA456MART"
        },
        {
          firstName: "David",
          lastName: "Hernandez",
          email: "david.hernandez@example.com",
          phone: "+1234567898",
          fiscalCode: "DVD789HERN"
        },
        {
          firstName: "Sophia",
          lastName: "Williams",
          email: "sophia.williams@example.com",
          phone: "+1234567899",
          fiscalCode: "SPH123WILL"
        },
        {
          firstName: "Daniel",
          lastName: "Jones",
          email: "daniel.jones@example.com",
          phone: "+1234567800",
          fiscalCode: "DNL456JONE"
        },
        {
          firstName: "Emma",
          lastName: "Wilson",
          email: "emma.wilson@example.com",
          phone: "+1234567801",
          fiscalCode: "EMM789WILS"
        },
        {
          firstName: "Oliver",
          lastName: "Taylor",
          email: "oliver.taylor@example.com",
          phone: "+1234567802",
          fiscalCode: "OLV123TAYL"
        },
        {
          firstName: "Isabella",
          lastName: "Moore",
          email: "isabella.moore@example.com",
          phone: "+1234567803",
          fiscalCode: "ISB456MOOR"
        },
        {
          firstName: "Liam",
          lastName: "Anderson",
          email: "liam.anderson@example.com",
          phone: "+1234567804",
          fiscalCode: "LIA789ANDE"
        }
      ],
    },
    { // ID 2
      id: 2,
      destination: "Tokyo, Japan",
      date: "2024-01-10",
      image: "tokyo.jpg",
      travelers: [
        {
          firstName: "Ethan",
          lastName: "Thomas",
          email: "ethan.thomas@example.com",
          phone: "+1234567805",
          fiscalCode: "ETH123THOM"
        },
        {
          firstName: "Mia",
          lastName: "White",
          email: "mia.white@example.com",
          phone: "+1234567806",
          fiscalCode: "MIA456WHIT"
        },
        {
          firstName: "James",
          lastName: "Harris",
          email: "james.harris@example.com",
          phone: "+1234567807",
          fiscalCode: "JMS789HARR"
        },
        {
          firstName: "Charlotte",
          lastName: "Martin",
          email: "charlotte.martin@example.com",
          phone: "+1234567808",
          fiscalCode: "CHR123MART"
        },
        {
          firstName: "Benjamin",
          lastName: "Thompson",
          email: "benjamin.thompson@example.com",
          phone: "+1234567809",
          fiscalCode: "BEN456THOM"
        },
        {
          firstName: "Amelia",
          lastName: "Clark",
          email: "amelia.clark@example.com",
          phone: "+1234567810",
          fiscalCode: "AML789CLAR"
        },
        {
          firstName: "Lucas",
          lastName: "Lewis",
          email: "lucas.lewis@example.com",
          phone: "+1234567811",
          fiscalCode: "LCS123LEWI"
        },
        {
          firstName: "Ava",
          lastName: "Walker",
          email: "ava.walker@example.com",
          phone: "+1234567812",
          fiscalCode: "AVA456WALK"
        },
        {
          firstName: "Henry",
          lastName: "Hall",
          email: "henry.hall@example.com",
          phone: "+1234567813",
          fiscalCode: "HNR789HALL"
        },
        {
          firstName: "Ella",
          lastName: "Allen",
          email: "ella.allen@example.com",
          phone: "+1234567814",
          fiscalCode: "ELL123ALLE"
        },
        {
          firstName: "Jack",
          lastName: "Young",
          email: "jack.young@example.com",
          phone: "+1234567815",
          fiscalCode: "JCK456YOUN"
        },
        {
          firstName: "Grace",
          lastName: "King",
          email: "grace.king@example.com",
          phone: "+1234567816",
          fiscalCode: "GRC789KING"
        },
        {
          firstName: "William",
          lastName: "Wright",
          email: "william.wright@example.com",
          phone: "+1234567817",
          fiscalCode: "WLM123WRIG"
        },
        {
          firstName: "Lily",
          lastName: "Scott",
          email: "lily.scott@example.com",
          phone: "+1234567818",
          fiscalCode: "LLY456SCOT"
        },
        {
          firstName: "Noah",
          lastName: "Green",
          email: "noah.green@example.com",
          phone: "+1234567819",
          fiscalCode: "NOH789GREE"
        }
      ]
    },
    { // ID 3
      id: 3,
      destination: "New York, USA",
      date: "2023-12-05",
      image: "new_york.jpg",
      travelers: [
        {
          firstName: "Samuel",
          lastName: "Adams",
          email: "samuel.adams@example.com",
          phone: "+1234567820",
          fiscalCode: "SAM123ADAM"
        },
        {
          firstName: "Hannah",
          lastName: "Baker",
          email: "hannah.baker@example.com",
          phone: "+1234567821",
          fiscalCode: "HAN456BAKE"
        },
        {
          firstName: "Jacob",
          lastName: "Carter",
          email: "jacob.carter@example.com",
          phone: "+1234567822",
          fiscalCode: "JAC789CART"
        },
        {
          firstName: "Victoria",
          lastName: "Evans",
          email: "victoria.evans@example.com",
          phone: "+1234567823",
          fiscalCode: "VIC123EVAN"
        },
        {
          firstName: "Elijah",
          lastName: "Turner",
          email: "elijah.turner@example.com",
          phone: "+1234567824",
          fiscalCode: "ELI456TURN"
        },
        {
          firstName: "Zoe",
          lastName: "Mitchell",
          email: "zoe.mitchell@example.com",
          phone: "+1234567825",
          fiscalCode: "ZOE789MITC"
        },
        {
          firstName: "Matthew",
          lastName: "Perez",
          email: "matthew.perez@example.com",
          phone: "+1234567826",
          fiscalCode: "MAT123PERE"
        },
        {
          firstName: "Chloe",
          lastName: "Roberts",
          email: "chloe.roberts@example.com",
          phone: "+1234567827",
          fiscalCode: "CHL456ROBE"
        },
        {
          firstName: "Alexander",
          lastName: "Phillips",
          email: "alexander.phillips@example.com",
          phone: "+1234567828",
          fiscalCode: "ALE789PHIL"
        },
        {
          firstName: "Harper",
          lastName: "Campbell",
          email: "harper.campbell@example.com",
          phone: "+1234567829",
          fiscalCode: "HAR123CAMP"
        },
        {
          firstName: "Sebastian",
          lastName: "Parker",
          email: "sebastian.parker@example.com",
          phone: "+1234567830",
          fiscalCode: "SEB456PARK"
        },
        {
          firstName: "Layla",
          lastName: "Edwards",
          email: "layla.edwards@example.com",
          phone: "+1234567831",
          fiscalCode: "LAY789EDWA"
        },
        {
          firstName: "Nathan",
          lastName: "Collins",
          email: "nathan.collins@example.com",
          phone: "+1234567832",
          fiscalCode: "NAT123COLL"
        },
        {
          firstName: "Aria",
          lastName: "Stewart",
          email: "aria.stewart@example.com",
          phone: "+1234567833",
          fiscalCode: "ARI456STEW"
        },
        {
          firstName: "Owen",
          lastName: "Morris",
          email: "owen.morris@example.com",
          phone: "+1234567834",
          fiscalCode: "OWE789MORR"
        }
      ]
    },
    { // ID 4
      id: 4,
      destination: "Sydney, Australia",
      date: "2024-02-20",
      image: "sydney.jpg",
      travelers: [
        {
          firstName: "Levi",
          lastName: "Rogers",
          email: "levi.rogers@example.com",
          phone: "+1234567835",
          fiscalCode: "LEVI123ROGE"
        },
        {
          firstName: "Scarlett",
          lastName: "Cook",
          email: "scarlett.cook@example.com",
          phone: "+1234567836",
          fiscalCode: "SCAR456COOK"
        },
        {
          firstName: "Mason",
          lastName: "Bailey",
          email: "mason.bailey@example.com",
          phone: "+1234567837",
          fiscalCode: "MAS789BAIL"
        },
        {
          firstName: "Luna",
          lastName: "Rivera",
          email: "luna.rivera@example.com",
          phone: "+1234567838",
          fiscalCode: "LUN123RIVE"
        },
        {
          firstName: "Logan",
          lastName: "Cooper",
          email: "logan.cooper@example.com",
          phone: "+1234567839",
          fiscalCode: "LOG456COOP"
        },
        {
          firstName: "Ellie",
          lastName: "Richardson",
          email: "ellie.richardson@example.com",
          phone: "+1234567840",
          fiscalCode: "ELL789RICH"
        },
        {
          firstName: "Jackson",
          lastName: "Cox",
          email: "jackson.cox@example.com",
          phone: "+1234567841",
          fiscalCode: "JAC123COX"
        },
        {
          firstName: "Sofia",
          lastName: "Howard",
          email: "sofia.howard@example.com",
          phone: "+1234567842",
          fiscalCode: "SOF456HOWA"
        },
        {
          firstName: "Aiden",
          lastName: "Ward",
          email: "aiden.ward@example.com",
          phone: "+1234567843",
          fiscalCode: "AID789WARD"
        },
        {
          firstName: "Penelope",
          lastName: "Hughes",
          email: "penelope.hughes@example.com",
          phone: "+1234567844",
          fiscalCode: "PEN123HUGH"
        },
        {
          firstName: "Caleb",
          lastName: "Peterson",
          email: "caleb.peterson@example.com",
          phone: "+1234567845",
          fiscalCode: "CAL456PETE"
        },
        {
          firstName: "Riley",
          lastName: "Gray",
          email: "riley.gray@example.com",
          phone: "+1234567846",
          fiscalCode: "RIL789GRAY"
        },
        {
          firstName: "Gabriel",
          lastName: "Ramirez",
          email: "gabriel.ramirez@example.com",
          phone: "+1234567847",
          fiscalCode: "GAB123RAMI"
        },
        {
          firstName: "Nora",
          lastName: "James",
          email: "nora.james@example.com",
          phone: "+1234567848",
          fiscalCode: "NOR456JAME"
        },
        {
          firstName: "Carter",
          lastName: "Watson",
          email: "carter.watson@example.com",
          phone: "+1234567849",
          fiscalCode: "CAR789WATS"
        }
      ]
    },
    { // ID 5
      id: 5,
      destination: "Rome, Italy",
      date: "2024-03-15",
      image: "roma.jpg",
      travelers: [
        {
          firstName: "Julian",
          lastName: "Brooks",
          email: "julian.brooks@example.com",
          phone: "+1234567850",
          fiscalCode: "JUL123BROO"
        },
        {
          firstName: "Aurora",
          lastName: "Kelly",
          email: "aurora.kelly@example.com",
          phone: "+1234567851",
          fiscalCode: "AUR456KELL"
        },
        {
          firstName: "Wyatt",
          lastName: "Sanders",
          email: "wyatt.sanders@example.com",
          phone: "+1234567852",
          fiscalCode: "WYA789SAND"
        },
        {
          firstName: "Savannah",
          lastName: "Price",
          email: "savannah.price@example.com",
          phone: "+1234567853",
          fiscalCode: "SAV123PRIC"
        },
        {
          firstName: "Isaac",
          lastName: "Bennett",
          email: "isaac.bennett@example.com",
          phone: "+1234567854",
          fiscalCode: "ISA456BENN"
        },
        {
          firstName: "Stella",
          lastName: "Wood",
          email: "stella.wood@example.com",
          phone: "+1234567855",
          fiscalCode: "STE789WOOD"
        },
        {
          firstName: "Eli",
          lastName: "Barnes",
          email: "eli.barnes@example.com",
          phone: "+1234567856",
          fiscalCode: "ELI123BARN"
        },
        {
          firstName: "Violet",
          lastName: "Ross",
          email: "violet.ross@example.com",
          phone: "+1234567857",
          fiscalCode: "VIO456ROSS"
        },
        {
          firstName: "Hunter",
          lastName: "Henderson",
          email: "hunter.henderson@example.com",
          phone: "+1234567858",
          fiscalCode: "HUN789HEND"
        },
        {
          firstName: "Hazel",
          lastName: "Coleman",
          email: "hazel.coleman@example.com",
          phone: "+1234567859",
          fiscalCode: "HAZ123COLE"
        },
        {
          firstName: "Ezra",
          lastName: "Jenkins",
          email: "ezra.jenkins@example.com",
          phone: "+1234567860",
          fiscalCode: "EZR456JENK"
        },
        {
          firstName: "Lillian",
          lastName: "Perry",
          email: "lillian.perry@example.com",
          phone: "+1234567861",
          fiscalCode: "LIL789PERR"
        },
        {
          firstName: "Thomas",
          lastName: "Powell",
          email: "thomas.powell@example.com",
          phone: "+1234567862",
          fiscalCode: "THO123POWE"
        },
        {
          firstName: "Addison",
          lastName: "Long",
          email: "addison.long@example.com",
          phone: "+1234567863",
          fiscalCode: "ADD456LONG"
        },
        {
          firstName: "Aaron",
          lastName: "Patterson",
          email: "aaron.patterson@example.com",
          phone: "+1234567864",
          fiscalCode: "AAR789PATT"
        }
      ]
    },
    { // ID 6
      id: 6,
      destination: "Cape Town, South Africa",
      date: "2024-04-10",
      image: "cape_town.jpeg",
      travelers: [
        {
          firstName: "Dominic",
          lastName: "Hughes",
          email: "dominic.hughes@example.com",
          phone: "+1234567865",
          fiscalCode: "DOM123HUGH"
        },
        {
          firstName: "Madison",
          lastName: "Foster",
          email: "madison.foster@example.com",
          phone: "+1234567866",
          fiscalCode: "MAD456FOST"
        },
        {
          firstName: "Miles",
          lastName: "Simmons",
          email: "miles.simmons@example.com",
          phone: "+1234567867",
          fiscalCode: "MIL789SIMM"
        },
        {
          firstName: "Paisley",
          lastName: "Bryant",
          email: "paisley.bryant@example.com",
          phone: "+1234567868",
          fiscalCode: "PAI123BRYA"
        },
        {
          firstName: "Evan",
          lastName: "Alexander",
          email: "evan.alexander@example.com",
          phone: "+1234567869",
          fiscalCode: "EVA456ALEX"
        },
        {
          firstName: "Lucy",
          lastName: "Griffin",
          email: "lucy.griffin@example.com",
          phone: "+1234567870",
          fiscalCode: "LUC789GRIF"
        },
        {
          firstName: "Adam",
          lastName: "Hayes",
          email: "adam.hayes@example.com",
          phone: "+1234567871",
          fiscalCode: "ADA123HAYE"
        },
        {
          firstName: "Aubrey",
          lastName: "Russell",
          email: "aubrey.russell@example.com",
          phone: "+1234567872",
          fiscalCode: "AUB456RUSS"
        },
        {
          firstName: "Connor",
          lastName: "Myers",
          email: "connor.myers@example.com",
          phone: "+1234567873",
          fiscalCode: "CON789MYER"
        },
        {
          firstName: "Maya",
          lastName: "Ford",
          email: "maya.ford@example.com",
          phone: "+1234567874",
          fiscalCode: "MAY123FORD"
        },
        {
          firstName: "Ian",
          lastName: "Hamilton",
          email: "ian.hamilton@example.com",
          phone: "+1234567875",
          fiscalCode: "IAN456HAMI"
        },
        {
          firstName: "Anna",
          lastName: "Graham",
          email: "anna.graham@example.com",
          phone: "+1234567876",
          fiscalCode: "ANN789GRAH"
        },
        {
          firstName: "Colton",
          lastName: "Sullivan",
          email: "colton.sullivan@example.com",
          phone: "+1234567877",
          fiscalCode: "COL123SULL"
        },
        {
          firstName: "Lydia",
          lastName: "Wallace",
          email: "lydia.wallace@example.com",
          phone: "+1234567878",
          fiscalCode: "LYD456WALL"
        },
        {
          firstName: "Asher",
          lastName: "West",
          email: "asher.west@example.com",
          phone: "+1234567879",
          fiscalCode: "ASH789WEST"
        }
      ]
    },
    { // ID 7
      id: 7,
      destination: "Rio de Janeiro, Brazil",
      date: "2024-05-05",
      image: "rio_de_janeiro.jpeg",
      travelers: [
        {
          firstName: "Easton",
          lastName: "Butler",
          email: "easton.butler@example.com",
          phone: "+1234567880",
          fiscalCode: "EAS123BUTL"
        },
        {
          firstName: "Naomi",
          lastName: "Bell",
          email: "naomi.bell@example.com",
          phone: "+1234567881",
          fiscalCode: "NAO456BELL"
        },
        {
          firstName: "Carson",
          lastName: "Murphy",
          email: "carson.murphy@example.com",
          phone: "+1234567882",
          fiscalCode: "CAR789MURP"
        },
        {
          firstName: "Elena",
          lastName: "Torres",
          email: "elena.torres@example.com",
          phone: "+1234567883",
          fiscalCode: "ELE123TORR"
        },
        {
          firstName: "Roman",
          lastName: "Fisher",
          email: "roman.fisher@example.com",
          phone: "+1234567884",
          fiscalCode: "ROM456FISH"
        },
        {
          firstName: "Clara",
          lastName: "Nguyen",
          email: "clara.nguyen@example.com",
          phone: "+1234567885",
          fiscalCode: "CLA789NGUY"
        },
        {
          firstName: "Axel",
          lastName: "Flores",
          email: "axel.flores@example.com",
          phone: "+1234567886",
          fiscalCode: "AXE123FLOR"
        },
        {
          firstName: "Isla",
          lastName: "Reed",
          email: "isla.reed@example.com",
          phone: "+1234567887",
          fiscalCode: "ISL456REED"
        },
        {
          firstName: "Parker",
          lastName: "Ward",
          email: "parker.ward@example.com",
          phone: "+1234567888",
          fiscalCode: "PAR789WARD"
        },
        {
          firstName: "Sadie",
          lastName: "Bennett",
          email: "sadie.bennett@example.com",
          phone: "+1234567889",
          fiscalCode: "SAD123BENN"
        },
        {
          firstName: "Jason",
          lastName: "Carter",
          email: "jason.carter@example.com",
          phone: "+1234567890",
          fiscalCode: "JAS456CART"
        },
        {
          firstName: "Ariana",
          lastName: "Bailey",
          email: "ariana.bailey@example.com",
          phone: "+1234567891",
          fiscalCode: "ARI789BAIL"
        },
        {
          firstName: "Ezekiel",
          lastName: "Cooper",
          email: "ezekiel.cooper@example.com",
          phone: "+1234567892",
          fiscalCode: "EZE123COOP"
        },
        {
          firstName: "Ruby",
          lastName: "Jenkins",
          email: "ruby.jenkins@example.com",
          phone: "+1234567893",
          fiscalCode: "RUB456JENK"
        },
        {
          firstName: "Micah",
          lastName: "Powell",
          email: "micah.powell@example.com",
          phone: "+1234567894",
          fiscalCode: "MIC789POWE"
        }
      ]
    },
    { // ID 8
      id: 8,
      destination: "Bangkok, Thailand",
      date: "2024-06-20",
      image: "bangkok.jpg",
      travelers: [
        {
          firstName: "Jonah",
          lastName: "Patterson",
          email: "jonah.patterson@example.com",
          phone: "+1234567895",
          fiscalCode: "JON123PATT"
        },
        {
          firstName: "Alice",
          lastName: "Brooks",
          email: "alice.brooks@example.com",
          phone: "+1234567896",
          fiscalCode: "ALI456BROO"
        },
        {
          firstName: "Leo",
          lastName: "Sanders",
          email: "leo.sanders@example.com",
          phone: "+1234567897",
          fiscalCode: "LEO789SAND"
        },
        {
          firstName: "Eva",
          lastName: "Price",
          email: "eva.price@example.com",
          phone: "+1234567898",
          fiscalCode: "EVA123PRIC"
        },
        {
          firstName: "Nathaniel",
          lastName: "Bennett",
          email: "nathaniel.bennett@example.com",
          phone: "+1234567899",
          fiscalCode: "NAT456BENN"
        },
        {
          firstName: "Samantha",
          lastName: "Wood",
          email: "samantha.wood@example.com",
          phone: "+1234567800",
          fiscalCode: "SAM789WOOD"
        },
        {
          firstName: "Grayson",
          lastName: "Barnes",
          email: "grayson.barnes@example.com",
          phone: "+1234567801",
          fiscalCode: "GRA123BARN"
        },
        {
          firstName: "Lila",
          lastName: "Ross",
          email: "lila.ross@example.com",
          phone: "+1234567802",
          fiscalCode: "LIL456ROSS"
        },
        {
          firstName: "Elliot",
          lastName: "Henderson",
          email: "elliot.henderson@example.com",
          phone: "+1234567803",
          fiscalCode: "ELL789HEND"
        },
        {
          firstName: "Mila",
          lastName: "Coleman",
          email: "mila.coleman@example.com",
          phone: "+1234567804",
          fiscalCode: "MIL123COLE"
        },
        {
          firstName: "Theodore",
          lastName: "Jenkins",
          email: "theodore.jenkins@example.com",
          phone: "+1234567805",
          fiscalCode: "THE456JENK"
        },
        {
          firstName: "Ivy",
          lastName: "Perry",
          email: "ivy.perry@example.com",
          phone: "+1234567806",
          fiscalCode: "IVY789PERR"
        },
        {
          firstName: "Calvin",
          lastName: "Powell",
          email: "calvin.powell@example.com",
          phone: "+1234567807",
          fiscalCode: "CAL123POWE"
        },
        {
          firstName: "Willow",
          lastName: "Long",
          email: "willow.long@example.com",
          phone: "+1234567808",
          fiscalCode: "WIL456LONG"
        },
        {
          firstName: "Declan",
          lastName: "Patterson",
          email: "declan.patterson@example.com",
          phone: "+1234567809",
          fiscalCode: "DEC789PATT"
        }
      ]
    },
    { // ID 9
      id: 9,
      destination: "Dubai, UAE",
      date: "2024-07-15",
      image: "dubai.jpeg",
      travelers: [
        {
          firstName: "Finn",
          lastName: "Hughes",
          email: "finn.hughes@example.com",
          phone: "+1234567895",
          fiscalCode: "FIN123HUGH"
        },
        {
          firstName: "Bella",
          lastName: "Foster",
          email: "bella.foster@example.com",
          phone: "+1234567896",
          fiscalCode: "BEL456FOST"
        },
        {
          firstName: "Ryder",
          lastName: "Simmons",
          email: "ryder.simmons@example.com",
          phone: "+1234567897",
          fiscalCode: "RYD789SIMM"
        },
        {
          firstName: "Autumn",
          lastName: "Bryant",
          email: "autumn.bryant@example.com",
          phone: "+1234567898",
          fiscalCode: "AUT123BRYA"
        },
        {
          firstName: "Xavier",
          lastName: "Alexander",
          email: "xavier.alexander@example.com",
          phone: "+1234567899",
          fiscalCode: "XAV456ALEX"
        },
        {
          firstName: "Piper",
          lastName: "Griffin",
          email: "piper.griffin@example.com",
          phone: "+1234567800",
          fiscalCode: "PIP789GRIF"
        },
        {
          firstName: "Max",
          lastName: "Hayes",
          email: "max.hayes@example.com",
          phone: "+1234567801",
          fiscalCode: "MAX123HAYE"
        },
        {
          firstName: "Elliana",
          lastName: "Russell",
          email: "elliana.russell@example.com",
          phone: "+1234567802",
          fiscalCode: "ELL456RUSS"
        },
        {
          firstName: "Bentley",
          lastName: "Myers",
          email: "bentley.myers@example.com",
          phone: "+1234567803",
          fiscalCode: "BEN789MYER"
        },
        {
          firstName: "Alyssa",
          lastName: "Ford",
          email: "alyssa.ford@example.com",
          phone: "+1234567804",
          fiscalCode: "ALY123FORD"
        },
        {
          firstName: "Zachary",
          lastName: "Hamilton",
          email: "zachary.hamilton@example.com",
          phone: "+1234567805",
          fiscalCode: "ZAC456HAMI"
        },
        {
          firstName: "Delilah",
          lastName: "Graham",
          email: "delilah.graham@example.com",
          phone: "+1234567806",
          fiscalCode: "DEL789GRAH"
        },
        {
          firstName: "Jayce",
          lastName: "Sullivan",
          email: "jayce.sullivan@example.com",
          phone: "+1234567807",
          fiscalCode: "JAY123SULL"
        },
        {
          firstName: "Adeline",
          lastName: "Wallace",
          email: "adeline.wallace@example.com",
          phone: "+1234567808",
          fiscalCode: "ADE456WALL"
        },
        {
          firstName: "Beau",
          lastName: "West",
          email: "beau.west@example.com",
          phone: "+1234567809",
          fiscalCode: "BEA789WEST"
        }
      ]
    },
    { // ID 10
      id: 10,
      destination: "Istanbul, Turkey",
      date: "2024-08-10",
      image: "instanbul.jpg",
      travelers: [
        {
          firstName: "Gavin",
          lastName: "Butler",
          email: "gavin.butler@example.com",
          phone: "+1234567810",
          fiscalCode: "GAV123BUTL"
        },
        {
          firstName: "Leah",
          lastName: "Bell",
          email: "leah.bell@example.com",
          phone: "+1234567811",
          fiscalCode: "LEA456BELL"
        },
        {
          firstName: "Sawyer",
          lastName: "Murphy",
          email: "sawyer.murphy@example.com",
          phone: "+1234567812",
          fiscalCode: "SAW789MURP"
        },
        {
          firstName: "Camila",
          lastName: "Torres",
          email: "camila.torres@example.com",
          phone: "+1234567813",
          fiscalCode: "CAM123TORR"
        },
        {
          firstName: "Brayden",
          lastName: "Fisher",
          email: "brayden.fisher@example.com",
          phone: "+1234567814",
          fiscalCode: "BRA456FISH"
        },
        {
          firstName: "Luna",
          lastName: "Nguyen",
          email: "luna.nguyen@example.com",
          phone: "+1234567815",
          fiscalCode: "LUN789NGUY"
        },
        {
          firstName: "Kaiden",
          lastName: "Flores",
          email: "kaiden.flores@example.com",
          phone: "+1234567816",
          fiscalCode: "KAI123FLOR"
        },
        {
          firstName: "Emery",
          lastName: "Reed",
          email: "emery.reed@example.com",
          phone: "+1234567817",
          fiscalCode: "EME456REED"
        },
        {
          firstName: "Bryce",
          lastName: "Ward",
          email: "bryce.ward@example.com",
          phone: "+1234567818",
          fiscalCode: "BRY789WARD"
        },
        {
          firstName: "Vivian",
          lastName: "Bennett",
          email: "vivian.bennett@example.com",
          phone: "+1234567819",
          fiscalCode: "VIV123BENN"
        },
        {
          firstName: "Jace",
          lastName: "Carter",
          email: "jace.carter@example.com",
          phone: "+1234567820",
          fiscalCode: "JAC456CART"
        },
        {
          firstName: "Eliana",
          lastName: "Bailey",
          email: "eliana.bailey@example.com",
          phone: "+1234567821",
          fiscalCode: "ELI789BAIL"
        },
        {
          firstName: "Kingston",
          lastName: "Cooper",
          email: "kingston.cooper@example.com",
          phone: "+1234567822",
          fiscalCode: "KIN123COOP"
        },
        {
          firstName: "Arianna",
          lastName: "Jenkins",
          email: "arianna.jenkins@example.com",
          phone: "+1234567823",
          fiscalCode: "ARI456JENK"
        },
        {
          firstName: "Malachi",
          lastName: "Powell",
          email: "malachi.powell@example.com",
          phone: "+1234567824",
          fiscalCode: "MAL789POWE"
        }
      ]
    },
    { // ID 11
      id: 11,
      destination: "Berlin, Germany",
      date: "2024-09-05",
      image: "berlin.png",
      travelers: [
        {
          firstName: "Tyler",
          lastName: "Patterson",
          email: "tyler.patterson@example.com",
          phone: "+1234567810",
          fiscalCode: "TYL123PATT"
        },
        {
          firstName: "Molly",
          lastName: "Brooks",
          email: "molly.brooks@example.com",
          phone: "+1234567811",
          fiscalCode: "MOL456BROO"
        },
        {
          firstName: "Wesley",
          lastName: "Sanders",
          email: "wesley.sanders@example.com",
          phone: "+1234567812",
          fiscalCode: "WES789SAND"
        },
        {
          firstName: "Jasmine",
          lastName: "Price",
          email: "jasmine.price@example.com",
          phone: "+1234567813",
          fiscalCode: "JAS123PRIC"
        },
        {
          firstName: "Elliott",
          lastName: "Bennett",
          email: "elliott.bennett@example.com",
          phone: "+1234567814",
          fiscalCode: "ELL456BENN"
        },
        {
          firstName: "Natalie",
          lastName: "Wood",
          email: "natalie.wood@example.com",
          phone: "+1234567815",
          fiscalCode: "NAT789WOOD"
        },
        {
          firstName: "Rowan",
          lastName: "Barnes",
          email: "rowan.barnes@example.com",
          phone: "+1234567816",
          fiscalCode: "ROW123BARN"
        },
        {
          firstName: "Amara",
          lastName: "Ross",
          email: "amara.ross@example.com",
          phone: "+1234567817",
          fiscalCode: "AMA456ROSS"
        },
        {
          firstName: "Kaden",
          lastName: "Henderson",
          email: "kaden.henderson@example.com",
          phone: "+1234567818",
          fiscalCode: "KAD789HEND"
        },
        {
          firstName: "Lola",
          lastName: "Coleman",
          email: "lola.coleman@example.com",
          phone: "+1234567819",
          fiscalCode: "LOL123COLE"
        },
        {
          firstName: "Emmett",
          lastName: "Jenkins",
          email: "emmett.jenkins@example.com",
          phone: "+1234567820",
          fiscalCode: "EMM456JENK"
        },
        {
          firstName: "Isabel",
          lastName: "Perry",
          email: "isabel.perry@example.com",
          phone: "+1234567821",
          fiscalCode: "ISA789PERR"
        },
        {
          firstName: "Jasper",
          lastName: "Powell",
          email: "jasper.powell@example.com",
          phone: "+1234567822",
          fiscalCode: "JAS123POWE"
        },
        {
          firstName: "Vivienne",
          lastName: "Long",
          email: "vivienne.long@example.com",
          phone: "+1234567823",
          fiscalCode: "VIV456LONG"
        },
        {
          firstName: "Ronan",
          lastName: "Patterson",
          email: "ronan.patterson@example.com",
          phone: "+1234567824",
          fiscalCode: "RON789PATT"
        }
      ]
    },
    { // ID 12
      id: 12,
      destination: "Athens, Greece",
      date: "2024-10-10",
      image: "athens.png",
      travelers: [
        {
          firstName: "Cameron",
          lastName: "Hughes",
          email: "cameron.hughes@example.com",
          phone: "+1234567825",
          fiscalCode: "CAM123HUGH"
        },
        {
          firstName: "Melody",
          lastName: "Foster",
          email: "melody.foster@example.com",
          phone: "+1234567826",
          fiscalCode: "MEL456FOST"
        },
        {
          firstName: "Brody",
          lastName: "Simmons",
          email: "brody.simmons@example.com",
          phone: "+1234567827",
          fiscalCode: "BRO789SIMM"
        },
        {
          firstName: "Juliette",
          lastName: "Bryant",
          email: "juliette.bryant@example.com",
          phone: "+1234567828",
          fiscalCode: "JUL123BRYA"
        },
        {
          firstName: "Zane",
          lastName: "Alexander",
          email: "zane.alexander@example.com",
          phone: "+1234567829",
          fiscalCode: "ZAN456ALEX"
        },
        {
          firstName: "Daisy",
          lastName: "Griffin",
          email: "daisy.griffin@example.com",
          phone: "+1234567830",
          fiscalCode: "DAI789GRIF"
        },
        {
          firstName: "Elias",
          lastName: "Hayes",
          email: "elias.hayes@example.com",
          phone: "+1234567831",
          fiscalCode: "ELI123HAYE"
        },
        {
          firstName: "Genevieve",
          lastName: "Russell",
          email: "genevieve.russell@example.com",
          phone: "+1234567832",
          fiscalCode: "GEN456RUSS"
        },
        {
          firstName: "Tristan",
          lastName: "Myers",
          email: "tristan.myers@example.com",
          phone: "+1234567833",
          fiscalCode: "TRI789MYER"
        },
        {
          firstName: "Adelaide",
          lastName: "Ford",
          email: "adelaide.ford@example.com",
          phone: "+1234567834",
          fiscalCode: "ADE123FORD"
        },
        {
          firstName: "Silas",
          lastName: "Hamilton",
          email: "silas.hamilton@example.com",
          phone: "+1234567835",
          fiscalCode: "SIL456HAMI"
        },
        {
          firstName: "Rosalie",
          lastName: "Graham",
          email: "rosalie.graham@example.com",
          phone: "+1234567836",
          fiscalCode: "ROS789GRAH"
        },
        {
          firstName: "Holden",
          lastName: "Sullivan",
          email: "holden.sullivan@example.com",
          phone: "+1234567837",
          fiscalCode: "HOL123SULL"
        },
        {
          firstName: "Evangeline",
          lastName: "Wallace",
          email: "evangeline.wallace@example.com",
          phone: "+1234567838",
          fiscalCode: "EVA456WALL"
        },
        {
          firstName: "Rhett",
          lastName: "West",
          email: "rhett.west@example.com",
          phone: "+1234567839",
          fiscalCode: "RHE789WEST"
        }
      ]
    },
    { // ID 13
      id: 13,
      destination: "Lisbon, Portugal",
      date: "2024-11-15",
      image: "lisbon.png",
      travelers: [
        {
          firstName: "Grant",
          lastName: "Butler",
          email: "grant.butler@example.com",
          phone: "+1234567840",
          fiscalCode: "GRA123BUTL"
        },
        {
          firstName: "Lena",
          lastName: "Bell",
          email: "lena.bell@example.com",
          phone: "+1234567841",
          fiscalCode: "LEN456BELL"
        },
        {
          firstName: "Tucker",
          lastName: "Murphy",
          email: "tucker.murphy@example.com",
          phone: "+1234567842",
          fiscalCode: "TUC789MURP"
        },
        {
          firstName: "Cecilia",
          lastName: "Torres",
          email: "cecilia.torres@example.com",
          phone: "+1234567843",
          fiscalCode: "CEC123TORR"
        },
        {
          firstName: "Jude",
          lastName: "Fisher",
          email: "jude.fisher@example.com",
          phone: "+1234567844",
          fiscalCode: "JUD456FISH"
        },
        {
          firstName: "Mabel",
          lastName: "Nguyen",
          email: "mabel.nguyen@example.com",
          phone: "+1234567845",
          fiscalCode: "MAB789NGUY"
        },
        {
          firstName: "Reid",
          lastName: "Flores",
          email: "reid.flores@example.com",
          phone: "+1234567846",
          fiscalCode: "REI123FLOR"
        },
        {
          firstName: "Alina",
          lastName: "Reed",
          email: "alina.reed@example.com",
          phone: "+1234567847",
          fiscalCode: "ALI456REED"
        },
        {
          firstName: "Griffin",
          lastName: "Ward",
          email: "griffin.ward@example.com",
          phone: "+1234567848",
          fiscalCode: "GRI789WARD"
        },
        {
          firstName: "Margot",
          lastName: "Bennett",
          email: "margot.bennett@example.com",
          phone: "+1234567849",
          fiscalCode: "MAR123BENN"
        },
        {
          firstName: "Simon",
          lastName: "Carter",
          email: "simon.carter@example.com",
          phone: "+1234567850",
          fiscalCode: "SIM456CART"
        },
        {
          firstName: "Anastasia",
          lastName: "Bailey",
          email: "anastasia.bailey@example.com",
          phone: "+1234567851",
          fiscalCode: "ANA789BAIL"
        },
        {
          firstName: "Walker",
          lastName: "Cooper",
          email: "walker.cooper@example.com",
          phone: "+1234567852",
          fiscalCode: "WAL123COOP"
        },
        {
          firstName: "Felicity",
          lastName: "Jenkins",
          email: "felicity.jenkins@example.com",
          phone: "+1234567853",
          fiscalCode: "FEL456JENK"
        },
        {
          firstName: "Cruz",
          lastName: "Powell",
          email: "cruz.powell@example.com",
          phone: "+1234567854",
          fiscalCode: "CRU789POWE"
        }
      ]
    },
    { // ID 14
      id: 14,
      destination: "Moscow, Russia",
      date: "2024-12-20",
      image: "moscow.png",
      travelers: [
        {
          firstName: "Derek",
          lastName: "Patterson",
          email: "derek.patterson@example.com",
          phone: "+1234567855",
          fiscalCode: "DER123PATT"
        },
        {
          firstName: "Elise",
          lastName: "Brooks",
          email: "elise.brooks@example.com",
          phone: "+1234567856",
          fiscalCode: "ELI456BROO"
        },
        {
          firstName: "Spencer",
          lastName: "Sanders",
          email: "spencer.sanders@example.com",
          phone: "+1234567857",
          fiscalCode: "SPE789SAND"
        },
        {
          firstName: "Bianca",
          lastName: "Price",
          email: "bianca.price@example.com",
          phone: "+1234567858",
          fiscalCode: "BIA123PRIC"
        },
        {
          firstName: "Tate",
          lastName: "Bennett",
          email: "tate.bennett@example.com",
          phone: "+1234567859",
          fiscalCode: "TAT456BENN"
        },
        {
          firstName: "Cora",
          lastName: "Wood",
          email: "cora.wood@example.com",
          phone: "+1234567860",
          fiscalCode: "COR789WOOD"
        },
        {
          firstName: "Jett",
          lastName: "Barnes",
          email: "jett.barnes@example.com",
          phone: "+1234567861",
          fiscalCode: "JET123BARN"
        },
        {
          firstName: "Lilliana",
          lastName: "Ross",
          email: "lilliana.ross@example.com",
          phone: "+1234567862",
          fiscalCode: "LIL456ROSS"
        },
        {
          firstName: "Kieran",
          lastName: "Henderson",
          email: "kieran.henderson@example.com",
          phone: "+1234567863",
          fiscalCode: "KIE789HEND"
        },
        {
          firstName: "Mae",
          lastName: "Coleman",
          email: "mae.coleman@example.com",
          phone: "+1234567864",
          fiscalCode: "MAE123COLE"
        },
        {
          firstName: "Anderson",
          lastName: "Jenkins",
          email: "anderson.jenkins@example.com",
          phone: "+1234567865",
          fiscalCode: "AND456JENK"
        },
        {
          firstName: "Serena",
          lastName: "Perry",
          email: "serena.perry@example.com",
          phone: "+1234567866",
          fiscalCode: "SER789PERR"
        },
        {
          firstName: "Knox",
          lastName: "Powell",
          email: "knox.powell@example.com",
          phone: "+1234567867",
          fiscalCode: "KNO123POWE"
        },
        {
          firstName: "Daphne",
          lastName: "Long",
          email: "daphne.long@example.com",
          phone: "+1234567868",
          fiscalCode: "DAP456LONG"
        },
        {
          firstName: "Porter",
          lastName: "Patterson",
          email: "porter.patterson@example.com",
          phone: "+1234567869",
          fiscalCode: "POR789PATT"
        }
      ]
    },
    { // ID 15
      id: 15,
      destination: "Seoul, South Korea",
      date: "2025-01-05",
      image: "seoul.png",
      travelers: [
        {
          firstName: "Chase",
          lastName: "Hughes",
          email: "chase.hughes@example.com",
          phone: "+1234567870",
          fiscalCode: "CHA123HUGH"
        },
        {
          firstName: "Iris",
          lastName: "Foster",
          email: "iris.foster@example.com",
          phone: "+1234567871",
          fiscalCode: "IRI456FOST"
        },
        {
          firstName: "Rylan",
          lastName: "Simmons",
          email: "rylan.simmons@example.com",
          phone: "+1234567872",
          fiscalCode: "RYL789SIMM"
        },
        {
          firstName: "Phoebe",
          lastName: "Bryant",
          email: "phoebe.bryant@example.com",
          phone: "+1234567873",
          fiscalCode: "PHO123BRYA"
        },
        {
          firstName: "Troy",
          lastName: "Alexander",
          email: "troy.alexander@example.com",
          phone: "+1234567874",
          fiscalCode: "TRO456ALEX"
        },
        {
          firstName: "June",
          lastName: "Griffin",
          email: "june.griffin@example.com",
          phone: "+1234567875",
          fiscalCode: "JUN789GRIF"
        },
        {
          firstName: "Caden",
          lastName: "Hayes",
          email: "caden.hayes@example.com",
          phone: "+1234567876",
          fiscalCode: "CAD123HAYE"
        },
        {
          firstName: "Esme",
          lastName: "Russell",
          email: "esme.russell@example.com",
          phone: "+1234567877",
          fiscalCode: "ESM456RUSS"
        },
        {
          firstName: "Corbin",
          lastName: "Myers",
          email: "corbin.myers@example.com",
          phone: "+1234567878",
          fiscalCode: "COR789MYER"
        },
        {
          firstName: "Wren",
          lastName: "Ford",
          email: "wren.ford@example.com",
          phone: "+1234567879",
          fiscalCode: "WRE123FORD"
        },
        {
          firstName: "Dawson",
          lastName: "Hamilton",
          email: "dawson.hamilton@example.com",
          phone: "+1234567880",
          fiscalCode: "DAW456HAMI"
        },
        {
          firstName: "Liana",
          lastName: "Graham",
          email: "liana.graham@example.com",
          phone: "+1234567881",
          fiscalCode: "LIA789GRAH"
        },
        {
          firstName: "Kobe",
          lastName: "Sullivan",
          email: "kobe.sullivan@example.com",
          phone: "+1234567882",
          fiscalCode: "KOB123SULL"
        },
        {
          firstName: "Mira",
          lastName: "Wallace",
          email: "mira.wallace@example.com",
          phone: "+1234567883",
          fiscalCode: "MIR456WALL"
        },
        {
          firstName: "Sage",
          lastName: "West",
          email: "sage.west@example.com",
          phone: "+1234567884",
          fiscalCode: "SAG789WEST"
        }
      ]
    }
  ];


  //template
  return (
    <TripContext.Provider value={tripsData}>
      {children}
    </TripContext.Provider>
  );
}

//function to use the custom context
function useTrips() {
  const context = useContext(TripContext);
  return context;
}

//exports
export { TripProvider, useTrips };

