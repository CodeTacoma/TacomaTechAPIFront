import React from 'react';
import EventCardClass from './EventCardClass'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

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

class EventCardListClass extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        const { eventList } = this.props;
        console.log({ eventList });

        return (
            <div className="event-card-list">
                {eventList !== null ? (
                    <div className="each-event">
                        {eventList.map((event) => {
                            return (
                                <EventCardClass thisEvent={ event } />
                            )
                        })}
                    </div>
                ) : (
                    <div>
                        <h1 className="failed-load"> Go Rainiers! </h1>
                    </div>
                )}
            </div>
        );
    } //end render()

} //end class ECLC

EventCardListClass.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EventCardListClass);