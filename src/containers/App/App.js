import React, { Component, Fragment } from 'react';
import Header from '../../components/Header/Header';
import Paginator from '../../components/Paginator/Paginator';
import ShowList from '../ShowList/ShowList';
import './App.css';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      
    }
  }

  onChangePage = (event) => {
    //TODO stuff
    console.log(event.target.ariaLabel.substring(11));

    fetch('http://localhost:3002/page')
      .then(resp => resp.json())
      .then(data => console.log('from page'));
  }

  onChangeSeason = (event) => {
    //TODO stuff
    console.log(event.target.value);

    fetch('http://localhost:3002/seasons')
      .then(resp => resp.json())
      .then(data => console.log('from seasons'));
  }

  render(){
    return (
      <Fragment>
        <header>
          <Header onChangeSeason={this.onChangeSeason}/>
        </header>
        <div>
          <Paginator onChangePage={this.onChangePage}/> 
        </div>
        <div>
          <ShowList />
        </div>
      </Fragment>
    )
  }
}

export default App;