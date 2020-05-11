import React, { Fragment, Component } from 'react';
import ShowArray from '../../components/ShowMini/ShowArray';
import Show from '../../components/Show/Show';

class ShowList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showArray: [],
      currentShowId: '',
      currentShow: {}
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

  render() {
    if (Object.keys(this.state.currentShow).length === 0) {
      return (
        <Fragment>
          <ShowArray onSelectShow={this.onSelectShow} showArray={this.state.showArray} />
        </Fragment>
      )
    }
    else {
      return (
        <Fragment>
          <Show currentShow={this.state.currentShow}/>
        </Fragment>
      )
    }
  }

  _changeSeason = (currentSeason, year) => {
    fetch('http://localhost:3002/seasons', {
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
    fetch('http://localhost:3002/show', {
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
    this.setState({currentShow: {}},
      () => console.log('after reset',this.state.currentShow))
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

}

export default ShowList;

//Object.keys(currentShow) === 0 && currentShow === Object