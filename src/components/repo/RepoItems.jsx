import React from 'react'

export const RepoItems = ({ repo }) => {
    return (
        <div className="card">
            <h3>
                <a href={repo.html_url}>{repo.name}</a>
            </h3>
            <p>{repo.description}</p>
        </div>
    )
}


export default RepoItems
