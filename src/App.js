
import React, {useState, useEffect, useRef, useContext} from "react";
import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom';
import './App.css';
import Home from "./Pages/Home/Home";
import Profile from "./Pages/Profile/Profile";
import BtnDropit from "./components/buttons/BtnDropit";
import profile from "./assets/kirito.jpg";
import Search from "./Pages/Search/Search";
import DropDownMenu from "./components/DropDownMenu/DropDownMenu";
import UserAuthentication from "./PopUp/UserAuthentication";
import {VisibilityContext} from "./context/visibilityProvider";

function App() {

    const {toggleMenu, dropDownMenu} = useContext(VisibilityContext);
    const {toggleLoginPopUp, authyVisible} = useContext(VisibilityContext);

    // Allows the DropDownMenu to close when the user clicks outside of the DropDownMenu component.
    let visibleRef = useRef();

    useEffect(() => {

        let handler = (event) => {

            if(!visibleRef.current.contains(event.target)) {
                if (dropDownMenu === true) {
                    toggleMenu();
                }

                if(authyVisible === true){
                    toggleLoginPopUp();
                }
            }

        };

        document.addEventListener("mousedown", handler);
        console.log(dropDownMenu, authyVisible);
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

                  <div id={"profile"} ref={visibleRef}>
                      <img src={profile} alt={"profile"} onClick={() => toggleMenu()}/>
                      {dropDownMenu === true ? <DropDownMenu /> : ""}
                      {authyVisible === true ? <UserAuthentication /> : ""}
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
