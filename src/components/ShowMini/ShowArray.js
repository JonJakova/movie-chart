import React, { Fragment } from 'react';
import ShowMini from './ShowMini';

function ShowArray({ showArray, onSelectShow }) {
    return (
        <Fragment>
            <div>
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