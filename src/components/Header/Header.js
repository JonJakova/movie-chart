import React, { Fragment } from 'react';
import './Header.css'

function Header({ onChangeYear ,onChangeSeason, yearsList }) {
    return (
        <Fragment>
            <div>
                <div className="navbar">
                    <div className="dropdown">
                        <button onClick={onChangeSeason} className="dropbtn">Winter
                            <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content">
                            <h4 onClick={onChangeYear}>Winter {yearsList[0]}</h4>
                            <h4 onClick={onChangeYear}>Winter {yearsList[1]}</h4>
                            <h4 onClick={onChangeYear}>Winter {yearsList[2]}</h4>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button onClick={onChangeSeason} className="dropbtn">Spring
                            <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content">
                            <h4 onClick={onChangeYear}>Spring {yearsList[0]}</h4>
                            <h4 onClick={onChangeYear}>Spring {yearsList[1]}</h4>
                            <h4 onClick={onChangeYear}>Spring {yearsList[2]}</h4>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button onClick={onChangeSeason} className="dropbtn">Summer
                            <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content">
                            <h4 onClick={onChangeYear}>Summer {yearsList[0]}</h4>
                            <h4 onClick={onChangeYear}>Summer {yearsList[1]}</h4>
                            <h4 onClick={onChangeYear}>Summer {yearsList[2]}</h4>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button onClick={onChangeSeason} className="dropbtn">Fall
                            <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content">
                            <h4 onClick={onChangeYear}>Fall {yearsList[0]}</h4>
                            <h4 onClick={onChangeYear}>Fall {yearsList[1]}</h4>
                            <h4 onClick={onChangeYear}>Fall {yearsList[2]}</h4>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn" onClick={onChangeSeason}>TBD
                            <i className="fa fa-caret-down"></i>
                        </button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Header;

// {/* <img className='icon' src={process.env.PUBLIC_URL + 'logo192.png'} alt='titleImg' /> */}
// <div className='bar'>
// <div className='bar'>
    // <h4>Search</h4>
    // <h4 onClick={onChangeSeason}>Winter</h4>
    // <h4 onClick={onChangeSeason}>Spring</h4>
    // <h4 onClick={onChangeSeason}>Summer</h4>
    // <h4 onClick={onChangeSeason}>Fall</h4>
// </div>
// </div>