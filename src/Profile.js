import React, { useState, useEffect } from "react";
import User from "./User";
import handleFetch from "./handleFetch";

const url = "https://api.github.com/users/umeshmk";

function Profile() {
  const [user, setUser] = useState({});

  let getUser = async () => {
    let data = await handleFetch(url);
    setUser(data);
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="profile">
      <User user={user} />
    </div>
  );
}

export default Profile;
