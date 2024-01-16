import { Link } from "react-router-dom";
import {
  member1,
  member2,
  member3,
  member4,
  profilePic,
  status1,
  upload,
} from "../../assets";
import "./MainContentHome.scss";

const MainContentHome = () => {
  return (
    <div className="main">
      {/* story section  */}
      <div className="story-section">
        <div className="story">
          <img src={upload} alt="" />
          <p>Jhon doa</p>
        </div>

        <div className="story">
          <img src={member1} alt="" />
          <p>Jhon doa</p>
        </div>

        <div className="story">
          <img src={member2} alt="" />
          <p>Jhon doa</p>
        </div>

        <div className="story">
          <img src={member3} alt="" />
          <p>Jhon doa</p>
        </div>
      </div>

      <div className="write-post-conatiner">
        <div className="user-profile">
          <img src={profilePic} alt="" />
          <div>
            <p>Jhone doa</p>
            <small>Public</small>
          </div>
        </div>
        <div className="post-input-container">
          <textarea rows="3" placeholder="What's on your mind jhon?"></textarea>
          <div className="addpost-links">
            <Link to={"/"}></Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainContentHome;
