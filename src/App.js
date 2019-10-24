import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { fetchData } from './actions'


class App extends Component {

  componentDidMount() {
    this.props.onFetchData()
  }

  render() {

    return (
        <div>
          {this.props.error && <p>{this.props.error}</p>}

          {this.props.data && <ul className={"fetching-list"}>
            <li>
              <h2>{this.props.data.title}</h2>
              <p>{this.props.data.body}</p>
            </li>
          </ul>}
        </div>
    );
  }
}


const mapStatetoProps = (state) => {
  return { data: state.data, error: state.error,}
};

const mapDispatchprops = (dispatch) => {
  return { onFetchData: () => dispatch(fetchData()) }
};


export default connect(mapStatetoProps, mapDispatchprops)(App);
