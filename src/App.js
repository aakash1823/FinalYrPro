import HomePage from "./components/HomePage";
import Result from "./components/Result";

import { BrowserRouter,Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/result/:id' component={Result} />
      </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
