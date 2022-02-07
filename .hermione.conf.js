module.exports = {
  sets: {
    defaule: {
      files: 'tests/desktop',
      browsers: ['chrome-390x840']
    }
  },
  browsers: {
    'chrome-1920x1080': {
      baseUrl: 'https://www.bork.ru',
      gridUrl: 'http://127.0.0.1:4444/wd/hub',
      windowSize: '1920x1080',
      calibrate: true,
      compositeImage: true,
      tolerance: 0,
      antialiasingTolerance: 0,
      sessionsPerBrowser: 1,
      screenshotMode: 'viewport',
      screenshotDelay: 2000,
      retry: 0,
      httpTimeout: 180000,
      sessionRequestTimeout: 180000,
      headless: true,
      desiredCapabilities: {
        browserName: 'chrome',
        'goog:chromeOptions': {
          args: [ 'headless' ]
        }
      },
      screenshotsDir: (test) => `tests/screenshots/${test.parent.title}`
    },
    'chrome-390x840': {
      baseUrl: 'https://www.bork.ru',
      gridUrl: 'http://127.0.0.1:4444/wd/hub',
      windowSize: '390x840',
      calibrate: true,
      compositeImage: true,
      tolerance: 0,
      antialiasingTolerance: 0,
      sessionsPerBrowser: 1,
      screenshotMode: 'viewport',
      screenshotDelay: 2000,
      retry: 0,
      httpTimeout: 180000,
      sessionRequestTimeout: 180000,
      headless: true,
      desiredCapabilities: {
        browserName: 'chrome',
        'goog:chromeOptions': {
          args: [ 'user-agent=Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1' ]
        }
      },
      screenshotsDir: (test) => `tests/screenshots/${test.parent.title}`
    }
  },
  plugins: {
    'html-reporter/hermione': {
      enabled: true,
      scaleImages: true,
      defaultView: 'failed',
      defaultView: 'all',
      baseHost: 'http://localhost/'
    }
  }
};
