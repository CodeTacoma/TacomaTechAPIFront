

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
//import Container from '@material-ui/core/Container';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import GenericCard from './GenericCard'
import BusinessCardListClass from './BusinessCardListClass'
import CityCardListClass from './CityCardListClass'
import EducationCardListClass from './EducationCardListClass'
import EventCardListClass from './EventCardListClass'
import TechGroupCardListClass from './TechGroupCardListClass'
import LoadErrorPaper from './LoadError'
import HeaderAppBar from './HeaderAppBarClass'

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

class ExpansionPanelComponent extends React.Component {
    state = {
        expanded: null,
    };

    handleChange = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false,
        });
    };

    render() {
        const { classes, allListings } = this.props;
        console.log(this.state)
        return (
            <div>
               { allListings.map((ele, index) => {
                   const abstractedData = Object.keys(ele)[1]
                   console.log(abstractedData)
                return <ExpansionPanel key={index} expanded={this.state.expanded === abstractedData} onChange={this.handleChange(abstractedData)}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className={classes.heading}>{abstractedData}</Typography>
                        {/*<Typography className={classes.secondaryHeading}> South Sound Tech Companies</Typography>*/}
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                            {/*Tacoma & South Sound Tech Companies*/}
                            <GenericCard key={index} cardData={ele[abstractedData]}/>
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                })  }

         
            </div> //this is the closing div tag for the return

        ); //end of return()
    } // end of render()
} //end of LEP

ExpansionPanel.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ExpansionPanelComponent);