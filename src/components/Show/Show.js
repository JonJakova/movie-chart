import React, { Fragment } from 'react';
import ShowPoster from './ShowPoster/ShowPoster';
import ShowInfo from './ShowInfo/ShowInfo';
import ShowDescription from './ShowDescription/ShowDescription';

function Show(props) {
    const {currentShow} = props;    
    return (
        <Fragment>
            <div>
                <ShowPoster poster={currentShow.poster}/>
            </div>
            <div>
                <ShowInfo 
                    name={currentShow.name} 
                    tags={currentShow.tags} 
                    premiere={currentShow.premiere.substring(0, 10)} 
                    season={currentShow.season.charAt(0).toUpperCase()+currentShow.season.slice(1)}/>
            </div>
            <div>
                <ShowDescription description={currentShow.description}/>
            </div>
        </Fragment>
    );
}

export default Show;