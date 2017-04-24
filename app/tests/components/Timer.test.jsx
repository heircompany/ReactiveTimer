const
expect = require("expect"),
React = require("react"),
ReactDOM = require("react-dom"),
TestUtils = require("react-addons-test-utils"),
$ = require("jQuery"),
Timer = require("Timer");

describe("Timer", () => {
    it("Should exist", () => {
        expect(Timer).toExist();
    });

    it("Should start timer on started status", (done) => {
        const timer = TestUtils.renderIntoDocument(<Timer/>);
        timer.handleStatusChange("started");
        expect(timer.state.count).toBe(0);

        setTimeout(() => {
            expect(timer.state.timerStatus).toBe("started");
            expect(timer.state.count).toBe(1);
            done();
        }, 1001);
    });

    it("Should pause timer on paused status", (done) => {
        const timer = TestUtils.renderIntoDocument(<Timer/>);

        timer.setState({count: 10});
        timer.handleStatusChange("started");
        timer.handleStatusChange("paused");

        setTimeout(() => {
            expect(timer.state.timerStatus).toBe("paused");
            expect(timer.state.count).toBe(10);
            done();
        }, 1001);
    });
    
    it("Should stop timer on stopped status", (done) => {
        const timer = TestUtils.renderIntoDocument(<Timer/>);

        timer.setState({count: 10});
        timer.handleStatusChange("started");
        timer.handleStatusChange("stopped");

        setTimeout(() => {
            expect(timer.state.timerStatus).toBe("stopped");
            expect(timer.state.count).toBe(0);
            done();
        }, 1001);
    });
});
