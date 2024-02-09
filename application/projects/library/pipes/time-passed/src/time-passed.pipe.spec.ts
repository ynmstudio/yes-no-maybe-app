import { TimePassedPipe } from './time-passed.pipe';

var sinon = require('sinon');
import { ComponentFixture, TestBed } from '@angular/core/testing';

class NgZoneMock {
  runOutsideAngular(fn: Function) {
    return fn();
  }
  run(fn: Function) {
    return fn();
  }
}

describe('time-passed-pipe', () => {
  const now: Date = new Date();
  var clock: any;
  const oneSec = 1000;
  const oneMin = oneSec * 60;
  const oneHour = oneMin * 60;
  const oneDay = oneHour * 24;
  const oneMonth = oneDay * 30.416; // approximation 365/12

  let fixture: ComponentFixture<TimePassedPipe>;
  let pipe: TimePassedPipe;

  beforeEach(() => {
    clock = sinon.useFakeTimers(now.getTime());
    fixture = TestBed.createComponent(TimePassedPipe);
    pipe = fixture.componentInstance;
    fixture.detectChanges();
  });
  afterEach(() => {
    clock.restore();
  });
  describe('output tests', function () {
    it("'a few seconds' tests", () => {
      var pastDate = new Date();
      for (let i = 0; i < 45; i++) {
        clock.tick(oneSec);
        if (i < 44) {
          expect(pipe.transform(pastDate.toString())).toEqual('a few seconds');
        }
      }
    });
    it("'a minute' tests", () => {
      var pastDate = new Date();
      clock.tick(oneSec * 45);
      for (let i = 45; i < 89; i++) {
        clock.tick(oneSec);
        if (i < 89) {
          expect(pipe.transform(pastDate.toString())).toEqual('a minute');
        } else {
          expect(pipe.transform(pastDate.toString())).not.toEqual('a minute');
        }
      }
    });
    it("'x minutes' tests", () => {
      var pastDate = new Date();
      clock.tick(oneSec * 50);
      for (let i = 1; i < 44; i++) {
        clock.tick(oneMin);
        if (i < 44) {
          expect(pipe.transform(pastDate.toString())).toEqual(
            i + 1 + ' minutes'
          );
        } else {
          expect(pipe.transform(pastDate.toString())).not.toEqual(
            i + 1 + ' minutes'
          );
        }
      }
    });
    it("'an hour' tests", () => {
      var pastDate = new Date();
      //set the time forward 45 mins
      clock.tick(oneMin * 45);
      for (let i = 45; i < 120; i++) {
        clock.tick(oneMin);
        if (i < 90) {
          expect(pipe.transform(pastDate.toString())).toEqual('an hour');
        } else {
          expect(pipe.transform(pastDate.toString())).not.toEqual('an hour');
        }
      }
    });
    it("'x hours' tests", () => {
      var pastDate = new Date();
      //set the time forward 50 mins
      clock.tick(oneMin * 50);
      for (let i = 1; i < 25; i++) {
        clock.tick(oneHour);
        if (i < 22) {
          expect(pipe.transform(pastDate.toString())).toEqual(i + 1 + ' hours');
        } else {
          expect(pipe.transform(pastDate.toString())).not.toEqual(
            i + 1 + ' hours'
          );
        }
      }
    });
    it("'a day' tests", () => {
      var pastDate = new Date();
      clock.tick(oneHour * 22);
      for (let i = 22; i < 40; i++) {
        clock.tick(oneHour);
        if (i < 36) {
          expect(pipe.transform(pastDate.toString())).toEqual('a day');
        } else {
          expect(pipe.transform(pastDate.toString())).not.toEqual('a day');
        }
      }
    });
    it("'x days' tests", () => {
      var pastDate = new Date();
      clock.tick(oneHour * 35);
      for (let i = 1; i < 30; i++) {
        clock.tick(oneDay);
        if (i < 25) {
          expect(pipe.transform(pastDate.toString())).toEqual(i + 1 + ' days');
        } else {
          expect(pipe.transform(pastDate.toString())).not.toEqual(
            i + 1 + ' days'
          );
        }
      }
    });
    it("'a month' tests", () => {
      var pastDate = new Date();
      clock.tick(oneDay * 25);
      for (let i = 25; i < 50; i++) {
        clock.tick(oneDay);
        if (i < 45) {
          expect(pipe.transform(pastDate.toString())).toEqual('a month');
        } else {
          expect(pipe.transform(pastDate.toString())).not.toEqual('a month');
        }
      }
    });
    it("'x month' tests", () => {
      var pastDate = new Date();
      clock.tick(oneDay * 43);
      for (let i = 1; i < 13; i++) {
        clock.tick(oneMonth);
        if (i < 10) {
          expect(pipe.transform(pastDate.toString())).toEqual(
            i + 1 + ' months'
          );
        } else {
          expect(pipe.transform(pastDate.toString())).not.toEqual(
            i + 1 + ' months'
          );
        }
      }
    });
    it("'a year' tests", () => {
      var pastDate = new Date();
      clock.tick(oneDay * 345);
      for (let i = 345; i < 545; i++) {
        clock.tick(oneDay);
        if (i < 545) {
          expect(pipe.transform(pastDate.toString())).toEqual('a year');
        } else {
          expect(pipe.transform(pastDate.toString())).not.toEqual('a year');
        }
      }
    });
    it("'a year' tests", () => {
      var pastDate = new Date();
      clock.tick(oneMonth * 22);
      expect(pipe.transform(pastDate.toString())).toEqual(2 + ' years');
      clock.tick(oneMonth * 12);
      expect(pipe.transform(pastDate.toString())).toEqual(3 + ' years');
      clock.tick(oneMonth * 36);
      expect(pipe.transform(pastDate.toString())).toEqual(6 + ' years');
    });
  });
});
