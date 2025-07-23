import { NavLink, Link } from "react-router";

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-white bg-sky-900 rounded-md px-4 py-2 font-semibold shadow-lg border-b-4 border-white transition-all"
      : "text-sky-100 hover:bg-sky-800 hover:text-white rounded-md px-4 py-2 transition-all";

  return (
    <nav className="bg-sky-700 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <div className="text-white font-extrabold text-2xl tracking-wide select-none cursor-pointer">
              <Link to={'/'}>JobFinder</Link>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6">
            <NavLink to="/" className={linkClass}>
              Home
            </NavLink>
            <NavLink to="/jobs" className={linkClass}>
              Jobs
            </NavLink>
            <NavLink to="/add-job" className={linkClass}>
              Add Job
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
