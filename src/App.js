
import React, {useState, useEffect, useRef} from "react";
import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom';
import './App.css';
import Home from "./Pages/Home/Home";
import Profile from "./Pages/Profile/Profile";
import BtnDropit from "./components/buttons/BtnDropit";
import profile from "./assets/kirito.jpg";
import Search from "./Pages/Search/Search";
import axios from "axios";
import SearchBar from "./components/SearchBar/SearchBar";
import DropDownMenu from "./components/DropDownMenu/DropDownMenu";

function App() {
    const [dropDownMenu, toggleDropDownMenu] = useState(false);
    const [currentPage, setCurrentPage] = useState("/profile/stats");

    //this makes sure the menu and searchbar revert to default state when the user clicks outside of the component
    let menuRef = useRef();
    useEffect(() => {
        let handler = (event) => {
            if(!menuRef.current.contains(event.target)) {
                toggleDropDownMenu(false);
            }
        };

        document.addEventListener("mousedown", handler);

        return () => {
            document.removeEventListener("mousedown", handler);
        };
    });
  return (
      <Router>
          <div className="App" >
              <header>
                  <NavLink to={"/"} className={"dropit-btn"} exact><h1 id={"logo"}>Drop-It</h1></NavLink>
                  <nav>
                      <NavLink to={"/"} exact className={"dropit-btn"} activeClassName={"active-page"}>
                          <BtnDropit name={"HOME"} />
                      </NavLink>
                      <NavLink to={"/search"} exact className={"dropit-btn"} activeClassName={"active-page"}>
                          <BtnDropit name={"SEARCH"} />
                      </NavLink>
                      {/*<NavLink to={page} exact className={"dropit-btn"} activeClassName={"active-page"} disabled>*/}
                          <BtnDropit name={"RANDOM"} />
                      {/*</NavLink>*/}
                      {/*<NavLink to={"/"} exact className={"dropit-btn"} activeClassName={"active-page"} disabled>*/}
                          <BtnDropit name={"CONTESTS"} />
                      {/*</NavLink>*/}
                  </nav>
                  <div id={"profile"} ref={menuRef}>
                      <img src={profile} alt={"profile"} onClick={() => toggleDropDownMenu(!dropDownMenu)}/>
                      {dropDownMenu === true ? <DropDownMenu dropDownMenuVisible={visible => toggleDropDownMenu(visible)} /> : ""}
                  </div>
              </header>
              <main>
                  <Switch>
                      <Route exact path={"/"}>
                        <Home />
                      </Route>
                      <Route path={"/Profile"}>
                        <Profile user={"test"} />
                      </Route>
                      <Route path={"/Search"}>
                          <Search />
                      </Route>
                  </Switch>
              </main>
          </div>
      </Router>
  );
}

export default App;
