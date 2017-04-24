const
React = require("react"),
{Link} = require("react-router"),
Clock = require("Clock"),
Controls = require("Controls"),
CountdownForm = require("CountdownForm");

const Timer = React.createClass({
    getInitialState: function () {
        return {
            count: 0,
            timerStatus: "stopped"
        };
    },
    // componentWillUpdate: function (nextProps, nextState) {
    //     console.log("componentWillUpdate");
    // },
    componentDidUpdate: function (prevProps, prevState) {
        if (this.state.timerStatus !== prevState.timerStatus) {
            switch (this.state.timerStatus) {
                case "started":
                    this.startTimer();
                    break;
                case "stopped":
                    this.setState({count: 0});
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
    },
    startTimer: function () {
        this.timer = setInterval(() => {
            this.setState({
                count: this.state.count + 1
            });
        }, 1000);
    },
    handleSetTimer: function (seconds) {
        this.setState({
            count: seconds,
            timerStatus: "started"
        });
    },
    handleStatusChange: function (newStatus) {
        this.setState({timerStatus: newStatus});
    },
    render: function () {
        let {count, timerStatus} = this.state;

        return (
            <div>
                <h2 className="page-title">Timer</h2>
                <Clock totalSeconds={count}/>
                <Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange}/>
            </div>
        );
    }
});

module.exports = Timer;
