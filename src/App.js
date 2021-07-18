
import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom';
import './App.css';
import Home from "./Pages/Home/Home";
import Profile from "./Pages/Profile/Profile";
import BtnDropit from "./components/buttons/BtnDropit";
import profile from "./assets/kirito.jpg";
import Search from "./Pages/Search/Search";
import axios from "axios";

function App() {
    const [artists, setArtists] = useState(null);



    useEffect(() => {
        async function fetchData() {

            try{
                const result = await axios.get("http://localhost:8080/api/v1/person");
                console.log(result);
                setArtists(result.data);
            } catch (e){
                console.log(e);
            }

        }
        fetchData();
    }, []);


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
                  <div id={"profile"}>
                      <NavLink to={"/profile/info"}>
                          <img src={profile} alt={"profile"} />
                      </NavLink>

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
