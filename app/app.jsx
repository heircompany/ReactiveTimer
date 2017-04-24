const
React = require("react"),
ReactDOM = require("react-dom"),
{Route, Router, IndexRoute, hashHistory} = require("react-router"),
Main = require("Main"),
Nav = require("Nav"),
About = require("About"),
Timer = require("Timer"),
Clock = require("Clock"),
Countdown = require("Countdown");

// load foundation
$(document).foundation();

// include css
require("style-loader!css-loader!sass-loader!applicationStyles");

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
        <Route path="countdown" component={Countdown}/>
        <Route path="about" component={About}/>
        <IndexRoute component={Timer}/>
        </Route>
    </Router>,
    document.getElementById("app")
);
