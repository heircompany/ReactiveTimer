const
React = require("react"),
ReactDOM = require("react-dom"),
{Route, Router, IndexRoute, hashHistory} = require("react-router"),
Main = require("Main"),
Nav = require("Nav"),
About = require("About"),
Timer = require("Timer"),
Countdown = require("Countdown");

// load foundation
require("style-loader!css-loader!foundation-sites/dist/css/foundation.min.css")
$(document).foundation();

// include css
require("style-loader!css-loader!sass-loader!applicationStyles");

ReactDOM.render(
    <Router history={hashHistory}>
        <IndexRoute component={Nav}/>
        <Route path="/" component={Main}>
        <Route path="timer" component={Timer}/>
        <Route path="countdown" component={Countdown}/>
        <Route path="about" component={About}/>
        </Route>
    </Router>,
    document.getElementById("app")
);
