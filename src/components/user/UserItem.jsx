import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const UserItem = ({ user: { login, avatar_url } }) => {

    return (
        <div className='card text-center'>
            <img src={avatar_url}
                className='round-img'
                alt=''
                style={{ width: '60px' }} />
            <h3>{login}</h3>
            <div>
                <Link to={`/user/${login}`}
                    className="btn btn-dark btn-md  my-1"
                    style={{ borderRadius: '5px' }}>More</Link>
            </div>
        </div>
    )
}

UserItem.prototype = {
    user: PropTypes.object.isRequired,
}

export default UserItem
