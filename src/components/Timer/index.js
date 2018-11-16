// React
import React from 'react';

// Timer Component
import Timer from './Timer';

// Containers
import withHooks from './hooks_container';
import withStatefulClass from './steteful_container';



const TimerWithHooks = withHooks(Timer);
const TimerWithClass = withStatefulClass(Timer);



const TimerExample = () => (
    <div>
        <TimerWithHooks />
        <TimerWithClass />
    </div>
);



export default TimerExample;
