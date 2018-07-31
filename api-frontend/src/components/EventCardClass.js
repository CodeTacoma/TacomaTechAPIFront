
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
        maxWidth: 600,
    }
};

/*
    Displays information about each business listed in the
    return array.
 */
class EventCardClass extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { thisEvent } = this.props;

        console.log({ thisEvent });

        return (
            <div>
                <Card className="card">
                    <CardContent>
                        <Typography gutterBottom variant="headline" component="h2">
                            {/*{this.props.bizListings.name}*/}
                            { thisEvent.name }
                        </Typography>
                        <Typography component="p">
                            { thisEvent.type }
                        </Typography>
                        <Typography component="p">
                            { thisEvent.description }
                        </Typography>
                        <Typography component="p">
                            Event begin: { thisEvent.begin }
                        </Typography>
                        <Typography component="p">
                            Event end: { thisEvent.end }
                        </Typography>
                        {/*also want to add in more detail info either in a "details" type of
                        card or a UI element that expands.  just want to get these to render first*/}
                    </CardContent>
                    <CardActions>
                        <Button color="primary" size="small">
                            Website
                        </Button>
                        <Button size="small" color="primary">
                            Map
                        </Button>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

EventCardClass.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EventCardClass);