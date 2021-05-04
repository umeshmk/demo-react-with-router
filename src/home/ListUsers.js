import React, { useState, useEffect } from "react";
import Thumbnail from "./Thumbnail";
import handleFetch from "../handleFetch";
import Loading from "../Loading";
import Error from "../Error";

let once = false; // show loading icon only once on page load

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
        once = true;
      }, 500);
    };

    getUsers();
  }, [api]);

  if ((isLoading && !once) || isError) {
    return <>{isLoading ? <Loading /> : <Error />}</>;
  }

  return (
    <>
      {users.map((item) => {
        return <Thumbnail user={item} key={item.id} />;
      })}
    </>
  );
};

export default ListUsers;
