import React from "react";
import { formatDistance } from "date-fns";

import "./index.css";

function Profile({ user }) {
  let blog = (url) => {
    if (url) {
      if (url.indexOf("://") > -1) return url;
      else return "http://" + url;
    }
  };
  const myDate = (date) => {
    if (date) {
      return formatDistance(Date.parse(date), new Date(), {
        addSuffix: true,
      });
    }
  };

  return (
    <div className="profile">
      <div className="avatar_url">
        <img src={user.avatar_url} alt="" />
      </div>

      <div className="github">
        <a
          className="html_url"
          href={user.html_url}
          target="_blank"
          rel="noreferrer"
        >
          <img src="/github.png" alt="" />
          {user.login}
          <br />
        </a>
      </div>
      <div className="name">{user.name}</div>
      <ul>
        {user.location && <li className="location">{user.location}</li>}
        <li className="company">{user.company || "-"}</li>
        <li className="bio">{user.bio || "No Bio"}</li>
        <li className="blog">
          <a href={blog(user.blog)} target="_blank" rel="noreferrer">
            {blog(user.blog)}
          </a>
        </li>
        {user.twitter_username && (
          <li className="twitter_username">
            <img src="/twitter.png" alt="" />
            <a
              href={`https://twitter.com/${user.twitter_username}`}
              target="_blank"
              rel="noreferrer"
            >
              {user.twitter_username}
            </a>
          </li>
        )}
      </ul>
      <ul className="wrap">
        <li className="public_repos">
          <span>Repos :</span>
          {user.public_repos}
        </li>
        <li className="public_gists">
          <span>Gists :</span>
          {user.public_gists}
        </li>
        <li className="followers">
          <span>Followers :</span>
          {user.followers}
        </li>
        <li className="following">
          <span>Following :</span>
          {user.following}
        </li>
        <li className="created_at">
          <span>Created :</span>
          {myDate(user.created_at)}
        </li>
        <li className="updated_at">
          <span>Last Active :</span>
          {myDate(user.updated_at)}
        </li>
      </ul>
    </div>
  );
}

export default Profile;
