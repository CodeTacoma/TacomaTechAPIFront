import React from 'react';
import BusinessCardClass from './BusinessCardClass'

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

class BusinessCardListClass extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        const { bizList } = this.props;
        console.log({ bizList });

        return (
            <div className="business-card-list">
                {bizList !== null ? (
                    <div className="each-business">
                         {bizList.map((biz, index) => {
                             return (
                                 <BusinessCardClass key={index+biz} thisBiz={ biz } />
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

} //end class BCLC

BusinessCardListClass.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BusinessCardListClass);