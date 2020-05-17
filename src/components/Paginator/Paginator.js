import React, { Fragment } from 'react';

function Paginator(props) {
    return (
        <Fragment>
            <div className="mw8 center">
                <nav className="cf pa3 pa4-ns" data-name="pagination-next-prev">
                    <p className="fl dib link dim black f6 f5-ns b pa2" 
                        onClick={props.changePage}
                        data-id='left'
                        title="Previous">
                        &larr; Previous
                    </p>
                    
                    <p className="fr dib link dim black f6 f5-ns b pa2" 
                        onClick={props.changePage} 
                        data-id='right' 
                        title="Next">
                        Next &rarr;
                    </p>
                </nav>
            </div>
        </Fragment>
    );
}

export default Paginator;

