import React from "react";
import styled from 'styled-components';
import media from "./media"

const Columsprofile = styled.div `
${media.phone`
  max-height: 500px;
  align-items: center;
  display: grid;
  grid-template-areas:
    "avatar profile";
  grid-template-columns: 6fr 6fr;
  `};
`
const Profileblock = styled.div `
margin-right: 20px;
margin-left: 20px;
${media.phone`
grid-area: profile;
max-width: 400px;
`};

`

const Avatarblock = styled.div `
  display: flex;
  justify-content: center;

  ${media.phone`
  grind-area: avatar; 
  display: flex;
  justify-content: right;
  margin-right: 2rem;
`};

`
const Avatar = styled.img `
  height: 10rem;
  display: block;
  border: 3px solid #FFFFFF;
  border-radius: 50%;

  ${media.tablet`
    height: 200px;
    display: inline;
    margin-right: 30px;
  `};
`

const Fullname = styled.p `
  font: 600 1.6rem Archivo;
  color: #FFFFFF;
  display: block;
  margin-top: 0; 

  ${media.tablet`
  display: block;
  font: 600 2.4rem Archivo;
  margin-top: 0; 
  `};
`
const Profileinfo = styled.p `
    font: 500 1.2rem Archivo;
    color: #FFFFFF;

    ${media.tablet`
    font: 500 1.4rem Archivo;
    `};
`

const Repoblock = styled.div `
  font: 700 1rem Archivo;
  color: #FFFFFF;
  border: 2px solid #FFFFFF;
  width: 90%;
  height: auto;
  box-sizing: border-box;
  border-radius: 20px;
  background: rgba(53, 6, 153, 0.0);
  margin: 10px 5% 10px 5%;
  padding: 1rem
`
const Linkrepo = styled.a `
text-decoration: none;
font: 600 1.3rem Archivo;
color: #FFFFFF;
margin-left: 1.2rem;
`
const Descri = styled.p `
text-decoration: none;
font: 500 1.1rem Archivo;
color: #FFFFFF;
margin-left: 1.1rem;
margin-right: 1.1rem;
`
const Lingua = styled.span `
text-decoration: none;
font: 600 1.1rem Archivo;
color: #FFFFFF;
margin-left: 1.1rem;
margin-right: 1.1rem;
margin-bottom: 1rem;
`


const Displayprofile = ({ data, repositories }) => {
  return (
    <>  
        <Columsprofile>
                <Avatarblock>
                    {!data.avatar_url ? (
                    " "
                    ) : (
                    <Avatar
                        src={data.avatar_url}
                        alt={data.avatar_url}
                    />
                    )}
                </Avatarblock>
                <Profileblock >    
                    <Fullname>{data.name}</Fullname>
                    <Profileinfo>{data.location}</Profileinfo>
                    <Profileinfo>{data.bio}</Profileinfo>
                </Profileblock>
        </Columsprofile>

        <aside>
            {repositories.map(repo => (
            <Repoblock key={repo.name}>
    
                    <Linkrepo href={repo.html_url}>
                    /{repo.name}
                    </Linkrepo>
                    <Descri>{repo.description}</Descri>
                    <Lingua>Linguagem: </Lingua>
                    <h>{repo.language}</h>         
            </Repoblock>
        ))}
        </aside>
    </>    
  );
};

export default Displayprofile;