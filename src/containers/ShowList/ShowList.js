import React, { Fragment, Component } from 'react';
import ShowArray from '../../components/ShowMini/ShowArray';

class ShowList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showArray: []
    }
  }

  componentDidMount(){
    console.log('props in showlist', this.props);    

    this._changeSeason(this._setCurrentDate());    
  }

  componentDidUpdate(prevProps){
    console.log('from showListMount update', this.props);
    if(this.props.season !== prevProps.season){
      this._changeSeason(this.props.season);
    }
  }

  onSelectShow = (event) => {
    //TODO stuff
    fetch('http://localhost:3002/show')
      .then(resp => resp.json())
      .then(data => console.log('from show'))
  }

   render(){
    return (
      <Fragment>
        <ShowArray onSelectShow={this.onSelectShow} showArray={this.state.showArray}/>
      </Fragment>
    )
  }

  _changeSeason = (currentSeason) => {
    fetch('http://localhost:3002/seasons', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        season: currentSeason.toLowerCase()
      })
    })
      .then(resp => resp.json())
      .then(data => {
        this.setState({ showArray: data })
        console.log(this.state.showArray);
      });
  } 
  
  _setCurrentDate = () => {
    const time = new Date();
    const month = time.getMonth()+1;
    console.log('month is', month);
    
    if (3 <= month <= 5) {
      return 'spring';
    }
    else if (6 <= month <= 8) {
      return 'summer';
    }
    else if (9 <= month <= 11) {
      return 'fall';
    }
    else {
      return 'winter';
    }
  }

}

export default ShowList;