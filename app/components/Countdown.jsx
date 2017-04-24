const
React = require("react"),
{Link} = require("react-router"),
Clock = require("Clock"),
Controls = require("Controls"),
CountdownForm = require("CountdownForm");

const Countdown = React.createClass({
    getInitialState: function () {
        return {
            count: 0,
            countdownStatus: "stopped"
        };
    },
    // componentWillUpdate: function (nextProps, nextState) {
    //     console.log("componentWillUpdate");
    // },
    componentDidUpdate: function (prevProps, prevState) {
        if (this.state.countdownStatus !== prevState.countdownStatus) {
            switch (this.state.countdownStatus) {
                case "started":
                    this.startTimer();
                    break;
                case "stopped":
                    this.setState({count: 0})
                case "paused":
                    clearInterval(this.timer)
                    this.timer = undefined;
                    break;
            }
        }
    },
    // componentWillMount: function () {
    //     console.log("componentWillMount");
    // },
    // componentDidMount: function () {
    //     console.log("componentDidMount");
    // },
    componentWillUnmount: function () {
        console.log("componentDidUnMount");
        clearInterval(this.timer);
        this.timer = undefined;
    },
    startTimer: function () {
        this.timer = setInterval(() => {
            let newCount = this.state.count - 1;
            this.setState({
                count: newCount >= 0 ? newCount : 0
            });
            if (newCount === 0) {
                this.setState({countdownStatus: "stopped"});
            }
        }, 1000);
    },
    handleSetCountdown: function (seconds) {
        this.setState({
            count: seconds,
            countdownStatus: "started"
        });
    },
    handleStatusChange: function (newStatus) {
        this.setState({countdownStatus: newStatus});
    },
    render: function () {
        let {count, countdownStatus} = this.state;
        let renderControlArea = () => {
            if (countdownStatus !== "stopped") {
                return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>;
            } else {
                return <CountdownForm onSetCountdown={this.handleSetCountdown}/>;
            }
        };
        return (
            <div>
                <Clock totalSeconds={count}/>
                {renderControlArea()}
            </div>
        );
    }
});

module.exports = Countdown;
