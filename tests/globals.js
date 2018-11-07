import chromeDriver from 'chromedriver'

export const before = (browser, done) => {
  chromeDriver
    .start([], true)
    .then(done)
}

export const after = (browser, done) => {
  chromeDriver.stop()
  done()
}
