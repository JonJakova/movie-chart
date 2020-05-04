import React, { Fragment } from 'react';

function Header({onChangeSeason}) {
    return (
        <Fragment>
            <div>
                <img style={{maxWidth: "60px", height: 'auto'}} src={process.env.PUBLIC_URL + 'logo192.png'} alt='titleImg' />
                <div style={{display: 'inline'}}>
                    <div style={{display: 'inline'}}>
                        <span>Search</span>
                        <span onClick={onChangeSeason}>Winter</span>
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