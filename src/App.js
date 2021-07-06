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
                  <NavLink to={"/"} exact><h1 id={"logo"}>Drop-It</h1></NavLink>
                  <nav ref={searchRef}>
                      {searchBar ? <SearchBar /> : <>
                          <NavLink to={"/"} exact activeClassName={"active-page"} onClick={() => setPage("/")}>
                              <BtnDropit name={"Home"} />
                          </NavLink>
                          <NavLink to={page} exact activeClassName={"active-page"} onClick={() => {toggleSearchBar(!searchBar)}}>
                              <BtnDropit name={"Search"} />
                          </NavLink>
                          <NavLink to={"/"} exact activeClassName={"active-page"}>
                              <BtnDropit name={"Random"} />
                          </NavLink>
                          <NavLink to={"/"} exact activeClassName={"active-page"}>
                              <BtnDropit name={"Contests"} />
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
                  </Switch>
              </main>
          </div>
      </Router>
  );
}

export default App;
