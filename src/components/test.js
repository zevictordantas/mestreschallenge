import React from "react";

const Displayprofile = ({ data, repositories }) => {
  return (
    <>  
        <div>
                <div>
                    {!data.avatar_url ? (
                    " "
                    ) : (
                    <img
                        src={data.avatar_url}
                        alt={data.avatar_url}
                    />
                    )}
                </div>

                <p>{data.name}</p>
                <p>{data.login}</p>
                <p>{data.location}</p>
                <p>{data.bio}</p>
        </div>

        <aside>
            {repositories.map(repo => (
            <div key={repo.name}>
                <div>
                <div>
                    <a href={repo.html_url}>
                    {repo.name}
                    </a>
                    <p>{repo.description}</p>
                    <h>Linguagem:</h>
                    <h>{repo.language}</h>
                </div>
                </div>
            </div>
        ))}
        </aside>
    </>    
  );
};

export default Displayprofile;