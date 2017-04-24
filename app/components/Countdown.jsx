const
React = require("react"),
{Link} = require("react-router"),
Clock = require("Clock");

const Countdown = React.createClass({
    render: function () {
        return (
            <div>
                <Clock totalSeconds={129}/>
            </div>
        );
    }
});

module.exports = Countdown;
