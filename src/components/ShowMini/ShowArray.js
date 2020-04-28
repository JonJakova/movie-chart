import React, { Fragment } from 'react';
import ShowMini from './ShowMini';
import './ShowMini.css';

function ShowArray({ showArray, onSelectShow }) {
    return (
        <Fragment>
            <div style={{display: 'flex', flexWrap: 'wrap'}} className='show-mini'>
                {showArray.map((unit, i) => {
                    return (
                        <ShowMini
                            key={showArray[i].id}
                            name={showArray[i].name}
                            onSelectShow={onSelectShow}
                        />
                    )
                })}
            </div>
        </Fragment>
    );
}

export default ShowArray;