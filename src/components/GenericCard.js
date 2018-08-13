import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import '../Styles/_GenericCard.css'

const styles = {
    card: {
        width: '100%',
    }
};


class GeneralCard extends React.Component {

  static PropTypes = {
    cardData: PropTypes.object
  }

    render() {
        const { cardData } = this.props;
        return (
            <div className="cardsContainers">
              {cardData.map((ele, index) => {
                return <div key={index} className="cardContainer">
                <Card className="card" >
                    <CardContent >
                        <Typography gutterBottom variant="headline" component="h2">
                            { ele.name }
                        </Typography>
                        <Typography component="p">
                            { ele.description }
                        </Typography>
                        {/*also want to add in more detail info either in a "details" type of
                        card or a UI element that expands.  just want to get these to render first*/}
                    </CardContent>
                    <CardActions>
                        <Button color="primary" size="small">
                            Website
                        </Button>
                        <a href={`https://www.google.com/search?q=${ele.name}`} target="_blank">
                            <Button size="small" color="primary">
                                Google
                            </Button>
                        </a>
                        <a href={`https://www.google.com.sa/maps/search/${ele.name}?hl=en`} target="_blank">
                            <Button size="small" color="primary">
                                Maps
                            </Button>
                        </a>
                    </CardActions>
                </Card>
                </div>

              })}
            </div>
        );
    }
}

GeneralCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GeneralCard);