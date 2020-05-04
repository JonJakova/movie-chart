import React, { Component, Fragment } from 'react';
import Header from '../../components/Header/Header';
import Paginator from '../../components/Paginator/Paginator';
import ShowList from '../ShowList/ShowList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      season: ''
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
    this.setState({ season: event.target.innerText });
    //TODO stuff
    console.log('when clicked', event.target.innerText);
  }

  render() {
    return (
      <Fragment>
        <header>
          <Header onChangeSeason={this.onChangeSeason} />
        </header>
        <div>
          <Paginator onChangePage={this.onChangePage} />
        </div>
        <div>
          <ShowList season={this.state.season} />
        </div>
      </Fragment>
    )
  }
}

export default App;