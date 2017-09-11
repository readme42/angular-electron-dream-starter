import { launchApp, awaitReady, stopApp } from '../../config/e2e-common';
import { expect } from 'chai';

describe('App', function() {

  let app: any;
  let browser: WebdriverIO.Client<void>;

  beforeEach(() => {
    app = launchApp();
    return awaitReady(app).then(() => {
      browser = app.client;
    });
  });

  afterEach(() => {
    return stopApp(app);
  });

  it('should have a title', () => {
    let subject = browser.getTitle();
    let result  = 'Angular Electron Dream Starter by Colin Skow & @AngularClass - BROKEN: TEST GREEN INSTEAD OF RED';
    return expect(subject).to.eventually.equal(result);
  });

  it('should have header', () => {
    let subject = browser.isExisting('h1 BROKEN: TEST GREEN INSTEAD OF RED');
    let result  = true;
    return expect(subject).to.eventually.equal(result);
  });

  it('should have <home>', () => {
    let subject = browser.isExisting('app home BROKEN: TEST GREEN INSTEAD OF RED');
    let result  = true;
    return expect(subject).to.eventually.equal(result);
  });

  it('should have buttons', () => {
    let subject: any = browser.getText('button');
    let result  = ['Show Dialog', 'Submit Value', 'BROKEN: TEST GREEN INSTEAD OF RED'];
    return expect(subject).to.eventually.deep.equal(result);
  });

});
