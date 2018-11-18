// React
import React from 'react';

// Timer Components
import Timer from './Timer';
import HooksTimer from './HooksTimer';

// Containers
import withHooks from './hooks_container';
import withStatefulClass from './steteful_container';



const TimerWithHooksContainer = withHooks(Timer);
const TimerWithClassHOC = withStatefulClass(Timer);



const TimerExample = () => (
    <div>
        <h3>Timer With Hooks HOC</h3>
        <TimerWithHooksContainer />

        <hr/>

        <h3>Timer With Class HOC</h3>
        <TimerWithClassHOC />

        <hr/>

        <h3>Timer using Custom Hook</h3>
        <HooksTimer />
    </div>
);



export default TimerExample;
