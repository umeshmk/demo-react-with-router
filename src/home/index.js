import React, { useState, useEffect } from "react";
import ListUsers from "./ListUsers";
import api from "../api";
import handleFetch from "../handleFetch";
import Thumbnail from "./Thumbnail";

function Home() {
  const [user, setUser] = useState({});

  useEffect(() => {
    let getUser = async () => {
      let data = await handleFetch(api.umeshmk);
      setUser(data);
    };

    getUser();
  }, []);

  return (
    <section>
      <h1 className="heading">Github Users API</h1>
      <Thumbnail user={user} />
      <div className="userList">
        <ListUsers api={api.all_users} />
      </div>
    </section>
  );
}

export default Home;
