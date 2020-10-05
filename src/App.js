import React from "react";
import { Link, Route, Switch } from "react-router-dom";

import ColorBox from "./ColorBox";
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/color/red">Red</Link>
        <Link to="/color/orange">Orange</Link>
        <Link to="/color/yellow">Yellow</Link>
        <Link to="/color/green">Green</Link>
        <Link to="/color/purple">Purple</Link>
      </nav>
      <Switch>
        <Route exact path="/">
          <h3>This is the home page!</h3>
        </Route>
        <Route exact path="/color/red">
          <ColorBox color="#E76F51" />
        </Route>
        <Route exact path="/color/orange">
          <ColorBox color="#F4A261" />
        </Route>
        <Route exact path="/color/yellow">
          <ColorBox color="#E9C46A" />
        </Route>
        <Route exact path="/color/green">
          <ColorBox color="#2A9D8F" />
        </Route>
        <Route exact path="/color/purple">
          <ColorBox color="#264653" />
        </Route>
        <Route path="/color/:color">
          <ColorBox />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
