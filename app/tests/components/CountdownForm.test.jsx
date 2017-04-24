const
expect = require("expect"),
React = require("react"),
ReactDOM = require("react-dom"),
TestUtils = require("react-addons-test-utils"),
$ = require("jQuery"),
CountdownForm = require("CountdownForm");

describe("CountdownForm", () => {
    it("Should exist", () => {
        expect(CountdownForm).toExist();
    });

    it("Should call onSetCountdown if input is valid", () => {
        let spy = expect.createSpy();
        let countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
        let $el = $(ReactDOM.findDOMNode(countdownForm));

        countdownForm.refs.seconds.value = "11"
        TestUtils.Simulate.submit($el.find("form")[0]);
        expect(spy).toHaveBeenCalledWith(11);
    });

    it("Should not call onSetCountdown if input is invalid", () => {
        let spy = expect.createSpy();
        let countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
        let $el = $(ReactDOM.findDOMNode(countdownForm));

        countdownForm.refs.seconds.value = "puddles"
        TestUtils.Simulate.submit($el.find("form")[0]);
        expect(spy).toNotHaveBeenCalled();
    });
    
    // it("", () => {
    //
    // });
});
