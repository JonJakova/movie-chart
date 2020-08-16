import React, { Fragment } from 'react';
import '../Show.css';
// import not_available from './not_available.png';

function ShowPoster(props) {
    let poster = props.poster;
    if(props.poster.length === 0){
        poster = process.env.PUBLIC_URL + '/not_available.png';
    }

    return (
        <Fragment>
            <img className="img db ba b--black-10"
                    alt='poster'
                    src={poster} />
        </Fragment>
    );
}

export default ShowPoster;