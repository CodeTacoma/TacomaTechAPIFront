
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import BusinessCardClass from '../src/components/BusinessCardClass';

const styles = {
    card: {
        maxWidth: 600,

    }
};

class LandingCardClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bizListings: null
        };
        //this.displayBizCards = this.displayBizCards().bind(this);
    }

    componentDidMount() {
        //load all info for all arrays of listings
         this.getBizListings();
        // this.getCityListings();
        // this.getEduListings();
        // this.getEventListings();
        // this.getGroupsListings();
    }
    getBizListings = async () => {
        // Get the listings and store them in state
        try {
            const data = await fetch('/business');
            const prettyData = await data.json();
            console.log(prettyData.bizListings);
            this.setState({ bizListings: prettyData.bizListings })
        }
        catch (error) {
            console.log('error', error);
        }
    };

    handleDetailsClick(categoryName) {
        if(categoryName === "Businesses") {
            this.displayBizCards();
        }
    }

    displayBizCards = (props) => {

      return <BusinessCardClass cards={props.bizListings} />
    };

render()
{
    return (
        <div>
            <Card className="card">
                <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                        {this.props.items.name}
                    </Typography>
                    <Typography component="p">
                        {this.props.items.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button color="primary" size="small" >
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
}

LandingCardClass.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LandingCardClass);