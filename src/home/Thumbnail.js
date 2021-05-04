import { Link } from "react-router-dom";

const Thumbnail = ({ user }) => {
  const { login, avatar_url, html_url } = user;

  return (
    <div className="user">
      <div className="avatar_url">
        <img src={avatar_url} alt="" width="100px" />
      </div>
      <Link to={`/profile/${login}`} className="html_url">
        <h3 className="login">{login}</h3>
      </Link>
    </div>
  );
};

export default Thumbnail;
