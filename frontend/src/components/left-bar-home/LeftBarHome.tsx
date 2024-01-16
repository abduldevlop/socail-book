import { Link } from "react-router-dom";
import "./LeftBarHome.scss";
import { FaRegNewspaper } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdGroups } from "react-icons/md";
import { SiCoinmarketcap } from "react-icons/si";
import { BsCameraReels } from "react-icons/bs";
import { shortcut1, shortcut2, shortcut3 } from "../../assets";

const LeftBarHome = () => {
  return (
    <div className="left-side-bar">
      <div className="links">
        <Link to={"/"}>
          <FaRegNewspaper size={25} style={{ fill: "#1876F2" }} />
          <span>Latest News</span>
        </Link>
        <Link to={"/"}>
          <FaPeopleGroup size={25} style={{ fill: "#1876F2" }} />
          <span>Friends</span>
        </Link>
        <Link to={"/"}>
          <MdGroups size={25} style={{ fill: "#1876F2" }} />
          <span>Group</span>
        </Link>
        <Link to={"/"}>
          <SiCoinmarketcap size={25} style={{ fill: "#1876F2" }} />
          <span>Market Place</span>
        </Link>
        <Link to={"/"}>
          <BsCameraReels size={25} style={{ fill: "#1876F2" }} />
          <span>Watch Videos</span>
        </Link>
        <p>See more..</p>
      </div>

      <div className="shortcut-links">
        <p>Your Shortcuts</p>
        <Link to={"/"}>
          <img src={shortcut1} alt="" />
          <span>Web Developer</span>
        </Link>
        <Link to={"/"}>
          <img src={shortcut2} alt="" />
          <span>Web Design Course</span>
        </Link>

        <Link to={"/"}>
          <img src={shortcut3} alt="" />
          <span>Full stack Web Developer</span>
        </Link>
      </div>
    </div>
  );
};
export default LeftBarHome;
