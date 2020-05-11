import React, { Fragment } from 'react';
import ShowMini from './ShowMini';
import './ShowMini.css';

function ShowArray({ showArray, onSelectShow }) {
    return (
        <Fragment>
            <div className='show-mini'>
                {showArray.map((unit, i) => {
                    return (
                        <ShowMini
                            key={showArray[i].name}
                            id={showArray[i].id}
                            name={showArray[i].name}
                            poster={showArray[i].poster}
                            premiere={showArray[i].premiere}
                            onSelectShow={onSelectShow}
                        />
                    )
                })}
            </div>
        </Fragment>
    );
}

export default ShowArray;
//showArray[i].premiere.substring(0,10)