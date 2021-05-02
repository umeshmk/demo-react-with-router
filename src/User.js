const User = ({ user }) => {
  const { login, avatar_url, html_url, name } = user;

  return (
    <div className="user">
      <div className="avatar_url">
        <img src={avatar_url} alt="" width="100px" />
      </div>
      {/* <h3 className="login">{name}</h3> */}
      <a className="html_url" href={html_url}>
        <h3 className="login">{login}</h3>
      </a>
    </div>
  );
};

export default User;
