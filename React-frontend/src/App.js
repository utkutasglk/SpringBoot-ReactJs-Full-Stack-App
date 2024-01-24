import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/" Component={Home}></Route>
          <Route exact route="/users/:userId">
            component={User}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
