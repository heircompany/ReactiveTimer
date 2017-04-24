const
React = require("react"),
{Link} = require("react-router");

const Countdown = React.createClass({
    render: function () {
        return (
            <div>
                <h2 className="text-center page-title">Countdown</h2>
            </div>
        );
    }
});

module.exports = Countdown;
