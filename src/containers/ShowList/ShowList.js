import React, { Component, Fragment } from 'react';
import ShowArray from '../../components/ShowMini/ShowArray';

class ShowList extends Component {
  constructor(props) {
    super();
    this.state = {
      showArray: []
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(resp => resp.json())
      .then(data => {
        this.setState({showArray: data})
      })
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
}

export default ShowList;