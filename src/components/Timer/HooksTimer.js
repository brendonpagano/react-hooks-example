import React from 'react';
import useTimer from './use_timer_hook';

import Timer from './Timer';


const HooksTimer = () => {
    const seconds = useTimer();

    return (
        <Timer
            time={seconds} />
    );
};



export default HooksTimer;
