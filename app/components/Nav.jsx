const
React = require("react"),
{Link, IndexLink} = require("react-router");

const Nav = React.createClass({
    render: function() {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text" id="logo"><a href="/">Reactive Timer</a></li>
                        <li>
                            <IndexLink to="/" activeClassName="active">Timer</IndexLink>
                        </li>
                        <li>
                            <Link to="/countdown" activeClassName="active">Countdown</Link>
                        </li>
                        <li>
                            <Link to="/about" activeClassName="active">About</Link>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <ul className="menu">
                        <li className="menu-text">
                            Created by <a href="https://github.com/heircompany/" target="_blank">Joe Grotto</a>
                        </li>
                </ul>
                </div>
            </div>
        );
    }
});

module.exports = Nav;
