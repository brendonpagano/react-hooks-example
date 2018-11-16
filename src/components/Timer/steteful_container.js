import React, { PureComponent } from 'react';


const withStatefulTimerContainer = (Component) => {
    class EnhancedComponent extends PureComponent {

        state = {
            seconds: 0
        };


        componentDidMount() {
            this.intervalHandler = window.setInterval(() => {
                this.setState((prevState) => ({ seconds: prevState.seconds + 1 }));
            }, 1000);
        }

        componentWillUnmount() {
            window.clearInterval(this.intervalHandler);
        }


        render() {
            const { seconds } = this.state;

            return (
                <Component
                    time={seconds}
                    {...this.props} />
            );
        }

    }


    return EnhancedComponent;
}



export default withStatefulTimerContainer;
