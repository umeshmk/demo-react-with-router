import React, { useState, useEffect } from "react";
import User from "./User";
import handleFetch from "./handleFetch";

function Profile({ api }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    let getUser = async () => {
      let data = await handleFetch(api);
      setUser(data);
    };

    getUser();
  }, [api]);

  return (
    <div className="profile">
      <User user={user} />
    </div>
  );
}

export default Profile;
