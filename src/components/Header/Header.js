import React, { Fragment } from 'react';

function Header({onChangeSeason}) {
    return (
        <Fragment>
            <div>
                <img src='' alt='titleImg' />
                <div style={{display: 'inline'}}>
                    <div style={{display: 'inline'}}>
                        <span onClick={onChangeSeason} value='winter'>Winter</span>
                        <span onClick={onChangeSeason}>Spring</span>
                        <span onClick={onChangeSeason}>Summer</span>
                        <span onClick={onChangeSeason}>Fall</span>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Header;