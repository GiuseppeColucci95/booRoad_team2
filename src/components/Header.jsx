export default function Header() {
  return (
    <>
      <div className="header">
        <div className="menu-sx">
          <img src="./public/img/logo_1.svg" className="logo" alt="" srcSet="" />
          <h1 className="title">BooRoad</h1>
        </div>
        <div className="menu-dx">
          <ul>
            <li>Home</li>
            <li>Trips</li>
            <li>Contacts</li>
          </ul>
        </div>
      </div>
    </>
  );
}
