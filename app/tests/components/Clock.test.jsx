const
React = require("react"),
ReactDOM = require("react-dom"),
expect = require("expect"),
$ = require("jQuery"),
TestUtils = require("react-addons-test-utils"),
Clock = require("Clock");

describe("Clock", () => {
    it("Should exist", () => {
        expect(Clock).toExist();
    });
});

describe("render", () => {
    it("Should render the Clock Component", () => {
        const clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62}/>);
        let $el = $(ReactDOM.findDOMNode(clock));
        let actualText = $el.find(".clock-text").text();
        expect(actualText).toBe("01:02");
    });
});

describe("formatSeconds", () => {
    it("Should format seconds", () => {
        const clock = TestUtils.renderIntoDocument(<Clock/>);
        let seconds = 637;
        let expected = "10:37";
        let actual = clock.formatSeconds(seconds);
        expect(actual).toBe(expected);
    });

    it("Should still format seconds when timer is set to less than 10 minutes", () => {
        const clock = TestUtils.renderIntoDocument(<Clock/>);
        let seconds = 69;
        let expected = "01:09";
        let actual = clock.formatSeconds(seconds);
        expect(actual).toBe(expected);
    });
});
