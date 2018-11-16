import React, { useState, useEffect } from 'react';



const withHooksTimerContainer = (Component) => {
    const EnhancedComponent = (props) => {
        // Create a seconds hook.
        const [seconds, setSeconds] = useState(0);


        useEffect(() => {
            const timeoutHandler = window.setTimeout(() => {
                setSeconds(seconds + 1);
            }, 1000);

            return () => window.clearTimeout(timeoutHandler);
        });


        return (
            <Component
                time={seconds}
                {...props} />
        );
    }



    return EnhancedComponent;
}



export default withHooksTimerContainer;
