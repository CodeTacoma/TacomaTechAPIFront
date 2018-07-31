// import React from 'react'
// import PropTypes from 'prop-types'
//
// const BusinessDetails = ( {business} ) => {
//     return (
//         <section id="details-section">
//             <h2>{business.name}</h2>
//             <p id="details-section">
//                 {business.address}
//                 {business.city}, {business.state}
//                 {business.description}
//             </p>
//         </section>
//     )
// };
//
// BusinessDetails.PropTypes = {
//
// };
//
// export default BusinessDetails;

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
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
};

function BusinessDetailsCard(props) {
    //making a const for css classes, but why the props?
    const { classes } = props;

    return (
        <div>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.media}
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                        {props.items.name}
                    </Typography>
                    <Typography component="p">
                        {props.items.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary">
                        Contact
                    </Button>
                    <Button size="small" color="primary">
                        Learn More
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
}

BusinessDetailsCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BusinessDetailsCard);