import React, { useState } from "react";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './App.css';
import Home from "./Pages/Home/Home";
import Profile from "./Pages/Profile/Profile";
import BtnDropit from "./components/buttons/BtnDropit";
import DropDownMenu from "./components/DropDownMenu/DropDownMenu";
import profile from "./assets/kirito.jpg";


function App() {
    const [dropDownMenu, toggleDropDownMenu] = useState(false);

  return (
      <Router>
          <div className="App">
              <header>
                  <Link to={"/"} exact><h1 id={"logo"}>Drop-It</h1></Link>
                  <nav>
                      <BtnDropit name={"Home"} />
                      <BtnDropit name={"Search"} />
                      <BtnDropit name={"Random"} />
                      <BtnDropit name={"Contests"} />
                  </nav>
                  <div id={"profile"}>
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
