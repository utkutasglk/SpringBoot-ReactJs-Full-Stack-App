import "./App.css";
import { BrowserRouter, Switch, Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import User from "./components/User/User";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route exact path="/" element={Home}></Route>
          <Route exact path="/users/:userId" component={User}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
