import { BrowserRouter, Switch, Route } from "react-router-dom";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/react_new/:coinId">
          <Coin />
        </Route>
        <Route path="/react_new">
          <Coins />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;