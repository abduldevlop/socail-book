import { Link } from "react-router-dom";
import "./RightBarHome.scss";
import { IoLocationOutline } from "react-icons/io5";
import { advertisement, member1, member2, member3 } from "../../assets";

const RightBarHome = () => {
  return (
    <div className="right-bar">
      <div className="card">
        <div className="card-title">
          <h3>Events</h3>
          <Link to={"/"}>See all</Link>
        </div>

        <div className="event">
          <div className="left-event">
            <h3>18</h3>
            <span>March</span>
          </div>
          <div className="right-event">
            <h4>Socail Media</h4>
            <div className="location">
              <IoLocationOutline />
              <p>Willsom tech park</p>
            </div>
            <Link to={"/"}>More info</Link>
          </div>
        </div>
        <div className="event">
          <div className="left-event">
            <h3>18</h3>
            <span>March</span>
          </div>
          <div className="right-event">
            <h4>Socail Media</h4>
            <div className="location">
              <IoLocationOutline />
              <p>Willsom tech park</p>
            </div>
            <Link to={"/"}>More info</Link>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-title">
          <h3>Adverticement</h3>
          <Link to={"/"}>Close</Link>
        </div>
        <img src={advertisement} alt="ads-image" className="ads-image" />
      </div>

      <div className="card">
        <div className="card-title">
          <h3>Converstation</h3>
          <Link to={"/"}>Hide Chat</Link>
        </div>
        <div className="online-users">
          <div className="online-user">
            <div className="user-img online">
              <img src={member1} alt="user" />
            </div>
            <p>Jane doa</p>
          </div>
          <div className="online-user">
            <div className="user-img online">
              <img src={member2} alt="user" />
            </div>
            <p>Jane doa</p>
          </div>
          <div className="online-user">
            <div className="user-img online">
              <img src={member3} alt="user" />
            </div>
            <p>Jane doa</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RightBarHome;
