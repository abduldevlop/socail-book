import "./app.scss";

import { NavBar } from "./components";

import { Routes, Route } from "react-router-dom";
import { Home } from "./pages";

const App = () => {
  return (
    <main className="mainContainer">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
  );
};
export default App;
