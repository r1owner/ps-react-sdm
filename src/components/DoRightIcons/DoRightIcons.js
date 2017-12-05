import React from 'react';
import PropTypes from 'prop-types';
import iconPaths from './selection.js'; //the file exported from icoMoon

function getPath(iconName) {
    const icon = iconPaths.icons.find(icon => icon.properties.name === iconName);

    if (icon) {
        return icon.icon.paths;
    } else {
        console.warn(`icon ${iconName} does not exist.`);
        return '';
    }
}

function Icon(props) {
    const {width, height, color} = props;    

    return(
        <svg width={width} height={height} viewBox="0 0 1024 1024">
            <path d={getPath(props.iconName)} style={{fill: `${color}`}}></path>
        </svg>
    )
}

Icon.propTypes = {
    /** the string name of the icon to display */
    iconName: PropTypes.string.isRequired,
    /** the height of the icon */
    height: PropTypes.string,
    /** the width of the icon */
    width: PropTypes.string,
    /** Color of the icon */
    color: PropTypes.string,
};

Icon.defaultProps = {
    height: "16",
    width: "16",
    color: 'black'
}

export default Icon;