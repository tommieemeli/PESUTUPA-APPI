import "./App.css";
import { Etusivu } from "./pages/Home";
import { Login } from "./pages/Login";
import { Profiili } from "./pages/Profiili";
import { UusiVaraus } from "./pages/UusiVaraus";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { OmatVaraukset } from "./pages/OmatVaraukset";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="appi">
          <div>
            <Link to="/">Etusivu</Link> <Link to="/profiili">Profiili</Link>{" "}
            <Link to="/uusivaraus">Uusi varaus</Link>{" "}
            <Link to="/omatvaraukset">Omat varaukset</Link>{" "}
          </div>
          <Switch>
            <Route exact path="/" component={Etusivu} />
            <Route exact path="/profiili" component={Profiili} />
            <Route exact path="/uusivaraus" component={UusiVaraus} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/omatvaraukset" component={OmatVaraukset} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
