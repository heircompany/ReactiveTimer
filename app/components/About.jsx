const
React = require("react"),
{Link} = require("react-router")

const About = (props) => {
    return (
        <div>
            <h2 className="page-title">About This App</h2>
            <h4 className="text-center">Development Tools:</h4>
            <ol>
                <li>
                    <a href="https://nodejs.org" target="_blank">NodeJS</a> - JavaScript Runtime
                </li>
                <li>
                    <a href="http://expressjs.com/" target="_blank">Express</a> - Web Framework for NodeJS
                </li>
                <li>
                    <a href="https://facebook.github.io/react" target="_blank">React</a> - Frontend JavaScript Framework
                </li>
                <li>
                    <a href="https://babeljs.io" target="_blank">Babel</a> - JavaScript Transpiler for ES6 and React
                </li>
                <li>
                    <a href="https://foundation.zurb.com" target="_blank">Foundation</a> - Responsive Frontend Framework
                </li>
                <li>
                    <a href="https://sass-lang.org" target="_blank">SASS</a> - With Node Sass for SCSS Compilation
                </li>
                <li>
                    <a href="https://webpack.js.org" target="_blank">Webpack</a> - JavaScript Module Bundler
                </li>
                <li>
                    <a href="https://karma-runner.github.io/1.0/index.html" target="_blank">Karma</a> - JavaScript Testing Environment
                </li>
                <li>
                    <a href="https://mochajs.org/" target="_blank">Mocha</a> - JavaScript Testing Framework
                </li>
                <li>
                    <a href="https://github.com/mjackson/expect" target="_blank">Expect</a> - Assertion Library for Testing
                </li>
                <li>
                    <a href="https://heroku.com" target="_blank">Heroku</a> - Cloud Environment to Host Application
                </li>
            </ol>
            <p className="text-center">Team Mead for Life.</p>
        </div>
    );
};

module.exports = About;
