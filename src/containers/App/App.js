import React, { Component, Fragment } from 'react';
import Header from '../../components/Header/Header';
import Paginator from '../../components/Paginator/Paginator';
import ShowList from '../ShowList/ShowList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.showListElement = React.createRef();
    this.state = {
      yearsList: this._currentYearList(),
      season: '',
      year: ''
    }
  }

  onChangePage = (event) => {
    fetch('http://localhost:3002/page')
      .then(resp => resp.json())
      .then(data => console.log('from page'));
  }

  onChangeSeason = (event) => {
    this.setState({
      season: event.target.innerText,
      year: this._getCurrentDate()
    });
    this.showListElement.current._resetDisplayedShow();
  }

  onChangeYear = (event) => {
    const info = event.target.innerText.split(/(\s+)/)
    this.setState({
      season: info[0],
      year: info[2],
      currentShow: {}
    });
    this.showListElement.current._resetDisplayedShow();
  }

  render() {
    return (
      <Fragment>
        <header>
          <Header yearsList={this.state.yearsList} onChangeSeason={this.onChangeSeason} onChangeYear={this.onChangeYear} />
        </header>
        <div>
          <Paginator onChangePage={this.onChangePage} />
        </div>
        <div>
          <ShowList ref={this.showListElement} year={this.state.year} season={this.state.season}/>
        </div>
      </Fragment>
    )
  }

  _currentYearList = () => {
    const date = this._getCurrentDate();
    let yearsList = [date - 1, date, date + 1];
    return yearsList;
  }

  _getCurrentDate = () => {
    return new Date().getFullYear();
  }
}

export default App;