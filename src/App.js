import logo from "./logo.svg";
import "./App.scss";
import Header from "./components/header.js";
import Banner from "./components/banner";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Social from "./components/social";
import DJS from "./components/djs";
import Player from "./components/player";
import Paragraph from "./components/paragraph";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Player />
        <Banner />
        <Social />
        <DJS />
        <Paragraph />
      </div>
    </Router>
  );
}

export default App;
