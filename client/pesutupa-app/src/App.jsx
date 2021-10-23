import "./App.css";
import { Etusivu } from "./pages/Home";
import { Login } from "./pages/Login";
import { Profiili } from "./pages/Profiili";
import { UusiVaraus } from "./pages/UusiVaraus";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { OmatVaraukset } from "./pages/OmatVaraukset";
import { Navbar } from "./components/AppBar";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="appi">
          <Navbar />
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
