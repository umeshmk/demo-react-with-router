import React, { useState, useEffect } from "react";
import User from "./User";
import handleFetch from "./handleFetch";
import Loading from "./Loading";
import Error from "./Error";

const ListUsers = ({ api }) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    let getUsers = async () => {
      let data = await handleFetch(api);
      if (!data) setIsError(true);

      setUsers(data);

      // purposefully added timeout to show loading icon
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    };

    getUsers();
  }, [api]);

  if (isLoading || isError) {
    return <>{isLoading ? <Loading /> : <Error />}</>;
  }

  return (
    <>
      {users.map((item) => {
        return <User user={item} key={item.id} />;
      })}
    </>
  );
};

export default ListUsers;
