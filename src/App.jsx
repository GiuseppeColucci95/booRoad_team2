//react imports
import { BrowserRouter, Routes, Route } from "react-router-dom";

//customs context imports
import { TripProvider } from "./contexts/globalContext";

//components imports
import DefaultLayout from "./layouts/DefaultLayout";
import Login from "./pages/Login";
import TripsList from "./pages/TripsList";

export default function App() {
  return (
    <>
      <TripProvider>
        <BrowserRouter>
          <Routes>
            <Route Component={DefaultLayout}>
              <Route path="/" Component={Login} />
              <Route path="/trips" Component={TripsList} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TripProvider>
    </>
  );
}
