import React, {useEffect, useState, useRef, useContext} from "react";
import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom';
import './App.css';
import Home from "./Pages/Home/Home";
import Profile from "./Pages/Profile/Profile";
import BtnDropit from "./components/buttons/BtnDropit";
import DropDownMenu from "./components/DropDownMenu/DropDownMenu";
import SearchBar from "./components/SearchBar/SearchBar";
import profile from "./assets/kirito.jpg";
import {PageContext} from "./context/PageProvider";
import Search from "./Pages/Search/Search";

function App() {
    const [dropDownMenu, toggleDropDownMenu] = useState(false);
    const [searchBar, toggleSearchBar] = useState(false);
    const {setPage, page} = useContext(PageContext);

    //this makes sure the menu and searchbar revert to default state when the user clicks outside of the component
    let menuRef = useRef();
    let searchRef = useRef();
    useEffect(() => {
        let handler = (event) => {
            if(!menuRef.current.contains(event.target)) {
                toggleDropDownMenu(false);
            }
            if(!searchRef.current.contains(event.target)) {
                toggleSearchBar(false);
            }
        };

        document.addEventListener("mousedown", handler);

        return () => {
            document.removeEventListener("mousedown", handler);
        };
    });

  return (
      <Router>
          <div className="App">
              <header>
                  <NavLink to={"/"} className={"dropit-btn"} exact><h1 id={"logo"}>Drop-It</h1></NavLink>
                  <nav ref={searchRef}>
                      {searchBar ? <SearchBar /> : <>
                          <NavLink to={"/"} exact className={"dropit-btn"} activeClassName={"active-page"} onClick={() => setPage("/")}>
                              <BtnDropit name={"HOME"} />
                          </NavLink>
                          <NavLink to={page} exact className={"dropit-btn"} activeClassName={"active-page"} onClick={() => {toggleSearchBar(!searchBar)}}>
                              <BtnDropit name={"SEARCH"} />
                          </NavLink>
                          <NavLink to={page} exact className={"dropit-btn"} activeClassName={"active-page"}>
                              <BtnDropit name={"RANDOM"} />
                          </NavLink>
                          <NavLink to={"/"} exact className={"dropit-btn"} activeClassName={"active-page"}>
                              <BtnDropit name={"CONTESTS"} />
                          </NavLink>
                      </>}
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
