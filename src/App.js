import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./styles.css";
import { ReactSortableJs } from "./react-sortable";
import { ReactDnd } from "./react-dnd";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">главная</Link>
            </li>
            <li>
              <Link to="/react-sortable-js">react-sortable-js</Link>
            </li>
            <li>
              <Link to="/react-dnd">react-dnd</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/react-sortable-js">
            <ReactSortableJs />
          </Route>
          <Route path="/react-dnd">
            <ReactDnd />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
