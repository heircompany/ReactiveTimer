const
React = require("react"),
ReactDOM = require("react-dom"),
expect = require("expect"),
$ = require("jQuery"),
TestUtils = require("react-addons-test-utils"),
Controls = require("Controls");

describe("Controls", () => {
    it("Should exist", () => {
        expect(Controls).toExist();
    });

    describe("render", () => {
        it("Should render pause when started", () => {
            const controls = TestUtils.renderIntoDocument(<Controls countdownStatus="started"/>);
            let $el = $(ReactDOM.findDOMNode(controls));
            let $pauseButton = $el.find("button:contains(Pause)");
            expect($pauseButton.length).toBe(1);
        });

        it("Should render start when paused", () => {
            const controls = TestUtils.renderIntoDocument(<Controls countdownStatus="paused"/>);
            let $el = $(ReactDOM.findDOMNode(controls));
            let $pauseButton = $el.find("button:contains(Start)");
            expect($pauseButton.length).toBe(1);
        });
    });
});
