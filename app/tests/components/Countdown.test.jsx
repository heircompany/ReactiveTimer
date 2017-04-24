const
expect = require("expect"),
React = require("react"),
ReactDOM = require("react-dom"),
TestUtils = require("react-addons-test-utils"),
$ = require("jQuery"),
Countdown = require("Countdown");

describe("Countdown", () => {
    it("Should exist", () => {
        expect(Countdown).toExist();
    });

    describe("handleSetCountdown", () => {
        it("Should set state to started and count down", (done) => {
            let countdown = TestUtils.renderIntoDocument(<Countdown/>);
            countdown.handleSetCountdown(10);

            expect(countdown.state.count).toBe(10);
            expect(countdown.state.countdownStatus).toBe("started");

            setTimeout(() => {
                expect(countdown.state.count).toBe(9);
                done();
            }, 1001);
        });

        it("Should not set count less than zero", (done) => {
            let countdown = TestUtils.renderIntoDocument(<Countdown/>);
            countdown.handleSetCountdown(1);

            setTimeout(() => {
                expect(countdown.state.count).toBe(0);
                done();
            }, 3001);
        });

        it("Should pause countdown on paused status", (done) => {
            let countdown = TestUtils.renderIntoDocument(<Countdown/>);
            countdown.handleSetCountdown(3);

            countdown.handleStatusChange("paused");
            setTimeout(() => {
                expect(countdown.state.count).toBe(3);
                expect(countdown.state.countdownStatus).toBe("paused");
                done();
            }, 1001);
        });

        it("Should stop and reset countdown on stopped status", (done) => {
            let countdown = TestUtils.renderIntoDocument(<Countdown/>);
            countdown.handleSetCountdown(3);

            countdown.handleStatusChange("stopped");
            setTimeout(() => {
                expect(countdown.state.count).toBe(0);
                expect(countdown.state.countdownStatus).toBe("stopped");
                done();
            }, 1001);
        });
    });
});
