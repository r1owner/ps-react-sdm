import React from 'react';
import PropTypes from 'prop-types';

/** Label with required field display, htmlFor, and block styling */
class DoRightProgressBar extends React.Component {
    static propTypes = {
        /** Percent of progress completed */
        percent: PropTypes.number.isRequired,
        /** Bar width (displayed) */
        width: PropTypes.number.isRequired,
    
        /** Bar height (displayed) */
        height: PropTypes.number
    }

    static defaultProps = {
        height: 5,
    }

    getColor = (percent) => {
        if (this.props.percent === 100) return 'green';
        
        return this.props.percent > 50 ? 'lightgreen' : 'red';
    }

    getWidthAsPercentOfTotalWidth = () => {
        return parseInt(this.props.width * (this.props.percent / 100), 10);
    }

    render(){
        const {percent, width, height} = this.props;

        return (
            <div style={{border: 'solid 1px gray', width: width}}>
                <div style={{
                    width: this.getWidthAsPercentOfTotalWidth(),
                    height,
                    backgroundColor: this.getColor(percent)
                }}/>
            </div>
        );
    } 
}


// DoRightProgressBar.propTypes = {
//     /** Percent of progress completed */
//     percent: PropTypes.number.isRequired,

//     /** Bar width (displayed) */
//     width: PropTypes.number.isRequired,

//     /** Bar height (displayed) */
//     height: PropTypes.number
// }

// DoRightProgressBar.defaultProps = {
//     height: 5,
// }
export default DoRightProgressBar;
