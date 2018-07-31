import React from 'react';
import EducationCardClass from './EducationCardClass'
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

class EducationCardListClass extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        const { eduList } = this.props;
        console.log({ eduList });

        return (
            <div className="school-card-list">
                {eduList !== null ? (
                    <div className="each-school">
                        {eduList.map((school) => {
                            return (
                                <EducationCardClass thisSchool={ school } />
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

} //end class ECLC

EducationCardListClass.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EducationCardListClass);