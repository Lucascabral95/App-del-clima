import "./Navbar.scss"
import React, { useContext, useEffect } from 'react';
import { WeatherContext } from "../../Context/WeatherContext.js";
import { BsSearch } from "react-icons/bs"
import { FaWindowClose } from "react-icons/fa"
import { BiMenuAltLeft } from "react-icons/bi"
import { BiLogOutCircle } from "react-icons/bi"
import { RiDashboardFill } from "react-icons/ri"
import { SiAboutdotme } from "react-icons/si"
import { FaWpforms } from "react-icons/fa"
import { BsLayoutSidebarInset } from "react-icons/bs"
import { BsLayoutSidebarInsetReverse } from "react-icons/bs"


const Navbar = () => {

  const { menuBurguer, setMenuBurguer, setLocation, bottomSidebar, setBottomSidebar } = useContext(WeatherContext)


  const handleMenu = () => {
    if (menuBurguer) {
      setMenuBurguer(false)
    } else {
      setMenuBurguer(true)
    }
  }
  
  
  
  const handleBottomSidebar = () => {
    if (bottomSidebar) {
      setBottomSidebar(false);
    } else {
      setBottomSidebar(true);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1000) {
        setBottomSidebar(true);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); 

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (

    <div className="contenedor-navbar">

      <nav style={bottomSidebar ? { marginLeft: "140px" } : { marginLeft: "310px", width: "calc(100% - 310px)" }}>

        {menuBurguer ? (
          <>

            <div className="sidebar-responsive ">

              <FaWindowClose size={20} color="white" onClick={handleMenu} className="sidebar-icono-cerrar" />
              <div className="contenedor-sidebar-logo">
                <div className="sidebar-logo">
                  <img src="/logo-weather.png" alt="Logo del website" />
                  <p>Weatherly</p>
                </div>
              </div>

              <div className="contenedor-buscador2">
                <div className="buscador2">
                  <BsSearch size={18} color="#C6C6C6" className="search2" />
                  <input type="text" placeholder="Buscar..." />
                </div>
              </div>

              <div className="contenedor-sidebar-secciones">
                <div className="sidebar-secciones">
                  <div className="sidebar-secciones-div">
                    <RiDashboardFill color="white" className="side-icon" />
                    <p>Dashboard</p>
                  </div>

                  <div className="sidebar-secciones-div">
                    <FaWpforms color="white" className="side-icon" />
                    <p>Formulario</p>
                  </div>
                  <div className="sidebar-secciones-div">
                    <SiAboutdotme color="white" className="side-icon" />
                    <p>Acerca de nosotros</p>
                  </div>
                </div>
              </div>

              <div className="contenedor-sidebar-bottom">
                <div className="sidebar-bottom">
                  <BiLogOutCircle size={32} color="white" />
                  <p>Logout</p>
                </div>
              </div>

            </div>

          </>
        ) : (

          <>

            <div className="sidebar" style={bottomSidebar ? { width: "80px" } : { width: "260px" }}>

              <div className="contenedor-sidebar-logo">
                <div className="sidebar-logo">
                  <img src="/logo-weather.png" alt="Logo del website" />
                  <p style={bottomSidebar ? { display: "none" } : { display: "block" }}>Weatherly</p>
                </div>
              </div>



              <div className="contenedor-buscador2">
                {bottomSidebar ? (
                  <div style={{ marginBottom: "36px", marginTop: "36px" }}>
                    <BsSearch size={26} color="white" className="search2" />
                  </div>
                ) : (
                  <div className="buscador2">
                    <BsSearch size={18} color="black" className="search2" />
                    <input type="text" placeholder="Buscar..." onChange={(event) => setLocation(event.target.value)} />
                  </div>
                )}
              </div>

              <div className="contenedor-sidebar-secciones">
                <div className="sidebar-secciones">
                  <div style={{ display: "flex", height: "67px" }}>
                    <RiDashboardFill size={26} color="white" />
                    <p style={bottomSidebar ? { display: "none" } : { display: "block" }}>Dashboard</p>
                  </div>
                  <div style={{ display: "flex", height: "67px" }}>
                    <FaWpforms size={26} color="white" />
                    <p style={bottomSidebar ? { display: "none" } : { display: "block" }}>Formulario</p>
                  </div>
                  <div style={{ display: "flex", height: "67px" }}>
                    <SiAboutdotme size={26} color="white" />
                    <p style={bottomSidebar ? { display: "none" } : { display: "block" }}>Acerca de nosotros</p>
                  </div>
                </div>
              </div>
              {bottomSidebar ? <BsLayoutSidebarInset style={{ marginLeft: "26px" }} size={26} color="white" onClick={handleBottomSidebar} /> : <BsLayoutSidebarInsetReverse style={{ marginLeft: "26px" }} size={26} color="white" onClick={handleBottomSidebar} />}


              <div className="contenedor-sidebar-bottom">
                <div className="sidebar-bottom">
                  <BiLogOutCircle size={26} color="white" />
                  <p style={bottomSidebar ? { display: "none" } : { display: "block" }}>Logout</p>
                </div>
              </div>

            </div>

            <div class="custom-shape-divider-top-1685652124">
              <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
              </svg>
            </div>


            <BiMenuAltLeft className="menuu-hambuguesa" onClick={handleMenu} style={{ display: "none"}} />

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


