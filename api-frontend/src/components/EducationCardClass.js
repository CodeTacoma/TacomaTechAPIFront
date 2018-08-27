
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
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
class EducationCardClass extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { thisSchool } = this.props;

        console.log({ thisSchool });

        return (
            <div>
                <Card className="card">
                    <CardContent>
                        <Typography gutterBottom variant="headline" component="h2">
                            {/*{this.props.bizListings.name}*/}
                            { thisSchool.name }
                        </Typography>
                        <Typography component="p">
                            {/*{this.props.bizListings.description}*/}
                            { thisSchool.type }
                        </Typography>
                        <Typography component="p">
                            {/*{this.props.bizListings.description}*/}
                            { thisSchool.address }
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

EducationCardClass.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EducationCardClass);