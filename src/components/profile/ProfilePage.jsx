import { NavLink, Outlet } from "react-router-dom";

function ProfilePage() {
  const tabArray = [
    {
      text: "Profile",
      link: "/profile/",
    },
    {
      text: "Addresses",
      link: "/profile/address",
    },
    {
      text: "Orders",
      link: "/profile/orders",
    },
  ];
  return (
    <div className="middle-content">
      <div className="flex-row-center">
        <div className="flex-column">
          <div className="tabs-container">
            {tabArray.map(({ text, link }) => (
              <NavLink
                to={link}
                className={({ isActive }) =>
                  isActive
                    ? "tab-active tab-default no-link-decoration"
                    : "tab-default no-link-decoration"
                }
                end
                key={text}
              >
                {text}
              </NavLink>
            ))}
          </div>

          <Outlet />
        </div>
      </div>
    </div>
  );
}

export { ProfilePage };
