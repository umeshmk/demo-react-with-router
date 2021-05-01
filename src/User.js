const User = ({ user }) => {
  const { login, avatar_url, html_url } = user;

  return (
    <div className="user">
      <div className="avatar_url">
        <img src={avatar_url} alt="" width="100px" />
      </div>
      <h3 className="login">{login}</h3>
      <a href={html_url}>Profile</a>
    </div>
  );
};

export default User;
