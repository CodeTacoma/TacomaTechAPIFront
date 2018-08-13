import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import HeaderAppBar from "./components/HeaderAppBarClass";
import {fetchAllListings} from './Actions/TechActions.js'
import Home from './components/Home'
import About from './components/About'
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
    const {loading} = this.state
  return (
        <Router>
        <div className="App">
            <HeaderAppBar />
            <Route exact path="/" component={!!loading ? LoadError : Home}/>
            <Route path="/about" component={About}/>
            {/* TODO: @CHENNEY this is where you would create the resources page and give it aroute here. */}
            {/* <Route path="/resources" component={Resources}/> */}
        </div>
        </Router>
        );    
    }
}

// This is where we connect to the redux store and have access to all the items in our store by mapping them from stateStore to this components Props.. Now we have access to any of this stuff through props. 
// We aren't actually using this data yet, I only left it in so others understand what's going on.
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