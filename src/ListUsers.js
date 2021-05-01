import React, { useState, useEffect } from "react";
import User from "./User";
import handleFetch from "./handleFetch";

const url = "https://api.github.com/users";

const ListUsers = () => {
  const [users, setUsers] = useState([]);

  let getUsers = async () => {
    let data = await handleFetch(url);
    setUsers(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      {users.map((item) => {
        return <User user={item} key={item.id} />;
      })}
    </>
  );
};

export default ListUsers;
