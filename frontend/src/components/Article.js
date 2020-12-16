import React from 'react';


function Article(props) {
    const {title, text} = props;
    return (
        <div>
            <h2>{title}</h2>
            <p>
                {text}
            </p>
        </div>
    )

}

export default Article