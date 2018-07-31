
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
        maxWidth: 600
    }
};

// const handleListingsClick = (event) => {
//
// };

function LandingPageCategoryCard(props) {
    //making a const for css classes, but why the props?
    const { classes } = props;

    return (
        <div>
            <Card className={classes.card}>
                {/*<CardMedia*/}
                    {/*className={classes.media}*/}
                    {/*image="/static/images/cards/contemplative-reptile.jpg"*/}
                    {/*title="Contemplative Reptile"*/}
                {/*/>*/}
                <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                        {props.items.name}
                    </Typography>
                    <Typography component="p">
                        {props.items.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button color="primary" size="small" className={classes.listings} >
                        Listings
                    </Button>
                    <Button size="small" color="primary">
                        Learn More
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
}

LandingPageCategoryCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LandingPageCategoryCard);