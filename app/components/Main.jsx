const
React = require("react"),
Nav = require("Nav");

const Main = (props) => {
    return (
        <div>
            <Nav/>
            <div className="row">
                <div className="columns medium-6 large-4 small-centered">
                    <h1 className="text-center page-title">Reactive Timer</h1>
                    {props.children}
                </div>
            </div>
        </div>
    );
}

module.exports = Main;
