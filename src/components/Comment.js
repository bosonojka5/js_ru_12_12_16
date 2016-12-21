import React, {PropTypes} from 'react'

function Comment(props) {

    const { comment: { text, user } } = props
    return (
        <div>
            {text} <b>{user}</b>
        </div>
    )
}

Comment.PropTypes = {
    text: PropTypes.string,
    user: PropTypes.string
}

export default Comment