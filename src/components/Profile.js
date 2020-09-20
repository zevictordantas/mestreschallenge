import React, { useState } from "react";
import logo from "./logo.png";
import Displayprofile from "./Displayprofile";
import styled from 'styled-components';
import media from "./media"

const Logomarca = styled.img `
  height: 6rem;
  display: flex;
  margin-left: 5rem;
  margin-top: .2rem;

  ${media.desktop`
    height: 200px;
    display: inline;
    margin-top: 1rem;
    margin-left: 2rem;
    margin-right: auto;
  `};
`
const Textsearch = styled.p `
  margin-left: 1rem;
  font: 600 1.6rem Archivo;
  color: #FFFFFF;
  display: block;

  ${media.desktop`
  display: inline;
  font: 600 2.4rem Archivo;
   
  `};
`
const Block = styled.div `
${media.tablet`
  display: inline;
  align-items: center;
  justify-content: center;
  position: relative;
  display: flex;
  margin: 0 auto;
   
  `};
`

const Blocksearch = styled.div `

  align-items: center;
  justify-content: center;
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`
const Profilebutton = styled.button `
  font: 700 1rem Archivo;
  color: #FFFFFF;
  border: 2px solid #FFFFFF;
  width: 5rem;
  height: 3rem;
  box-sizing: border-box;
  border-radius: 20px;
  background: rgba(53, 6, 153, 0.0);
  margin-top: 2px;
  margin-left: 1rem;

`
const Profileinput = styled.input `
  font: 700 1rem Archivo;
  color: rgba(0, 0, 0, 0.8);
  border: 2px solid #FFFFFF;
  width: 10rem;
  height: 3rem;
  box-sizing: border-box;
  border-radius: 10px;
  background: #FFFFFF;
  margin-top: 2px;
  margin-left: 1rem;
  align-items: center;
  justify-content: space-between;
  text-align: center;

`


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
    <Block>
    <Logomarca src={logo} className="App-logo" alt="logo" />
    <Textsearch>Quer saber mais sobre algum
usuário do GitHub? Escreva o nick dele abaixo!</Textsearch>

    </Block>
      <div>
        <Blocksearch>
            <Profileinput
              placeholder="Github username"
              type="text"
              value={username}
              onChange={onChangeHandler}
            />

          <Profilebutton
            type="submit"
            onClick={submitHandler}
          >
            Buscar
          </Profilebutton>
        </Blocksearch>
      </div>
      <Displayprofile data={data} repositories={repositories} />
    </>
  );
};
export default Profile;