import React, { Component } from 'react';
import './App.css';

import LandingExpansionPanel from './components/LandingExpansionPanel'
import HeaderAppBar from "./components/HeaderAppBarClass";


class App extends Component {
    constructor(props) {
     super(props);
     this.state = {
         //listings: null,
         bizListings: null,
         cityListings: null,
         eduListings: null,
         eventListings: null,
         groupListings: null
         //displayList: 'categories'
     }
    }
    /*
        Fetch info after first mount.
        Currently fetches info for all arrays of info for the entire app, this
        may not continue if I find out this is a poor practice.  For now though it seems
        like an OK spot to do it?
     */
    componentDidMount() {
        //this.getListings();
        this.getBizListings();
        this.getCityListings();
        this.getEduListings();
        this.getEventListings();
        this.getTechGroupListings();
    }

    componentDidUpdate() {
        console.log("App updated");
    }

    /*
        Load category info for the "landing page" render the user will see first, also
        serves as the "home page" for the app.
        Much thanks to Gavin for getting me straightened out here and getting the listings []
        loaded properly!
     */
    getListings = async () => {
        // Get the listings and store them in state
        try {
            const data = await fetch('/api');
            const prettyData = await data.json();
            //console.log(prettyData.roots);
            this.setState({ listings: prettyData.roots })
        }
        catch (error) {
            console.log('error', error);
        }
    };

    getTechGroupListings = async () => {
        // Get the listings and store them in state
        try {
            const data = await fetch('/groups');
            const prettyData = await data.json();
            //console.log(prettyData.roots);
            this.setState({ groupListings: prettyData.groupListings })
        }
        catch (error) {
            console.log('error', error);
        }
    };

    getEventListings = async () => {
        // Get the listings and store them in state
        try {
            const data = await fetch('/events');
            const prettyData = await data.json();
            //console.log(prettyData.roots);
            this.setState({ eventListings: prettyData.eventsListings })
        }
        catch (error) {
            console.log('error', error);
        }
    };

    getEduListings = async () => {
        // Get the listings and store them in state
        try {
            const data = await fetch('/education');
            const prettyData = await data.json();
            //console.log(prettyData.roots);
            this.setState({ eduListings: prettyData.edulisting })
        }
        catch (error) {
            console.log('error', error);
        }
    };

    getCityListings = async () => {
        // Get the listings and store them in state
        try {
            const data = await fetch('/city');
            const prettyData = await data.json();
            //console.log(prettyData.roots);
            this.setState({ cityListings: prettyData.cityListings })
        }
        catch (error) {
            console.log('error', error);
        }
    };

    getBizListings = async () => {
        try {
            const data = await fetch('/business');
            const prettyData = await data.json();
            //console.log(prettyData.bizListings);
            this.setState({ bizListings: prettyData.bizListings })
        }
        catch (error) {
            console.log('error', error);
        }
    };

    /*
     * Reload the original cards/information, which should be the listings []
     * containing the categories of information the user can access.
     * Equivalent of return to home page.
     */
    // goHome = (event, items) => {
    //     event.preventDefault();
    //     return
    // }

    render() {
        const { cityListings, bizListings, eduListings, eventListings, groupListings } = this.state;

        return (

            <div className="App">
                <HeaderAppBar />
                <h1>Tacoma's Tech Ecosystem</h1>
                {/* Render the listings if we have them */}
                <LandingExpansionPanel
                    bizList={ bizListings }
                    cityList={ cityListings }
                    eduList={ eduListings }
                    eventList={ eventListings }
                    groupList={ groupListings }
                />
            </div>
        );
    }
}

export default App;

/////////////////////// old code below ////////////////////////////////////////////

//tried out rendering components with functions like these, a string in state that served as a var to
//select which type of card to render and a switch statement to make it happen.  I abandonded that approach
//now, will revisit if it makes sense after i get better at passing  state down the app tree, hahaha.


// renderLandingCards = (listings) => {
//     return listings.map((category) => {
//         // return <LandingPageCategoryCard items={category} />
//         return <LandingCardClass items={category}/>
//     })
// };

// renderBizCards = (listings) => {
//     return listings.map((category) => {
//         // return <LandingPageCategoryCard items={category} />
//         return <BusinessCardClass items={category}/>
//     })
// };