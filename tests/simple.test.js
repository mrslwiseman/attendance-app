import { resetDatabase } from 'meteor/xolvio:cleaner';

describe('reset the DB', function () {
  beforeEach(function () {
    resetDatabase();
  });
});

describe('my simple test', function () {
  it('this test should do something when it runs', function () {
    // This code will be executed by the test driver when the app is started
    // in the correct mode
  })
})