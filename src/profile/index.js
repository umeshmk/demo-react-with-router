import React, { useState, useEffect } from "react";
import handleFetch from "../handleFetch";
import { useParams } from "react-router";
import api from "../api";
import Profile from "./Profile";
import { Link } from "react-router-dom";

function Index() {
  const [user, setUser] = useState({});
  const { login } = useParams();
  const url = api.profile + login;

  useEffect(() => {
    let getUser = async () => {
      let data = await handleFetch(url);
      setUser(data);
    };
    getUser();
  }, [url]);

  return (
    <>
      <Profile user={user} />
      <button className="home">
        <Link to="/">Home</Link>{" "}
      </button>
    </>
  );
}

export default Index;

// login
// umeshmk

// id
// 19268386

// avatar_url
// https://avatars.githubusercontent.com/u/19268386?v=4

// html_url
// https://github.com/umeshmk

// type
// User

// name
// Umesh Kadam

// company
// Web Developer

// blog
// umeshmk.github.io

// location
// Mumbai, India

// bio
// Frontend Developer | React.js

// twitter_username

// public_repos
// 16

// public_gists
// 2

// followers
// 2

// following
// 0

// created_at
// 2016-05-09T14:35:11Z

// updated_at
// 2021-04-10T08:52:56Z

// <li>{ user.login }</li>
// <li>{ user.id }</li>
// <li>{ user.html_url }</li>
// <li>{ user.type }</li>
// <li>{ user.name }</li>
// <li>{ user.company }</li>
// <li>{ user.blog }</li>
// <li>{ user.location }</li>
// <li>{ user.bio }</li>
// <li>{ user.twitter_username }</li>
// <li>{ user.public_repos }</li>
// <li>{ user.public_gists }</li>
// <li>{ user.followers }</li>
// <li>{ user.following }</li>
// <li>{ user.created_at }</li>
// <li>{ user.updated_at }</li>
