import React, { Fragment } from 'react';
import './ShowMini.css';

function ShowMini(props) {
    if (props.premiere) {
        return (
            <Fragment>
                <div data-id={props.id} className='show-mini' onClick={props.onSelectShow} >
                    <div className="db center mw5 tc black link dim" title={props.name}>
                        <img className="db ba b--black-10"
                            alt="Name of the show"
                            src={props.poster} />
                        <dl className="mt2 f6 lh-copy">
                            <dt className="clip">Title</dt>
                            <dd className="ml0">{props.name}</dd>
                            <dt className="clip">TBD what will show here</dt>
                            <dd className="ml0 gray">{props.premiere.substring(0,10)}</dd>
                        </dl>
                    </div>
                </div>
            </Fragment>
        );
    } else {
        return (
            <Fragment>
                 <div data-id={props.id} className='show-mini' onClick={props.onSelectShow} >
                    <div className="db center mw5 tc black link dim" title={props.name}>
                        <img className="db ba b--black-10"
                            alt="Name of the show"
                            src={props.poster} />
                        <dl className="mt2 f6 lh-copy">
                            <dt className="clip">Title</dt>
                            <dd className="ml0">{props.name}</dd>
                            <dt className="clip">TBD what will show here</dt>
                            <dd className="ml0 gray">TBD</dd>
                        </dl>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default ShowMini;