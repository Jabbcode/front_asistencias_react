import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="p-4 bg-blue-200">
      <div className="flex flex-wrap items-center justify-between mx-auto">
        <div className="flex items-center md:order-2 space-x-3 md:space-x-0">
          <button data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-user" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 md:space-x-8 md:flex-row md:mt-0">
            <li className="block text-gray-700 hover:text-blue-500">
              <NavLink to="/">
                <span>Inicio</span>
              </NavLink>
            </li>
            <li className="block text-gray-700 hover:text-blue-500">
              <NavLink to="/estudiantes">
                <span>Estudiantes</span>
              </NavLink>
            </li>
            <li className="block text-gray-700 hover:text-blue-500">
              <NavLink to="/asistencias" >
                <span>Asistencias</span>
              </NavLink>
            </li>
            <li className="block text-gray-700 hover:text-blue-500">
              <NavLink to="/profesores" >
                <span>Profesores</span>
              </NavLink>
            </li>
            <li className="block text-gray-700 hover:text-blue-500">
              <NavLink to="/padres" >
                <span>Padres</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
