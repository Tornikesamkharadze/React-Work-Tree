import axios from "axios";
import React, { useEffect, useState } from "react";
import "./index.css";

const githubUsersUrl = "https://api.github.com/users";

const FetchUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const { data } = await axios(githubUsersUrl);
      setUsers(data);
    };
    getUsers();
  }, []);

  return (
    <ul className="users">
      {users.map((user) => {
        const { id, login, avatar_url, html_url } = user;
        return (
          <li key={id}>
            <img src={avatar_url} alt={login} />
            <div>
              <h4>{login}</h4>
              <a href={html_url}>profile</a>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default FetchUsers;
