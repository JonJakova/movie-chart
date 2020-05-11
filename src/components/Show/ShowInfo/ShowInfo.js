import React, { Fragment } from 'react';

function ShowInfo(props) {
    if (props.premiere) {
        return (
            <Fragment>
                <div>
                    <p>{props.name}</p>
                    <p>{props.tags}</p>
                    <p>{props.premiere}</p>
                    <p>{props.season}</p>
                </div>
            </Fragment>
        );
    }
    else {
        return (
            <Fragment>
                <div>
                    <p>{props.name}</p>
                    <p>{props.tags}</p>
                    <p>TBA</p>
                    <p>{props.season}</p>
                </div>
            </Fragment>
        );
    }
}

export default ShowInfo;