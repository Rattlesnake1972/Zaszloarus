import { BrowserRouter as Router, NavLink, Routes, Route } from "react-router-dom";
import { FlagListPage } from "./FlagListPage";
import { FlagSinglePage } from "./FlagSinglePage";
import { FlagCreatePage } from "./FlagCreatePage";
import { FlagModPage } from "./FlagModPage";
import './App.css';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to={'/'} className={({isActive}) => "nav-link" + (isActive ? "active" : "")}>
                <span className="nav-link">Zászlók</span>
              </NavLink>
              </li>
              <li className="nav-item">
              <NavLink to={'/uj-zászló'} className={({isActive}) => "nav-link" + (isActive ? "active" : "")}>
                <span className="nav-link">Új zászló</span>
              </NavLink>
              </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" exact element={<FlagListPage />} />
        <Route path="/pizza/:productID" exact element={<FlagSinglePage />} />
        <Route path="/uj-zaszlo" exact element={<FlagCreatePage />} />
        <Route path="/mod-zaszlo/:productId" exact element={<FlagModPage />} />
      </Routes>
    </Router>
  );
}

export default App;