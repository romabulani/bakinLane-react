import "./nav.css";
function Sidebar() {
  return (
    <div className="sidebar-container">
      <a href="#" className="sidenav-item">
        Home
      </a>
      <a href="#" className="sidenav-item">
        Buy Now
      </a>
      <a href="#" className="sidenav-item">
        Profile
      </a>
      <a href="#" className="sidenav-item">
        Addresses
      </a>
      <a href="#" className="sidenav-item">
        Settings
      </a>
    </div>
  );
}

export { Sidebar };
