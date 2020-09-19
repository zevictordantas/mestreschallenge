import React, { useState } from "react";
import Displayprofile from "./Displayprofile";

const Profile = () => {
  const [data, setData] = useState({});
  const [username, setUsername] = useState("");
  const [repositories, setRepositories] = useState([]);

  const onChangeHandler = e => {
    setUsername(e.target.value);
  };

  const submitHandler = async e => {
    e.preventDefault();

    const profile = await fetch(`https://api.github.com/users/${username}`);
    const profileJson = await profile.json();

    const repositories = await fetch(profileJson.repos_url);
    const repoJson = await repositories.json();
    console.log(repoJson);

    if (profileJson) {
      setData(profileJson);
      setRepositories(repoJson);
    }
  };
  return (
    <>
      <div>
        <div>
          <div>
            <input
              placeholder="buscar username aqui..."
              type="text"
              value={username}
              onChange={onChangeHandler}
            />
          </div>

          <button
            type="submit"
            onClick={submitHandler}
          >
            Buscar
          </button>
          <Displayprofile data={data} repositories={repositories} />
        </div>
      </div>
    </>
  );
};
export default Profile;