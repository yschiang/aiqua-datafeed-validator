import React from 'react';
import PropTypes from 'prop-types';

import CircularProgress from "@material-ui/core/es/CircularProgress/CircularProgress";

const ImageProgress = props => {

    const imgPreviewStyle = {
        position: 'absolute',
        backgroundImage: `url(${props.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: 150,
        height: 150,
    };

    const imgProgressStyle = {
        position: 'absolute',
        width: '100%',
        height: `${100 - props.progress}%`,
        transition: 'height 0.5s',
        backgroundColor: 'white',
        opacity: 0.5
    };

    const frontStyle = {
        backfaceVisibility: 'hidden',
        height: '100%',
        width: '100%',
        position: 'absolute',
        zIndex: 20,
    };

    const backStyle = {
        transform: 'rotateY(180deg)',
        backgroundColor: 'whitesmoke',
        height: 'inherit',
        width: 'inherit',
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10,
    };

    const progressCtrStyle = {
        transition: 'all 1.0s linear',
        transformStyle: 'preserve-3d',
        transform: `rotateY(${props.completed ? '180' : 0}deg)`,
        height: '100%',
        width: '100%',
    };

    return (
        <div style={progressCtrStyle}>
            <div style={frontStyle}>
                <div style={imgPreviewStyle}/>
                <div style={imgProgressStyle}/>
            </div>
            <div style={backStyle}>
                <CircularProgress />
            </div>
        </div>
    );

};

ImageProgress.propTypes = {
    src: PropTypes.string.isRequired,
    progress: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired
};

export default ImageProgress;