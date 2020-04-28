import React, { Fragment } from 'react';
import './ShowMini.css';

function ShowMini(props) {
    return (
        <Fragment>
            <div style={{padding: '2em'}} className='show-mini' onClick={props.onSelectShow} >

                <a className="db center mw5 tc black link dim"
                    title="From Props"
                    href="https://geo.itunes.apple.com/us/album/blonde/id1146195596?at=1l3vqFJ&mt=1&app=music">

                    <img className="db ba b--black-10"
                        alt="Name of the show"
                        src={process.env.PUBLIC_URL + 'poster.jpg'} />

                    <dl className="mt2 f6 lh-copy">
                        <dt className="clip">Title</dt>
                        <dd className="ml0">Tittle goes here</dd>
                        <dt className="clip">TBD what will show here</dt>
                        <dd className="ml0 gray">TBD what will show here</dd>
                    </dl>

                </a>
            </div>
        </Fragment>
    );
}

export default ShowMini;