
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
        maxWidth: 600,

    }
};

class ErrorCardClass extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Card className="card">
                    <CardContent>
                        <Typography gutterBottom variant="headline" component="h2">
                            Didn't work out, fam.
                        </Typography>
                        <Typography component="p">
                            something went wrong!
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

export default withStyles(styles)(ErrorCardClass);