import "./Navbar.scss"
import React, { useContext } from 'react';
import { WeatherContext } from "../../Context/WeatherContext.js";
import { BsSearch } from "react-icons/bs"
import { AiOutlineMenuUnfold } from "react-icons/ai"
import { FaWindowClose } from "react-icons/fa"


const Navbar = () => {

  const { menuBurguer, setMenuBurguer, setLocation } = useContext(WeatherContext)

  const handleMenu = () => {
    if (menuBurguer) {
      setMenuBurguer(false)
    } else {
      setMenuBurguer(true)
    }
  }

  return (
    <div className="contenedor-navbar">

      <nav>

        {menuBurguer ? (

          <div className="dropbox-navbar">
            <FaWindowClose size={38} color="black" onClick={handleMenu} />
            <div className="dropbox-navbar-contenido">
              <div className="buscador2">
                <BsSearch size={22} color="black" className="buscador-search2" />
                <input className="input2" type="text" placeholder="Buscar..." size={40} onChange={(event) => setLocation(event.target.value)} />
              </div>
              <p>Dashboard</p>
              <p>Acerca de Nosotros</p>
              <p>Pronostico</p>
            </div>
          </div>

        ) : (

          <>
            <div className="navbar">
              <AiOutlineMenuUnfold onClick={handleMenu} size={38} color="black" className="menu-hamburguesa" style={{ display: "none" }} />
              <p>Dashboard</p>
              <p>Acerca de Nosotros</p>
              <p>Pronostico</p>
            </div>

            <div class="custom-shape-divider-top-1685652124">
              <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
              </svg>
            </div>

            <div className="buscador">
              <BsSearch size={22} color="black" className="buscador-search" />
              <input type="text" placeholder="Buscar..." size={40} onChange={(event) => setLocation(event.target.value)} />
            </div>

            <div className="logo">
              <img src="/logo-weather.png" alt="Logo de Weatherly" />
              <h1> Weatherly</h1>
            </div>
          </>
        )}

      </nav>


    </div>
  );
};

export default Navbar;