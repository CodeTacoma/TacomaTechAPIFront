import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
});

class BusinessExpansionPanel extends React.Component {
    state = {
        expanded: null,
       // bizns: null
    };

    componentDidMount() {
        //this.getBizListings();
    }

    getBizListings = async () => {
        try {
            const data = await fetch('/business');
            const prettyData = await data.json();
            //console.log(prettyData.bizListings);
            this.setState({ bizns: prettyData.bizListings })
        }
        catch (error) {
            console.log('error', error);
        }
    };

    handleChange = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false,
        });
    };

    render() {
        const { classes, bizns } = this.props;
        //const { expanded, bizns } = this.state;
        const { expanded } = this.state;

        //const { bizns } = this.props;
        //console.log(this.props.bizness);
        console.log({bizns});

        return (
            <div className={classes.root}>
                {bizns !== null ? (
                    <div className="biz-listings">
                        {/*<h1> Tech Businesses </h1>*/}
                        <div className="each-biz">
                            {bizns.map((eachBiz) => {
                                //landing cards should show categories the user can access from
                                //the "landing page"
                                return ( <ExpansionPanel expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')}>
                                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                        <Typography className={classes.heading}> {eachBiz.name} </Typography>
                                        <Typography className={classes.secondaryHeading}>
                                            {eachBiz.description}
                                        </Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        <Typography>
                                            put all the other info here

                                        </Typography>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>

                                )
                            })}
                        </div>
                    </div>
                ) : (
                    // uh oh, listings / categories didn't load, render a helpful message
                    //Would like to stick this code in the LandingCardClass but not sure yet?
                    <div>
                        <h1>brb, loading the biz</h1>
                    </div>
                )}
            </div>
        );
    }
}

BusinessExpansionPanel.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BusinessExpansionPanel);