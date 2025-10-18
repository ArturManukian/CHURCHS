import { Outlet, Link, useLocation } from "react-router-dom";
import "./Layout.sass";
import logo from "./img/logo.png";
import { useEffect, useState } from "react";

const titles = {
  "/Page2": "ԽՈՐ ՎԻՐԱՊ",
  "/Page3": "ՏԱԹԵՎ",
  "/Page4": "ՀԱՂԱՐԾԻՆ",
  "/Page5": "ՍՈՂՈՄՈՆ",
  "/Page6": "ՀԻՆ ԻՍՐԱՅԵԼ",
  "/Page7": "ԳԱՌՆԻ",
  "/": "Իմ կայք",
};

const Layout = () => {
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setActivePath(location.pathname);
    setMenuOpen(false);

    // 👇 փոխում ենք tab-ի title-ը
    document.title = titles[location.pathname] || "Իմ կայք";
  }, [location.pathname]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav>
        <div className="imglogo">
          <Link to="/">
            <img className="img" src={logo} alt="logo" />
          </Link>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <div className="line" />
          <div className="line" />
          <div className="line" />
        </div>

        <ul className={`menu ${menuOpen ? "open" : ""}`}>
          <li>
            <Link className={activePath === "/Page2" ? "active" : ""} to="/Page2">
              ԽՈՐ ՎԻՐԱՊ
            </Link>
          </li>
          <li>
            <Link className={activePath === "/Page3" ? "active" : ""} to="/Page3">
              ՏԱԹԵՎ
            </Link>
          </li>
          <li>
            <Link className={activePath === "/Page4" ? "active" : ""} to="/Page4">
              ՀԱՂԱՐԾԻՆ
            </Link>
          </li>
          <li>
            <Link className={activePath === "/Page5" ? "active" : ""} to="/Page5">
              ՍՈՂՈՄՈՆ
            </Link>
          </li>
          <li>
            <Link className={activePath === "/Page6" ? "active" : ""} to="/Page6">
              ՀԻՆ ԻՍՐԱՅԵԼ
            </Link>
          </li>
          <li>
            <Link className={activePath === "/Page7" ? "active" : ""} to="/Page7">
              ԳԱՌՆԻ
            </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
