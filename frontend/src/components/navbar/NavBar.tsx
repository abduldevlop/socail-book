import { IoIosNotifications } from "react-icons/io";
import { logo, profilePic } from "../../assets";
import "./NavBar.scss";
import { MdForwardToInbox } from "react-icons/md";
import { CiSearch, CiVideoOn } from "react-icons/ci";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <div className="nav-left">
        <Link to={"/"}>
          <img src={logo} alt="logo" />
        </Link>
        <ul>
          <li>
            <IoIosNotifications size={25} style={{ fill: "white" }} />
          </li>
          <li>
            <MdForwardToInbox size={25} style={{ fill: "white" }} />
          </li>
          <li>
            <CiVideoOn size={25} style={{ fill: "white" }} />
          </li>
        </ul>
      </div>
      <div className="nav-right">
        <div className="search-box">
          <CiSearch size={20} />
          <input type="text" placeholder="Search" />
        </div>
        <div className="nav-user online">
          <img src={profilePic} alt="profile-img" />
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
