import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import ClockLoader from "react-spinners/ClockLoader";
import { FaUser } from "react-icons/fa";
import Dashboard from "../Dashboard/Dashboard";
const loading = false;

// import useUserRole from "../Hook/useUserRole";

const DashboardLayout = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  //   const { loading } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      if (isDrawerOpen) {
        document.body.classList.add("overflow-hidden");
      } else {
        document.body.classList.remove("overflow-hidden");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isDrawerOpen]);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="flex h-full z-50">
      {/* NEW */}
      {/* <div className="drawer lg:drawer-open "> */}

      <div className={`drawer lg:drawer-open ${isDrawerOpen ? "open" : ""}`}>
        <input
          id="my-drawer-2"
          type="checkbox"
          className="drawer-toggle"
          checked={isDrawerOpen}
          onChange={toggleDrawer}
        />

        <div className="drawer-content flex flex-col  justify-center">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn justify-start drawer-button lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16 w-10"
              ></path>
            </svg>
          </label>
          <div className="flex-1 p-8 container mx-auto">
            <Dashboard />
            <Outlet></Outlet>
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            {loading ? (
              <div className="mt-10 ">
                <ClockLoader
                  color="#36d65e"
                  cssOverride={{
                    item: "center",
                  }}
                  loading
                  size={100}
                  speedMultiplier={10}
                />
              </div>
            ) : (
              <>
                <ul>
                  <li>
                    <NavLink to="/dashboard/add-task">
                      <FaUser />
                      Add Task
                    </NavLink>
                  </li>
                </ul>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
