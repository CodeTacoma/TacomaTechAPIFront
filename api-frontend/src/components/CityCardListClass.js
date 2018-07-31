import React from 'react';
import CityCardClass from './CityCardClass'
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

class CityCardListClass extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        const { cityList } = this.props;
        console.log({ cityList });

        return (
            <div className="city-card-list">
                {cityList !== null ? (
                    <div className="each-city">
                        {cityList.map((city) => {
                            return (
                                <CityCardClass thisCity={ city } />
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

} //end class CCLC

CityCardListClass.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CityCardListClass);