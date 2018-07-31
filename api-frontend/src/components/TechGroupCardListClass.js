import React from 'react';
import TechGroupCardClass from './TechGroupCardClass'
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

class TechGroupCardListClass extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        const { groupList } = this.props;
        console.log({ groupList });

        return (
            <div className="group-card-list">
                {groupList !== null ? (
                    <div className="each-group">
                        {groupList.map((group) => {
                            return (
                                <TechGroupCardClass thisGroup={ group } />
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

} //end class TGCLC

TechGroupCardListClass.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TechGroupCardListClass);