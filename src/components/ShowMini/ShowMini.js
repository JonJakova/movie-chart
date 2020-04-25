import React, { Fragment } from 'react';

function ShowMini(props) {
    return (
        <Fragment>
            <p onClick={props.onSelectShow} style={{ padding: "3px" }}>
                {props.name}
            </p>
        </Fragment>
    );
}

export default ShowMini;