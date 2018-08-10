import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import GenericCard from './GenericCard'


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

    parseTerribleApiNaming(word) {
        // @chad youre terrible api naming conventions have ruined functional programming;)
        let shortHandWord = word.toLowerCase().split('l')[0]
        let prettyWord;
        switch(shortHandWord) {
            case 'biz':
                prettyWord = 'Business'
                break;
            case 'edu':
                prettyWord = 'Education'
                break;
            case 'events':
                prettyWord = 'Events'
                break;
            case 'group':
                prettyWord = 'Group'
                break;
            default:
                prettyWord = 'Whoops'
        }
        return prettyWord

    }

    render() {
        const { classes, allListings } = this.props;
        return (
            <div>
               { allListings.map((ele, index) => {
                   const abstractedData = Object.keys(ele)[1]
                return <ExpansionPanel key={index} expanded={this.state.expanded === abstractedData} onChange={this.handleChange(abstractedData)}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className={classes.heading}>{this.parseTerribleApiNaming(abstractedData)}</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails style={{width: '100%'}}>
                        <GenericCard key={index} cardData={ele[abstractedData]}/>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                })  }

         
            </div> //this is the closing div tag for the return

        ); //end of return()
    } // end of render()
} //end of LEP

ExpansionPanel.propTypes = {
    classes: PropTypes.object,
};

export default withStyles(styles)(ExpansionPanelComponent);