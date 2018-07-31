
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
class TechGroupCardClass extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { thisGroup } = this.props;

        console.log({ thisGroup });

        return (
            <div>
                <Card className="card">
                    <CardContent>
                        <Typography gutterBottom variant="headline" component="h2">
                            {/*{this.props.bizListings.name}*/}
                            { thisGroup.name }
                        </Typography>
                        <Typography component="p">
                            { thisGroup.type }
                        </Typography>
                        <Typography component="p">
                            { thisGroup.description }
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button color="primary" size="small">
                            Website
                        </Button>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

TechGroupCardClass.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TechGroupCardClass);