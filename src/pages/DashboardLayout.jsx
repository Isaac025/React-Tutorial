import React from "react";
import { Link, Outlet, NavLink } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div>
      <section className="flex h-screen">
        {/* sidebar */}
        <div className="w-[20%] bg-gray-800 text-white">
          <h1 className="text-4xl font-bold mb-3">Dashboard</h1>
          <nav className="flex flex-col gap-3 font-bold text-2xl">
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive ? "border border-blue-500" : ""
              }
              end
            >
              Home
            </NavLink>
            <NavLink
              to="trash"
              className={({ isActive }) =>
                isActive ? "border border-blue-500" : ""
              }
            >
              Trash
            </NavLink>
            <NavLink
              to="spam"
              className={({ isActive }) =>
                isActive ? "border border-blue-500" : ""
              }
            >
              Spam
            </NavLink>
          </nav>
        </div>
        {/* Outlet */}
        <div className="w-[80%]">
          <Outlet />
        </div>
      </section>
    </div>
  );
};

export default DashboardLayout;
