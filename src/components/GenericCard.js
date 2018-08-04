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


class GeneralCard extends React.Component {
  constructor(props) {
    super(props);
  }
  static PropTypes = {
    cardData: PropTypes.object
  }

    render() {
        const { cardData } = this.props;
        console.log(cardData)
        return (
            <div>
              {cardData.map((ele, index) => {
                return <Card key={index} className="card">
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
                        {/*<Button size="small" color="primary">*/}
                            {/*Map*/}
                        {/*</Button>*/}
                    </CardActions>
                </Card>

              })}
            </div>
        );
    }
}

GeneralCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GeneralCard);