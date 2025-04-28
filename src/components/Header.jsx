import { NavLink, Navigate, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  return (
    <>
      <div className="header">
        <div className="menu-sx">
          <img
            src="/img/logo_1.svg"
            className="logo"
            alt=""
            srcSet=""
          />
          <h1 className="title">BooRoad</h1>
        </div>
        {location.pathname === "/" ? null : (
          <div className="menu-dx">
            <nav>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : undefined)}
                to={"/trips"}
              >
                Home
              </NavLink>

              <NavLink
                className={({ isActive }) => (isActive ? "active" : undefined)}
                to={"/"}
              >
                Logout
              </NavLink>
            </nav>
          </div>
        )}
      </div>
    </>
  );
}
