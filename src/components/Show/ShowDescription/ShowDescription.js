import React, { Fragment } from 'react';

function ShowDescription(props) {
    return (
        <Fragment>
            <div>
                <p>{props.description}</p>
            </div>
        </Fragment>
    );
}

export default ShowDescription;