import React, { Fragment } from 'react';
import ShowPoster from './ShowPoster/ShowPoster';
import ShowInfo from './ShowInfo/ShowInfo';
import ShowDescription from './ShowDescription/ShowDescription';


function Show(props) {
    return (
        <Fragment>
            <div>
                <ShowPoster />
            </div>
            <div>
                <ShowInfo />
            </div>
            <div>
                <ShowDescription />
            </div>
        </Fragment>
    );
}

export default Show;