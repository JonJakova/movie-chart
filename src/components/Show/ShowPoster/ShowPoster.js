import React, { Fragment } from 'react';
import '../Show.css';

function ShowPoster(props) {
    return (
        <Fragment>
            <img className="img db ba b--black-10"
                    alt="poster"
                    src={props.poster} />
        </Fragment>
    );
}

export default ShowPoster;