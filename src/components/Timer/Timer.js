import React from 'react';
import PropTypes from 'prop-types';



const Timer = ({
    time,
    ...rest
}) => (
    <div {...rest}>
        <p>
            <strong>{time}</strong> seconds have passed since component mounted.
        </p>
    </div>
);



Timer.propTypes = {
    time: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]).isRequired,
};



export default Timer;
