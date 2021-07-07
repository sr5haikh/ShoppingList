import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { AddUser } from "./components/AddUser";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/add" component={AddUser} />
        </Switch>
      </Router>
    </div>
  );
}
