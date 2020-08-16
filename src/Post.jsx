import React from  'react'

const Post = ({title, content}) =>{
    const styles = {
        border: '1px solid #eee',
        padding: '20px',
        maginLeft: 10 // magin-left: 10px => JSX used camelCase
    }
    return (
        <div style={styles}>
            <h3>
                {title}
            </h3>
            <p> {content}</p>
        </div>
    )
}

export default Post

