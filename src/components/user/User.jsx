import React, {
    Fragment, useEffect, useContext
} from 'react'
import Spinner from '../layout/Spinner'
import { Link } from 'react-router-dom'
import Repos from '../repo/Repos'
import GithubContext from '../../context/github/githubContext'

const User = ({ match }) => {
    const githubContext = useContext(GithubContext)
    const { getUser, user, loading, repos, getUserRepo } = githubContext

    useEffect(() => {
        getUser(match.params.login)
        getUserRepo(match.params.login)
        // eslint-disable-next-line
    }, [])


    const {
        name,
        avatar_url,
        location,
        bio,
        login,
        company,
        blog,
        html_url,
        followers,
        following,
        public_repos,
        public_gists,
        hireable
    } = user


    if (loading) return <Spinner />

    return (
        <Fragment>
            <Link to='/' className='btn btn-light'>Back to Search</Link>

            Hireable:{hireable ?
                <i className='fas fa-check text-sucess' /> :
                <i className='fas fa-times-circle text-danger' />}
            <div className="card grid-2">
                <div className="all-center">
                    <img src={avatar_url}
                        className='round-img'
                        alt=""
                        style={{ width: '150px' }} />
                    <h1>{name}</h1>
                    <p>Location: {location}</p>
                </div>
                <div>

                    {bio &&
                        <Fragment>
                            <h3>Bio</h3>
                            <p>{bio}</p>
                        </Fragment>}
                    <a href={html_url} className='btn btn-dark my-1'>Visit Github Profile</a>
                    <ul>
                        <li>
                            {login &&
                                <Fragment>
                                    <strong>Username:</strong> {login}
                                </Fragment>}

                        </li>
                        <li>
                            {company &&
                                <Fragment>
                                    <strong>Company:</strong> {company}
                                </Fragment>}

                        </li>
                        <li>
                            {blog &&
                                <Fragment>
                                    <strong>Blog:</strong> {blog}
                                </Fragment>}
                        </li>
                    </ul>
                </div>
            </div>

            <div className="card text-center">
                <span className="badge badge-primary">Followers: {followers}</span>
                <span className="badge badge-success">Following: {following}</span>
                <span className="badge badge-light">Public Repos: {public_repos}</span>
                <span className="badge badge-dark">Public Gists: {public_gists}</span>

            </div>
            <Repos repos={repos} />
        </Fragment>
    )
}

export default User
