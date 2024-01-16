import "./Home.scss";

import { LeftBarHome, MainContentHome, RightBarHome } from "../../components";
const Home = () => {
  return (
    <section className="home">
      <div className="left-bar">
        <LeftBarHome />
      </div>
      <div className="main-content">
        <MainContentHome />
      </div>
      <div className="right-bar">
        <RightBarHome />
      </div>
    </section>
  );
};
export default Home;
