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
        <h3>Timer With Hooks</h3>
        <TimerWithHooks />

        <hr/>

        <h3>Timer With Class</h3>
        <TimerWithClass />
    </div>
);



export default TimerExample;
