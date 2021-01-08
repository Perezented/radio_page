import "./App.scss";
import Header from "./components/header.js";
import Banner from "./components/banner";
import { BrowserRouter as Router } from "react-router-dom";
import Social from "./components/social";
import DJS from "./components/djs";
import Player from "./components/player";
import Paragraph from "./components/paragraph";
import Chat from "./components/chat";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Player />
        <Banner />
        <Chat />
        <Social />
        <DJS />
        <Paragraph />
      </div>
    </Router>
  );
}

export default App;
