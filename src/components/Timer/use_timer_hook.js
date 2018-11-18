import { useState, useEffect } from 'react';


/**
 * React custom hook that provides a timer functionality.
 * 
 * @function useTimer
 * 
 * @param {Number} [initialTime=0] - the initial time for the timer
 * 
 * @returns {Number} time passed since first use (per component)
 */
const useTimer =
    (initialTime = 0) => {
        const [time, setTime] = useState(initialTime);

        useEffect(() => {
            const timeoutHandler = window.setTimeout(() => {
                setTime(time + 1);
            }, 1000);

            return () => window.clearTimeout(timeoutHandler);
        });


        return time;
    }



export default useTimer;
