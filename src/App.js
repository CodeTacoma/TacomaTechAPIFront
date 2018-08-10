import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import ExpansionPanelComponent from './components/ExpansionPanelComponent'
import HeaderAppBar from "./components/HeaderAppBarClass";
import {fetchAllListings} from './Actions/TechActions.js'
import LoadError from './components/LoadError';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        loading: true
    }
   }

async componentDidMount() {
    this.setState({loading: true}, async () => {
        await this.props.fetchAllListings()
        this.setState({loading: false})

    })
}

render() {
  return (

      <div className="App">
        <HeaderAppBar />
        <h1>Tacoma's Tech Ecosystem</h1>
        { this.state.loading ? <LoadError/> :  <ExpansionPanelComponent allListings={this.props.allListings}/> }
      </div>
  );
}
}

// This is where we connect to the redux store and have access to all the items in our store by mapping them from stateStore to this components Props.. Now we have access to any of this stuff through props. 
const mapStateToProps = state => ({
    Biz: state.Biz,
    City: state.City,
    EDU: state.EDU,
    Events: state.Event,
    Group: state.Group,
    allListings: [state.Biz, state.EDU, state.Event, state.Group]
});

const mapDispatchToProps = dispatch => ({
  fetchAllListings: () => dispatch(fetchAllListings())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);