const
React = require("react"),
{Link} = require("react-router");

const Timer = React.createClass({
    render: function () {
        return (
            <div>
                <h2 className="text-center page-title">Timer</h2>
            </div>
        );
    }
});

module.exports = Timer;
