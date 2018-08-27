import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import BusinessCardListClass from './BusinessCardListClass'
import EducationCardListClass from './EducationCardListClass'
import EventCardListClass from './EventCardListClass'
import TechGroupCardListClass from './TechGroupCardListClass'
import LoadErrorPaper from './LoadError'

const styles = theme => ({
    root: {
        width: '100%',

    },
    heading: {
        fontSize: theme.typography.pxToRem(18),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
});

class LandingExpansionPanel extends React.Component {
    state = {
        expanded: null,
    };

    handleChange = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false,
        });
    };

    render() {
        const { classes, bizList, eduList, eventList, groupList } = this.props;
        const { expanded } = this.state;
        //console.log( {bizList} );

        return (

            <div>

                {/* begin businesses panel */}
                {bizList !== null ? ( //left off here, troubleshooting the process through to seeing the card list
                    //bizlisting is not null, yay! render it!
                    <ExpansionPanel expanded={expanded === 'businesses-panel'} onChange={this.handleChange('businesses-panel')}>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography className={classes.heading}> Businesses </Typography>
                            {/*<Typography className={classes.secondaryHeading}> South Sound Tech Companies</Typography>*/}
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>
                                {/*Tacoma & South Sound Tech Companies*/}
                                <BusinessCardListClass bizList={bizList}/>
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>

                ) : (
                <div>
                    {/* bizlistings is null, quick do something!*/}
                    {/*<h1 className="failed-load"> Go Rainiers! </h1>*/}
                    <LoadErrorPaper />
                </div>

                    // line below is end of the ternary statement for bisListings
                )}
                {/* end businesses panel */}

                {/* begin cities panel */}
                {/*{ cityList !== null ? (*/}
                    {/*<ExpansionPanel expanded={expanded === 'cities-panel'} onChange={this.handleChange('cities-panel')}>*/}
                        {/*<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>*/}
                            {/*<Typography className={classes.heading}> Cities </Typography>*/}
                            {/*/!*<Typography className={classes.secondaryHeading}> cities description here </Typography>*!/*/}
                        {/*</ExpansionPanelSummary>*/}
                        {/*<ExpansionPanelDetails>*/}
                            {/*<Typography>*/}
                                {/*Included Cities*/}
                                {/*<CityCardListClass cityList={ cityList }/>*/}
                            {/*</Typography>*/}
                        {/*</ExpansionPanelDetails>*/}
                    {/*</ExpansionPanel>*/}
                    {/*) : (*/}
                    {/*<div>*/}
                        {/*/!* cityList is null, quick do something!*!/*/}
                        {/*/!*<h1 className="failed-load"> Go Rainiers! </h1>*!/*/}
                        {/*<LoadErrorPaper />*/}
                    {/*</div>*/}
                    {/*// line below is end of the ternary statement for cityList*/}
                {/*)}*/}
                {/* end cities panel */}

                {/* begin education panel */}
                {eduList !== null ? (
                    <ExpansionPanel expanded={expanded === 'education-panel'} onChange={this.handleChange('education-panel')}>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography className={classes.heading}>Education</Typography>
                            {/*<Typography className={classes.secondaryHeading}> description here </Typography>*/}
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>
                                {/*Tech Education Resources*/}
                                <EducationCardListClass eduList={ eduList }/>
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    ) : (
                    <div>
                        {/* cityList is null, quick do something!*/}
                        {/*<h1 className="failed-load"> Go Rainiers! </h1>*/}
                        <LoadErrorPaper />
                    </div>
                    // line below is end of the ternary statement for eduList
                )}
                {/* end education panel */}

                {/* begin events panel */}
                {eventList !== null ? (
                    <ExpansionPanel expanded={expanded === 'events-panel'} onChange={this.handleChange('events-panel')}>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography className={classes.heading}> Events </Typography>
                            {/*<Typography className={classes.secondaryHeading}> description here </Typography>*/}
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>
                                {/*Local Tech Events*/}
                                <EventCardListClass eventList={ eventList }/>
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    ) : (
                    <div>
                        {/* eventList is null, quick do something!*/}
                        {/*<h1 className="failed-load"> Go Rainiers! </h1>*/}
                        <LoadErrorPaper />
                    </div>
                    // line below is end of the ternary statement for eventList
                )}
                {/* end events panel */}

                {/* begin techgroups panel */}
                {groupList !== null ? (
                    <ExpansionPanel expanded={expanded === 'groups-panel'} onChange={this.handleChange('groups-panel')}>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography className={classes.heading}> Tech Groups </Typography>
                            {/*<Typography className={classes.secondaryHeading}> description here </Typography>*/}
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>
                               {/*Area Tech Groups*/}
                                <TechGroupCardListClass groupList={ groupList }/>
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    ) : (
                    <div>
                        {/* groupList is null, quick do something!*/}
                        {/*<h1 className="failed-load"> Go Rainiers! </h1>*/}
                        <LoadErrorPaper />
                    </div>
                    // line below is end of the ternary statement for groupList
                )}

                {/* end techgroups panel */}

            </div> //this is the closing div tag for the return

        ); //end of return()
    } // end of render()
} //end of LEP

LandingExpansionPanel.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LandingExpansionPanel);