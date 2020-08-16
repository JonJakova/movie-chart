import React, { Fragment, Component } from 'react';
import ShowArray from '../../components/ShowMini/ShowArray';
import Show from '../../components/Show/Show';
import SearchBar from '../../components/SearchBar/SearchBar';

class ShowList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showArray: [],
      currentShowId: '',
      currentShow: {},
      searchField: ''
    }
  }

  componentDidMount() {
    this._changeSeason(this._setCurrentDate(), new Date().getFullYear());
  }

  componentDidUpdate(prevProps) {
    if (this.props.season !== prevProps.season
      || this.props.year !== prevProps.year) {
      this._changeSeason(this.props.season, this.props.year);
    }
  }

  onSelectShow = (event) => {
    this.setState({ currentShowId: event.currentTarget.dataset.id },
      () => this._changeDisplayedShow(this.state.currentShowId));
  }

  onSearchShow = (event) => {
    this.setState({searchField: event.target.value})
  }

  render() {
    if (Object.keys(this.state.currentShow).length === 0) {
      const {showArray, searchField} = this.state;
      const filterList = showArray?.filter(show => {
        return show.name.toLowerCase().includes(searchField.toLowerCase());
      });
      return (
        <Fragment>
        <div>
          <header>
            <SearchBar searchChange={this.onSearchShow}/>
          </header>
        </div>
          <div>
            <ShowArray onSelectShow={this.onSelectShow} showArray={filterList} />
          </div>
        </Fragment>
      )
    }
    else {
      return (
        <Fragment>
          <div>
            <Show currentShow={this.state.currentShow} />
          </div>
        </Fragment>
      )
    }
  }

  _changeSeason = (currentSeason, year) => {
    fetch('https://moviechart-api.herokuapp.com/seasons', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        season: currentSeason.toLowerCase(),
        year
      })
    })
      .then(resp => resp.json())
      .then(data => {
        this.setState({ showArray: data })
        console.log(this.state.showArray);
      });
  }

  _changeDisplayedShow = (id) => {
    fetch('https://moviechart-api.herokuapp.com/show', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id
      })
    })
      .then(resp => resp.json())
      .then(data => {
        this.setState({ currentShow: data },
          () => console.log('current selected show', this.state.currentShow))
      });
  }

  _resetDisplayedShow = () => {
    this.setState({ currentShow: {} },
      () => console.log('after reset', this.state.currentShow))
  }

  _setCurrentDate = () => {
    const time = new Date();
    const month = time.getMonth() + 1;

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

  _setPaginationLength = () => {

  }

}

export default ShowList;