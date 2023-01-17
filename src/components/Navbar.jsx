import Edu_Essence from "../assets/Edu_Essence.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar bg-base-100 p-3 shadow-md fixed">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li tabIndex={0}>
              <a className="justify-between bg-success text-xl text-success-content font-bold mb-3">
                Ciencia y tecnología
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="p-2 bg-black text-white">
                <li>
                  <Link to="/metodologia" className="navbar_link">
                    Metodología científica
                  </Link>
                </li>
                <li>
                  <Link to="/magnitudes_fisicas" className="navbar_link">
                    Magnitudes físicas
                  </Link>
                </li>
                <li>
                  <Link to="/materia_energia" className="navbar_link">
                    Materia y energía
                  </Link>
                </li>
                <li>
                  <Link to="/fuentes_energia" className="navbar_link">
                    Fuentes de energia y conservación del ambiente
                  </Link>
                </li>
                <li>
                  <Link to="/tierra_universo" className="navbar_link">
                    Tierra y el universo
                  </Link>
                </li>
                <li>
                  <Link to="/conquista_espacio" className="navbar_link">
                    Conquista del espacio
                  </Link>
                </li>
              </ul>
            </li>
            <li tabIndex={0}>
              <a className="justify-between bg-warning text-warning-content text-xl font-bold">
                Historia del Perú
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="p-2 bg-black text-white">
                <li>
                  <Link to="/periodos_litico" className="navbar_link">
                    Periodos lítico
                  </Link>
                </li>
                <li>
                  <Link to="/rutas_migratorias" className="navbar_link">
                    Hipótesis de rutas migratorias
                  </Link>
                </li>
                <li>
                  <Link to="/desarrollo_regional" className="navbar_link">
                    Desarrollo regional
                  </Link>
                </li>
                <li>
                  <Link to="/estados_panandinos" className="navbar_link">
                    Estados panandinos
                  </Link>
                </li>
                <li>
                  <Link to="/estados_regionales" className="navbar_link">
                    Estados regionales
                  </Link>
                </li>
                <li>
                  <Link to="/periodo_formativo" className="navbar_link">
                    Periodo formativo
                  </Link>
                </li>
                <li>
                  <Link to="/tahuantinsuyo" className="navbar_link">
                    Tahuantinsuyo
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost mr-3 normal-case text-xl border-2 border-black hover:border-2 hover:border-black"
        >
          <img
            src={Edu_Essence}
            alt="Logo of EduEssence"
            width="50"
            height="50"
            className="p-2"
          />
          <p>"Aprender/Reforzar"</p>
        </Link>
        <select data-choose-theme className="text-xl rounded-sm outline p-1">
          <option value="light">Claro</option>
          <option value="dark">Oscuro</option>
        </select>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-2 gap-5">
          <li
            tabIndex={0}
            className="bg-success text-lg font-bold text-success-content border-neutral-focus border-4"
          >
            <a>
              Ciencia y tecnología
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2 pb-5 bg-black text-white">
              <li>
                <Link to="/metodologia" className="navbar_link">
                  Metodología científica
                </Link>
              </li>
              <li>
                <Link to="/magnitudes_fisicas" className="navbar_link">
                  Magnitudes físicas
                </Link>
              </li>
              <li>
                <Link to="/materia_energia" className="navbar_link">
                  Materia y energía
                </Link>
              </li>
              <li>
                <Link to="/fuentes_energia" className="navbar_link">
                  Fuentes de energia y conservación del ambiente
                </Link>
              </li>
              <li>
                <Link to="/tierra_universo" className="navbar_link">
                  Tierra y el universo
                </Link>
              </li>
              <li>
                <Link to="/conquista_espacio" className="navbar_link">
                  Conquista del espacio
                </Link>
              </li>
            </ul>
          </li>
          <li
            tabIndex={0}
            className="bg-warning text-warning-content text-lg font-bold border-neutral-focus border-4"
          >
            <a>
              Historia del Perú
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2 pb-5 bg-black text-white">
              <li>
                <Link to="/periodos_litico" className="navbar_link">
                  Periodos lítico
                </Link>
              </li>
              <li>
                <Link to="/rutas_migratorias" className="navbar_link">
                  Hipótesis de rutas migratorias
                </Link>
              </li>
              <li>
                <Link to="/desarrollo_regional" className="navbar_link">
                  Desarrollo regional
                </Link>
              </li>
              <li>
                <Link to="/estados_panandinos" className="navbar_link">
                  Estados panandinos
                </Link>
              </li>
              <li>
                <Link to="/estados_regionales" className="navbar_link">
                  Estados regionales
                </Link>
              </li>
              <li>
                <Link to="/periodo_formativo" className="navbar_link">
                  Periodo formativo
                </Link>
              </li>
              <li>
                <Link to="/tahuantinsuyo" className="navbar_link">
                  Tahuantinsuyo
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
