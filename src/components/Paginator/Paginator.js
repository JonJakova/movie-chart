import React, { Fragment } from 'react';
import Pagination from '@material-ui/lab/Pagination';

function Paginator(props) {
    return (
        <Fragment>
            <Pagination onChange={props.onChangePage} count={10} color="secondary" showFirstButton showLastButton/>
        </Fragment>
    );
}

export default Paginator;